module.exports = {
  dialect: 'postgres',
  host: process.env.PG_DATABASE,
  username: 'postgres',
  password: '123',
  database: 'estoque',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
