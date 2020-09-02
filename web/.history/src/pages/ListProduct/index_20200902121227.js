import React from 'react';
import * as Yup from 'yup';

import Header from '../../components/HeaderList';
import { Formik, Field, Form } from 'formik';
import { Container } from './styles';

const schema = Yup.object().shape({
  product: Yup.string()
    .required('! Este compo é obrigatório.')
    .max(100, '! No máximo 100 caracteres'),
  categoria: Yup.string().required('! Este compo é obrigatório.'),
});

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
          validationSchema={schema}
          validateOnMount
          initialValues={{
            product: '',
            categoria: 'celular',
          }}
          render={({ values, errors }) => (
            <Form className="form-input">
              <div id="header-busca" className="header-title">
                <label htmlFor="product">Produto</label>
                <Field name="product" type="text" />
                <span>{errors.product}</span>

                <label htmlFor="categoria">Categoria</label>
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
                  <li></li>
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
