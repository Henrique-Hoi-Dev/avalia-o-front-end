import Sequelize from 'sequelize';

import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [File];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connetion = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connetion))
      .map(
        (model) => model.associate && model.associate(this.connetion.models)
      );
  }
}

export default new Database();
