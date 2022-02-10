const treino = {
    aluno: {
        nome: "CLEYTON",
        idade: 27,
        codigoAluno: 22328974,
        treino: "ADAPTAÇÃO",
        professor: "FELIPE DEMATTE",
        vencimentoTreino: "04/03/2022",
        rotina: "TREINO A"
    },
    treinoA: {
        esteira: {
            nome: "ESTEIRA",
            tempo: 15
        },
        abdPranchaIsometria: {
            nome: "ABD PRANCHA ISOMETRIA",
            serie: 3,
            descanso: 30,
        },
        crucifixoMaquina: {
            nome: "CRUCIFIXO MÁQUINA",
            serie: 3,
            carga: 35,
            descanso: 30,
            repeticoes: 15
        },
        supinoRetoBarra: {
            nome: "SUPINO RETO BARRA",
            serie: 3,
            carga: 10,
            descanso: 30,
            repeticoes: 15
        },
        supinoInclinadoHealteres: {
            nome: "SUPINO INCLINADO HEALTERES",
            serie: 3,
            carga: 10,
            descanso: 30,
            repeticoes: 15
        },
        tricepsPoliaBarraReta: {
            nome: "TRICEPS POLIA BARRA RETA",
            serie: 3,
            carga: 50,
            descanso: 30,
            repeticoes: 15
        },
        agachamentoSumoHealteres: {
            nome: "AGACHAMENTO SUMO HEALTERES",
            serie: 3,
            carga: 15,
            descanso: 30,
            repeticoes: 15
        },
        legPressHorizontal: {
            nome: "LEG PRESS HORIZONTAL",
            serie: 3,
            descanso: 30,
            repeticoes: 15
        },
        transport: {
            nome: "TRANSPORT",
            serie: 1
        }

    }
}

//SET DADOS ALUNO
document.getElementById("nome").innerHTML = "NOME: " + treino.aluno.nome
document.getElementById("idade").innerHTML = "IDADE: " + treino.aluno.idade + " ANOS"
document.getElementById("codigoAluno").innerHTML = "CÓDIGO: " + treino.aluno.codigoAluno
document.getElementById("treino").innerHTML = "TREINO: " + treino.aluno.treino
document.getElementById("professor").innerHTML = "PROFESSOR: " + treino.aluno.professor
document.getElementById("vencimentoTreino").innerHTML = "VENCIMENTO TREINO: " + treino.aluno.vencimentoTreino
// document.getElementById("rotina").innerHTML = "ROTINA: " + treino.aluno.rotina

//SET DADOS TREINO A
//SET DADOS ESTEIRA
document.getElementById("esteiraNome").innerHTML = treino.treinoA.esteira.nome
document.getElementById("esteiraTempo").innerHTML = "TEMPO: " + treino.treinoA.esteira.tempo

//SET DADOS ABD PRANCHA
document.getElementById("abdpranchaNome").innerHTML = treino.treinoA.abdPranchaIsometria.nome
document.getElementById("abdpranchaSeries").innerHTML = "SÉRIES: " + treino.treinoA.abdPranchaIsometria.serie
document.getElementById("abdpranchaDescanso").innerHTML = "DESCANSO: " + treino.treinoA.abdPranchaIsometria.descanso

//SET DADOS CRUCIFIXO MÁQUINA
document.getElementById("crucifixoMaquinaNome").innerHTML = treino.treinoA.crucifixoMaquina.nome
document.getElementById("crucifixoMaquinaSeries").innerHTML = "SÉRIES: " + treino.treinoA.crucifixoMaquina.serie
document.getElementById("crucifixoMaquinaRepeticoes").innerHTML = "REPETIÇÕES: " + treino.treinoA.crucifixoMaquina.repeticoes
document.getElementById("crucifixoMaquinaCarga").innerHTML = "CARGA: " + treino.treinoA.crucifixoMaquina.carga
document.getElementById("crucifixoMaquinaDescanso").innerHTML = "DESCANSO: " + treino.treinoA.crucifixoMaquina.descanso

//SET DADOS SUPINO RETO BARRA
document.getElementById("supinoRetoBarraNome").innerHTML = treino.treinoA.supinoRetoBarra.nome
document.getElementById("supinoRetoBarraSeries").innerHTML = "SÉRIES: " + treino.treinoA.supinoRetoBarra.serie
document.getElementById("supinoRetoBarraRepeticoes").innerHTML = "REPETIÇÕES: " + treino.treinoA.supinoRetoBarra.repeticoes
document.getElementById("supinoRetoBarraCarga").innerHTML = "CARGA: " + treino.treinoA.supinoRetoBarra.carga
document.getElementById("supinoRetoBarraDescanso").innerHTML = "DESCANSO: " + treino.treinoA.supinoRetoBarra.descanso


console.log(treino)