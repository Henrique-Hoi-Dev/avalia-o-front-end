import React from 'react';
import { Formik, Field, Form } from 'formik';

import { FcHighPriority } from 'react-icons/fc';
import { Container } from './styles';
import Header from '../../components/HeaderRecord';

function RegistrationProduct() {
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
                <label>Produto</label>
                <Field name="product" type="text" />
                <label>Produto</label>
                <Field name="product" type="text" />
                <label>Produto</label>
                <Field name="product" type="text" />
                <label>Produto</label>
                <Field name="product" type="text" />
                <label>Produto</label>
                <Field name="product" type="text" />
                ggggg
                <label>Categoria</label>
                <div className="form-input-select">
                  <Field nome="categoria" component="select">
                    <option value="celular">Celular</option>
                    <option value="tvs">Tvs</option>
                    <option value="notbook">Notbook</option>
                    <option value="acessorios">Acessórios</option>
                  </Field>
                </div>
              </div>
              <footer className="descriçaõ">
                <p>
                  <FcHighPriority />
                  Importante! <br />
                  Preencha todos os dados
                </p>
              </footer>
              <button type="submit">Imagem</button>

              <button type="submit">Salvar</button>
            </Form>
          )}
        />
      </div>
    </Container>
  );
}

export default RegistrationProduct;
