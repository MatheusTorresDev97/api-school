ORM COM SEQUELIZE

instalar o MYSQL
npm install mysql2

instalar o sequelize
npm install sequelize sequelize-cli path.


Criar um projeto vazio no sequelize
npx sequelize-cli init

const path = require("path");

module.exports = {
  config: path.resolve("./src/config", "config.json"),
  "models-path": path.resolve("./src/models"),
  "seeders-path": path.resolve("./src/seeders"),
  "migrations-path": path.resolve("./src/migrations"),
};

Apontando o module para o local correto

Comandos CLI: do sequelize


Comandos	Descrição
sequelize db:migrate
executa todas as migrações pendentes para atualizar o banco de dados.

sequelize db:migrate:schema:timestamps:add
Atualiza uma tabela de migração para ter marcação de data/hora

sequelize db:migrate:status	
Exibe o status de todas as migrações

sequelize db:migrate:undo	
reverte a migração mais recente do banco de dados.

sequelize db:migrate:undo:all	
Reverte todas as migrações

sequelize db:seed	
Inicializa um seeder específico

sequelize db:seed:undo	
Deleta arquivo do banco de dados

sequelize db:seed:all	
Inicializa todos os seeders

sequelize db:seed:undo:all	
Deleta todos os dados do banco de dados

sequelize db:create	
Cria um banco com uma configuração específica

sequelize db:drop	
exclui o banco de dados especificado na configuração.

sequelize init	
Inicializa um projeto

sequelize init:config	
Inicializa as configurações

sequelize init:migrations	
Inicializa as migrações

sequelize init:models	
Inicializa as models


sequelize init:seeders	
Inicializa os seeders

sequelize migration:generate [alias: migration:create]	
Gera um novo arquivo de migração

sequelize model:generate [alias: model:create]	
Gera uma model e sua migração

sequelize seed:generate	
Gera um novo arquivo de seed

Exemplo criando uma tabela no db
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string,


npx sequelize-cli db:migrate Para enviar o schema criado com o sequelize para o banco de dados 

podemos precisar, de repente, deletar essa tabela, ou refazer.  
 Se precisarmos popular tudo de novo, é muito demorado e trabalhoso. Então, usaremos um recurso que é do SQL: os arquivos seeders, sementes, e que também estão disponíveis no Sequelize para usarmos pelo sequelize-cli, pela linha de comando.

 npx sequelize-cli seed:generate –name demo-pessoa

 npx sequelize-cli db:seed:all para enviar os dados do seeders apos populado a lista para o banco de dados


 PADRÃO MVC 
 MODEL 
 VIEW
 CONTROLLER
 

 --criação de tabela
  npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string