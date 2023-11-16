const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

router
.get("/pessoas", PessoaController.pegaTodasAsPessoas)
.get("/pessoas/ativo", PessoaController.pegaPessoasAtivas)
.get("/pessoas/:id", PessoaController.pegaUmaPessoa)
.post("/pessoas", PessoaController.criaPessoa)
.put("/pessoas/:id", PessoaController.atualizaPessoa)
.delete("/pessoas/:id", PessoaController.apagaPessoa)

.get('/pessoas/:estudante/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
.put('/pessoas/:estudante/matricula/:matriculaId', PessoaController.atualizaMatricula)
.delete('pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)

module.exports = router;
