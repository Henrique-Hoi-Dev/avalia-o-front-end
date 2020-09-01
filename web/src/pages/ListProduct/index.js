import React from 'react';
import Header from '../../components/HeaderList';
import { Formik, Field, Form } from 'formik';
import { Container } from './styles';

function ListProduct() {
  function onSubmit(values, actions) {
    console.log(values);
  }
  return (
    <Container>
      <Header />
      <div className="header-main">
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            product: '',
          }}
          render={({ values }) => (
            <Form className="form-input">
              <div className="header-title">
                <label>Produto</label>
                <Field name="product" type="text" />
              </div>
              <button type="submit">Buscar</button>
            </Form>
          )}
        />
        <main>Teste</main>
      </div>
    </Container>
  );
}

export default ListProduct;
