const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

router
.get("/pessoas", PessoaController.pegaTodasAsPessoas)
.get("/pessoas/ativo", PessoaController.pegaPessoasAtivas)
.get("/pessoas/:id", PessoaController.pegaUmaPessoa)
.get('/pessoas/:estudante/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)

.post("/pessoas", PessoaController.criaPessoa)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)

.put("/pessoas/:id", PessoaController.atualizaPessoa)
.put('/pessoas/:estudante/matricula/:matriculaId', PessoaController.atualizaMatricula)

.delete("/pessoas/:id", PessoaController.apagaPessoa)
.delete('pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)

module.exports = router;
