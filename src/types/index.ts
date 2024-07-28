export interface Movie {
  name: string;
  posterImage: string;
}

export interface MovieContextProps {
  movies: Movie[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  observerRef: React.RefObject<HTMLDivElement>;
}

export interface MovieCardProps {
  movie: Movie;
}

export interface SearchBarProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}
