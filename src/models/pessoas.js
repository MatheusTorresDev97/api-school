'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      }) //Uma Pessoa pode ter varias turmas
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id'
      }) //Uma Pessoa pode ter varias matriculas
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado) {
          if(dado.length < 3) throw new Error('O campo nome deve ter mais de 3 caracteres')
        }
      }
    }, 
    ativo: DataTypes.BOOLEAN,
    email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: {
        args: true,
        msg: 'Dado do tipo e-mail inválidos'
      }
    }
    }, 
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true,
    defaultScope: {
      where: {  ativo: true }
    },
    scopes: {
      todos: { where: {}}
    }
  });
  return Pessoas;
};