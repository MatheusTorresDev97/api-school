'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    static associate(models) {
      Matriculas.belongsTo(models.Pessoas, {
        foreignKey: 'estudante_id'
      })
      Matriculas.belongsTo(models.Turmas, {
        foreignKey: 'turma_id'
      })
    }
  }
  Matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matriculas',
    paranoid: true,
  });
  return Matriculas;
};


// Ao adicionar paranoid: true, você está ativando a exclusão lógica para o modelo Matriculas. Isso significa que, em vez de excluir fisicamente os registros do banco de dados, o Sequelize adicionará uma marca de tempo ao campo deletedAt quando um registro for excluído. Portanto, os registros excluídos ainda estarão presentes no banco de dados, mas marcados como excluídos.