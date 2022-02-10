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

//SET DADOS SUPINO HEALTERES
document.getElementById("supinoInclinadoHealteresNome").innerHTML = treino.treinoA.supinoInclinadoHealteres.nome
document.getElementById("supinoInclinadoHealteresSeries").innerHTML = "SÉRIES: " + treino.treinoA.supinoInclinadoHealteres.serie
document.getElementById("supinoInclinadoHealteresRepeticoes").innerHTML = "REPETIÇÕES: " + treino.treinoA.supinoInclinadoHealteres.repeticoes
document.getElementById("supinoInclinadoHealteresCarga").innerHTML = "CARGA: " + treino.treinoA.supinoInclinadoHealteres.carga
document.getElementById("supinoInclinadoHealteresDescanso").innerHTML = "DESCANSO: " + treino.treinoA.supinoInclinadoHealteres.descanso

console.log("Treino A aberto.")