import React from 'react';
import * as Yup from 'yup';

import Header from '../../components/HeaderList';
import { FcEmptyTrash } from 'react-icons/fc';
import { Formik, Field, Form } from 'formik';
import { Container } from './styles';

const schema = Yup.object().shape({
  product: Yup.string()
    .required('! Este compo é obrigatório.')
    .max(100, '! No máximo 100 caracteres'),
  categoria: Yup.string().required('! Este compo é obrigatório.'),
});

function ListProduct() {
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <Container>
      <Header />
      <div className="header-main">
        <Formik
          onSubmit={onSubmit}
          validationSchema={schema}
          validateOnBlur
          initialValues={{
            product: '',
            categoria: 'celular',
          }}
          render={({ values, errors }) => (
            <Form className="form-input">
              <div id="header-busca" className="header-title">
                <div className="buscar">
                  <label htmlFor="product">Produto</label>
                  <Field name="product" type="text" />
                  <span>{errors.product}</span>
                </div>

                <div className="categoria">
                  <label htmlFor="categoria">Categoria</label>
                  <Field nome="categoria" component="select">
                    <option value="celular">Celular</option>
                    <option value="tvs">Tvs</option>
                    <option value="notbook">Notbook</option>
                    <option value="acessorios">Acessórios</option>
                  </Field>
                </div>
              </div>
              <button type="submit">Buscar</button>

              <table className="table-list">
                <thead className="table-title">
                  <td>Lista de Produtos</td>
                </thead>
                <tbody>
                  <tr>
                    <td>Produto</td>
                    <td>Descrição do produto</td>
                    <img src="https://github.com/Henrique-Hoi-Dev" />
                    <button>
                      <FcEmptyTrash />
                    </button>
                  </tr>
                  <tr>
                    <td>Produto 2</td>
                    <td>blaqweqwe qweqwe</td>
                  </tr>
                </tbody>
              </table>
            </Form>
          )}
        />
      </div>
    </Container>
  );
}

export default ListProduct;
