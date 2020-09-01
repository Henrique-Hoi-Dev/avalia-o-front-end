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
            nome: '',
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
                <label htmlFor="nome">Nome do Produto</label>
                <Field name="nome" type="text" />

                <label htmlFor="altura">Altura(cm)</label>
                <Field name="altura" type="number" />

                <label htmlFor="largura">Largura(cm)</label>
                <Field name="largura" type="number" />

                <label htmlFor="comprimento">Comprimento(cm)</label>
                <Field name="comprimento" type="number" />

                <label htmlFor="codigoDeBarra">Código de barra</label>
                <Field name="codigoDeBarra" type="number" />

                <label htmlFor="peso">Peso(Kg)</label>
                <Field name="peso" type="number" />

                <label htmlFor="preço">Preço(R$)</label>
                <Field name="preço" type="number" />

                <label htmlFor="categoria">Categoria</label>
                <Field component="select" id="location" name="categoria">
                  <option value="celular">Celular</option>
                  <option value="tvs">Tvs</option>
                  <option value="notbook">Notbook</option>
                  <option value="acessorios">Acessórios</option>
                </Field>

                <label htmlFor="diaDaSemana">Dia da semana</label>
                <Field id="location" nome="diaDaSemana" component="select">
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

                <label htmlFor="descriçao">Descrição</label>
                <textarea></textarea>
                <footer>
                  <p>
                    Importante! <br />
                    Preencha todos os dados
                    <FcHighPriority />
                  </p>
                  <button type="#">Imagem</button>
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
