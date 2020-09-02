import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { FcHighPriority } from 'react-icons/fc';
import { Container } from './styles';
import Header from '../../components/HeaderRecord';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('! Este compo é obrigatório.')
    .min(6, '! No mínimo 6 caracteres'),
  categoria: Yup.string()
    .email('! Este compo é obrigatório.')
    .required('! Este compo é obrigatório.'),
  altura: Yup.number().required('! Este compo é obrigatório.'),
  lagura: Yup.number().required('! Este compo é obrigatório.'),
  comprimento: Yup.number().required('! Este compo é obrigatório.'),
  codigoDeBarra: Yup.number().required('! Este compo é obrigatório.'),
  peso: Yup.number().required('! Este compo é obrigatório.'),
  preço: Yup.number().required('! Este compo é obrigatório.'),
  categoria: Yup.string().required('! Este compo é obrigatório.'),
  diaDaSemana: Yup.string().required('! Este compo é obrigatório.'),
  horario: Yup.number().required('! Este compo é obrigatório.'),
});

function RegistrationProduct() {
  function onSubmit(values, actions) {
    console.log(values);
  }
  return (
    <Container>
      <Header />
      <div className="header-main">
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          validateOnMount
          initialValues={{
            name: '',
            categoria: 'celular',
            altura: '',
            largura: '',
            comprimento: '',
            codigoDeBarra: '',
            peso: '',
            preço: '',
            categoria: '',
            diaDaSemana: '',
            horario: '',
          }}
          render={({ values }) => (
            <Form className="form-input">
              <div className="header-title">
                <label htmlFor="name">Nome do Produto</label>
                <Field name="name" type="text" />

                <label htmlFor="altura">Altura(cm)</label>
                <Field name="altura" type="number" />

                <label htmlFor="largura">Largura(cm)</label>
                <Field name="largura" type="number" />

                <label htmlFor="comprimento">Comprimento(cm)</label>
                <Field name="comprimento" type="number" />

                <label htmlFor="codigoDeBarra">Código de barra</label>
                <Field name="codigoDeBarra" type="number" />

                <label htmlFor="peso">Peso do produto(Kg)</label>
                <Field name="peso" type="number" />

                <label htmlFor="preço">Preço(R$)</label>
                <Field name="preço" type="number" />
                <div className="select">
                  <label htmlFor="categoria">Categoria</label>
                  <Field component="select" id="location" name="categoria">
                    <option value="celular">Celular</option>
                    <option value="tvs">Tvs</option>
                    <option value="notbook">Notbook</option>
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
                </div>
                <label htmlFor="horario">Horário</label>
                <Field name="horario" type="time" />

                <label htmlFor="descriçao">Descrição</label>
                <textarea></textarea>
                <footer>
                  <p>
                    Importante! <br />
                    Preencha todos os dados
                    <FcHighPriority />
                  </p>
                  <button>Imagem</button>
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

export default RegistrationProduct;
