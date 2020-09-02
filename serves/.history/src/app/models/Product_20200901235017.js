import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        categoria: Sequelize.STRING,
        altura: Sequelize.NUMBER,
        largura: Sequelize.NUMBER,
        comprimento: Sequelize.NUMBER,
        codigo_de_barra: Sequelize.NUMBER,
        peso: Sequelize.NUMBER,
        preço: Sequelize.NUMBER,
        descriçao: Sequelize.STRING,
        dia_da_semana: Sequelize.DATE,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
    return this;
  }
}

export default Product;
