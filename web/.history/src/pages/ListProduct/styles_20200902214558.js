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

  input,
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
  .header-title span {
    color: #ff0000;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  label {
    font: 700 1.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 1.4rem;
    margin-top: 1rem;
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
  .table-list {
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 1.4rem;

    thead {
      font: 700 2.4rem Archivo;
      display: block;
      color: var(--color-text-title);
    }

    tbody {
      margin-left: 2.4rem;
    }
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
  }

  @media (min-width: 1100px) {
    #header-busca {
      max-width: 1100px;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 210px;
      grid-template-areas: 'buscar categoria ';
    }

    .buscar {
      grid-area: buscar;
      margin-right: 1.5rem;
    }

    .categoria {
      grid-area: categoria;
    }
  }
`;
