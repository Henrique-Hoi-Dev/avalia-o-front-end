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
            categoria: 'celular',
          }}
          render={({ values }) => (
            <Form className="form-input">
              <div className="header-title">
                <label>Produto</label>
                <Field name="product" type="text" />

                <label>Categoria</label>
                <Field nome="categoria" component="select">
                  <option value="celular">Celular</option>
                  <option value="tvs">Tvs</option>
                  <option value="notbook">Notbook</option>
                  <option value="acessorios">Acessórios</option>
                </Field>
              </div>
              <button type="submit">Buscar</button>
              <main>
                <ul>
                  <li></li>
                </ul>
              </main>
            </Form>
          )}
        />
      </div>
    </Container>
  );
}

export default ListProduct;
