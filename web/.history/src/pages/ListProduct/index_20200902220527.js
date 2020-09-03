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
                  <tr className="product">
                    <td>Produto</td>
                    <td>Preço(R$; 0,00)</td>
                    <td>Medidas</td>
                    <td>Descrição do produto</td>
                    <img
                      src="https://avatars1.githubusercontent.com/u/62766753?s=400&u=1b68262c4b2abe58a779bb03ae2c3d7e46ee4358&v=4"
                      alt="avatar"
                    />
                    <button>
                      <FcEmptyTrash />
                    </button>
                  </tr>
                  <tr className="product">
                    <td>Produto 2</td>
                    <td>Preço(R$; 0,00)</td>
                    <td>Medidas</td>

                    <td>Descrição do produto</td>
                    <img
                      src="https://avatars1.githubusercontent.com/u/62766753?s=400&u=1b68262c4b2abe58a779bb03ae2c3d7e46ee4358&v=4"
                      alt="avatar"
                    />
                    <button>
                      <FcEmptyTrash />
                    </button>
                  </tr>
                  <tr className="product">
                    <td>Produto 3</td>
                    <td>Preço(R$; 0,00)</td>
                    <td>Medidas</td>
                    <td>Data de aquisição</td>

                    <td>Descrição do produto</td>
                    <img
                      src="https://avatars1.githubusercontent.com/u/62766753?s=400&u=1b68262c4b2abe58a779bb03ae2c3d7e46ee4358&v=4"
                      alt="avatar"
                    />
                    <button>
                      <FcEmptyTrash />
                    </button>
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
