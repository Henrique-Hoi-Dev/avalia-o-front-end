module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      altura: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      largura: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      comprimento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codigo_de_barra: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      peso: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preço: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descrição: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dia_da_semana: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      horario: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('products');
  },
};
