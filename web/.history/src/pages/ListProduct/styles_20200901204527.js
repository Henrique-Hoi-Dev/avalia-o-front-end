import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .header-main {
    background: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border: 0.1rem solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin: -3rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;
  }

  select {
    width: 100%;
    height: 3.6rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  input {
    width: 100%;
    height: 3.6rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  .form-input {
    border: 0;
    padding: 0 2.4rem;
    margin-top: 0.1rem;

    button {
      background: none;
      border: 0;
      margin: 1rem;
      color: var(--color-primary);
      font: 700 1.6rem Archivo;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.03, '#6842c2')};
      }
    }
  }
  .header-title label {
    font: 700 1.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }
  main {
    margin: 3.2rem auto;
    width: 90%;
  }
`;
