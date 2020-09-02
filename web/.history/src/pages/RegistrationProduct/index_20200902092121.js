import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { FcHighPriority } from 'react-icons/fc';
import { Container } from './styles';
import Header from '../../components/HeaderRecord';
import AvatarInput from './Avatarinput';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('! Este compo é obrigatório.')
    .max(100, '! No máximo 100 caracteres'),
  categoria: Yup.string().required('! Este compo é obrigatório.'),
  altura: Yup.number().required('! Este compo é obrigatório.'),
  largura: Yup.number().required('! Este compo é obrigatório.'),
  comprimento: Yup.number().required('! Este compo é obrigatório.'),
  codigoDeBarra: Yup.number().required('! Este compo é obrigatório.'),
  peso: Yup.number().required('! Este compo é obrigatório.'),
  preço: Yup.number().required('! Este compo é obrigatório.'),
  descriçao: Yup.string().required('! Este compo é obrigatório.'),
  diaDaSemana: Yup.string().required('! Este compo é obrigatório.'),
  horario: Yup.string().required('! Horário é obrigatório.'),
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
          onSubmit={onSubmit}
          validationSchema={schema}
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
            descriçao: '',
            diaDaSemana: 'domingo',
            horario: '',
          }}
          render={({ values, errors }) => (
            <Form className="form-input" id="container-input">
              <div className="header-title">
                <div className="name-campo">
                  <label htmlFor="name">Nome do Produto</label>
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
                  <label htmlFor="codigoDeBarra">Código de barra</label>
                  <Field name="codigoDeBarra" type="number" />
                  <span>{errors.codigoDeBarra}</span>
                </div>

                <div className="campo4"></div>
                <label htmlFor="peso">Peso do produto(Kg)</label>
                <Field name="peso" type="number" />
                <span>{errors.peso}</span>

                <label htmlFor="preço">Preço(R$)</label>
                <Field name="preço" type="number" />
                <span>{errors.preço}</span>

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

                <label htmlFor="horario">Horário</label>
                <Field name="horario" type="time" />
                <span>{errors.horario}</span>

                <label htmlFor="descriçao">Descrição</label>
                <Field as="textarea" name="descriçao" type="text" />
                <span>{errors.descriçao}</span>
                <footer className="buttons-container">
                  <p>
                    Importante! <br />
                    Preencha todos os dados
                    <FcHighPriority />
                  </p>
                  <AvatarInput />
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
