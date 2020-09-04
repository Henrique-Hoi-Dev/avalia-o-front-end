import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/HeaderList';
import { FcEmptyTrash } from 'react-icons/fc';
import { Container } from './styles';
import {
  findAllProductRequest,
  deleteProductRequest,
} from '../../store/modules/product/actions';
import * as moment from 'moment';

const Projects = ({ productList, handlerRemoveProduct }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    function onLoad() {
      dispatch(findAllProductRequest());
    }
    onLoad();
  }, [dispatch]);

  function currencyFormat(num) {
    console.log(num);
    if (num) {
      return (
        'R$' +
        parseFloat(num)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      );
    }
  }

  return (
    <Container>
      <Header />
      <div className="header-main">
        <h1>Produtos</h1>
        <form className="form-table">
          <table className="table-list">
            <thead>
              <tr className="table-title">
                <td>Nome</td>
                <td>Preço</td>
                <td>Data</td>
                <td>Descrição</td>
                <td>Imagem</td>
              </tr>
            </thead>
            <tbody>
              {[].concat(productList).map((produto, i) => (
                <tr key={i} value={produto.id}>
                  <td>{produto.name}</td>
                  <td>{currencyFormat(produto.preco)}</td>
                  <td>{moment(produto.createdAt).format('DD-MM-YYYY')}</td>
                  <td>{produto.descricao}</td>
                  <td>
                    <img
                      src={
                        produto.avatar
                          ? produto.avatar.url
                          : 'https://faculty.iiit.ac.in/~indranil.chakrabarty/images/empty.png'
                      }
                      alt="avatar"
                      className="avatar"
                    />
                  </td>
                  <td>
                    <button
                      onClick={(e) => handlerRemoveProduct(e, produto.id)}
                    >
                      <FcEmptyTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    productList: state.product.productList ? state.product.productList : [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlerRemoveProduct: async (e, id) => {
      e.preventDefault();
      const confirm = window.confirm('You want to remove this Product?');
      if (confirm) {
        dispatch(deleteProductRequest(id));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
