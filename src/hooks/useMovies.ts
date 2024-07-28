import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { Movie } from '../types';

const FALLBACK_IMAGE = 'https://via.placeholder.com/100x150';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchMovies = async (pageNum: number) => {
    try {
      const response = await axios.get(
        `https://test.create.diagnal.com/data/page${pageNum}.json`
      );

      // Check if response.data.content is an array
      const data = response.data.page['content-items'].content;

      // Check if data is iterable and transform it into Movie type
      const transformedMovies: Movie[] = Array.isArray(data)
        ? data.map((item) => ({
            name: item.name,
            posterImage: `https://test.create.diagnal.com/images/${item['poster-image'] || FALLBACK_IMAGE}`,
          }))
        : [];

      if (Array.isArray(data)) {
        setMovies((prevMovies) => [...prevMovies, ...transformedMovies]);
      } else {
        console.error('Unexpected data format: content is not an array', data);
      }

      // Check if more data is available
      if (data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setHasMore(false); // Stop further fetching on error
    }
  };

  useEffect(() => {
    if (hasMore) fetchMovies(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadMoreMovies = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  // Use Intersection Observer to detect scroll near the bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreMovies();
        }
      },
      { rootMargin: '100px' }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, loadMoreMovies]);

  return { movies, loadMoreMovies, observerRef };
};
