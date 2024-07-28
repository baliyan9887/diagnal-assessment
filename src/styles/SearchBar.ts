import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;

  &.full {
    width: 100%;
  }
`;

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #d2d2d2;
  outline: 0;
  font-size: 14px;
  color: #fff;
  padding: 7px 0 7px 35px; /* Adjust padding to make room for the icon */
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    padding-bottom: 6px;
    border-bottom: 2px solid #fff;
  }

  &:focus ~ .form__label {
    color: #009788;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 16px;
    cursor: text;
    top: 20px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  transition: 0.2s ease-out;
  font-size: 12px;
  color: #9b9b9b;
`;

export const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
  transition: transform 0.3s ease-out;

  /* Initial position off-screen to the right */
  transform: translateX(100%);

  &.visible {
    /* Move to the normal position */
    transform: translateX(0);
  }

  .startIcon {
    position: absolute;
    left: 10px;
    color: #fff;
    top: 25px;
    width: 14px;
    height: 14px;
  }

  .endIcon {
    position: absolute;
    right: 10px;
    color: #fff;
    cursor: pointer;
    top: 25px;
    width: 14px;
    height: 14px;
  }
`;
