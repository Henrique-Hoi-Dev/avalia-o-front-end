import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createProductRequest } from '../../store/modules/product/actions';

import Header from '../../components/HeaderRecord';
import AvatarInput from './Avatarinput';
import { FcHighPriority } from 'react-icons/fc';
import { FaListUl } from 'react-icons/fa';
import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Este compo é obrigatório.')
    .max(100, 'No máximo 100 caracteres'),
  categoria: Yup.string().required('Este compo é obrigatório.'),
  altura: Yup.number().required('Este compo é obrigatório.'),
  largura: Yup.number().required('Este compo é obrigatório.'),
  comprimento: Yup.number().required('Este compo é obrigatório.'),
  codigo_de_barra: Yup.number().required('Este compo é obrigatório.'),
  peso: Yup.number().required('Este compo é obrigatório.'),
  preco: Yup.number().required('Este compo é obrigatório.'),
  descricao: Yup.string().required('Este compo é obrigatório.'),
  diaDaSemana: Yup.string().required('Este compo é obrigatório.'),
  horario: Yup.string().required('Horário é obrigatório.'),
});

export default function RegistrationProduct() {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
      values.avatar_id = document
        .getElementById('avatar')
        .getAttribute('data-file');
      dispatch(createProductRequest(values));
      clearFields(resetForm);
    } catch (error) {
      console.log(error);
    }
  };

  function clearFields(resetForm) {
    resetForm({});
    document.getElementById('avatar').setAttribute('data-file', null);
    document
      .getElementById('avatar-img')
      .setAttribute(
        'src',
        'https://faculty.iiit.ac.in/~indranil.chakrabarty/images/empty.png'
      );
  }

  return (
    <Container>
      <Header />
      <div className="header-main">
        <Formik
          onSubmit={handleSubmit}
          validationSchema={schema}
          initialValues={{
            name: '',
            categoria: 'Celular',
            altura: '',
            largura: '',
            comprimento: '',
            codigo_de_barra: '',
            peso: '',
            preco: '',
            descricao: '',
            diaDaSemana: 'Domingo',
            horario: '',
          }}
          render={({ values, errors }) => (
            <Form className="form-input">
              <div id="container-input" className="header-title">
                <div className="name-campo">
                  <label htmlFor="name">
                    Nome do Produto
                    <button className="button-list">
                      <Link to="/list">
                        <FaListUl color="#fff" size="30" />
                      </Link>
                    </button>
                  </label>
                  <Field name="name" type="text" />
                  <span>{errors.name}</span>
                </div>

                <div className="campo2">
                  <label htmlFor="altura">Altura(cm)</label>
                  <Field name="altura" type="number" />
                  <span>{errors.altura}</span>

                  <label htmlFor="largura">Largura(cm)</label>
                  <Field name="largura" type="number" />
                  <span>{errors.largura}</span>

                  <label htmlFor="comprimento">Comprimento(cm)</label>
                  <Field name="comprimento" type="number" />
                  <span>{errors.comprimento}</span>
                </div>

                <div className="campo3">
                  <label htmlFor="peso">Peso do produto(g)</label>
                  <Field name="peso" type="number" />
                  <span>{errors.peso}</span>

                  <label htmlFor="preco">Preço(R$)</label>
                  <Field name="preco" type="number" />
                  <span>{errors.preco}</span>
                  <ul>
                    <AvatarInput name="avatar_id" />
                  </ul>
                </div>

                <div className="campo4">
                  <label htmlFor="categoria">Categoria</label>
                  <Field component="select" id="location" name="categoria">
                    <option value="celular">Celular</option>
                    <option value="tvs">Tvs</option>
                    <option value="notebook">Notebook</option>
                    <option value="acessorios">Acessórios</option>
                  </Field>

                  <label htmlFor="diaDaSemana">Dia da semana</label>
                  <Field component="select" id="location" name="diaDaSemana">
                    <option value="domingo">Domingo</option>
                    <option value="segunda-feira">Segunda-feira</option>
                    <option value="terça-feira">Terça-feira</option>
                    <option value="quarta-feira">Quarta-feira</option>
                    <option value="quinta-feira">Quinta-feira</option>
                    <option value="sexta-feira">Sexta-feira</option>
                    <option value="sabado">Sábado</option>
                  </Field>

                  <label htmlFor="horario">Horário</label>
                  <Field name="horario" type="time" />
                  <span>{errors.horario}</span>
                </div>

                <div className="campo5">
                  <label htmlFor="descricao">Descrição</label>
                  <Field as="textarea" name="descricao" type="text" />
                  <span>{errors.descricao}</span>
                  <label htmlFor="codigo_de_barra">Código de barra</label>
                  <Field name="codigo_de_barra" type="number" />
                  <span>{errors.codigo_de_barra}</span>
                </div>

                <footer className="buttons-container">
                  <p>
                    <FcHighPriority />
                    Importante! <br />
                    Preencha todos os dados
                  </p>
                  <button type="submit">Salvar</button>
                </footer>
              </div>
            </Form>
          )}
        />
      </div>
    </Container>
  );
}
