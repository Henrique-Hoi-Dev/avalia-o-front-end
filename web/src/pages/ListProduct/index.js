import React from 'react';
import Header from '../../components/HeaderList';
import { Formik, Field } from 'formik';
import { Container } from './styles';

function ListProduct() {
  return (
    <Container>
      <Header />
      <div>
        <Formik
          initialValues={{
            Product: '',
          }}
          render={({ values }) => (
            <form>
              <div>
                <label>Produto</label>
                <Field name="product" type="text" />
              </div>
              <button type="submit">Buscasr </button>
            </form>
          )}
        />
      </div>
    </Container>
  );
}

export default ListProduct;
