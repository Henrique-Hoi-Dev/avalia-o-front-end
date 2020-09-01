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
                <label htmlFor="nome-do-produto">Nome do Produto</label>
                <Field name="product" type="text" />

                <label htmlFor="altura">Altura(cm)</label>
                <Field name="altura" type="number" />

                <label htmlFor="largura">Largura(cm)</label>
                <Field name="largura" type="number" />

                <label htmlFor="comprimento">Comprimento(cm)</label>
                <Field name="comprimento" type="number" />

                <label htmlFor="peso">Peso(Kg)</label>
                <Field name="peso" type="number" />

                <label htmlFor="preço">Preço(R$)</label>
                <Field name="preço" type="number" />

                <label htmlFor="categoria">Categoria</label>
                <div className="form-input-select">
                  <Field id="categoria" nome="categoria" component="select">
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
