import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 20rem;
    height: 20rem;
  }

  @media (min-width: 700px) {
    img {
      width: 40rem;
      height: 40rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  padding: 2rem;
  max-width: 315px;
  text-align: center;

  border-radius: 0.8rem;
  background: var(--color-box-base);
  border: 0.1rem solid var(--color-line-in-white);

  -webkit-box-shadow: 1px 1px 3px 1px #999;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  input {
    width: 100%;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    font: 1.2rem Archivo;

    border-radius: 0.6rem;
    height: 2.5rem;
    padding: 0 1rem;
    margin: 0 0 1rem;
  }

  span {
    color: #ff0000;
    align-self: flex-start;
    margin: 0 0 1rem;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #8398c9;
    color: #333;
    font-weight: bold;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.3s;

    &:hover {
      color: ${darken(0.03, '#fff')};
      background: ${darken(0.03, '#8398c9')};
    }
  }

  a {
    color: #333;
    margin-top: 15px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 2;
    }
  }

  @media (min-width: 1000px) {
    form {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
    }

    input {
      width: 100%;
      background: var(--color-input-background);
      border: 1px solid var(--color-line-in-white);
      font: 2rem Archivo;

      border-radius: 0.6rem;
      height: 4.2rem;
      padding: 0 1.5rem;
      margin: 0 0 1rem;
    }

    span {
      color: #ff0000;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #8398c9;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#8398c9')};
      }
    }

    a {
      color: #000;
      margin-top: 15px;
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
