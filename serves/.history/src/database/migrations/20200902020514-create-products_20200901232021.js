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
        unique: true,
      },
      largura: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      comprimento: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      codigoDeBarra: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      peso: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      preço: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      descrição: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      diaDaSemana: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: true,
      },
      horario: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: true,
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
