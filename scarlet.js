function Scarlet() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet.jpg')";
    setTimeout(function () {
        escolha1 = alert("Clique em ok para avançar.");
        ScarletFase1()
    }, 800)
}
function ScarletFase1() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet_fase_1.jpg')";
    setTimeout(function () {
        escolha = prompt("Escolha o seu caminho.");
        if (escolha == 1) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Scarlet_fase_1_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 800)
        }
        else if (escolha == 2) 
        
        ScarletFase2()
    }, 800)
}
function ScarletFase2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet_fase_2.jpg')";
    setTimeout(function () {
        escolha = prompt("Escolha o seu caminho.");
        if (escolha == 1) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Scarlet_fase_2_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 800)
        }
        else if (escolha == 2) 
        
        ScarletFase3()
    }, 800)
}
function ScarletFase3() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet_fase_3.jpg')";
    setTimeout(function () {
        escolha1 = alert("Clique em ok para avançar.");
        ScarletFase3Java()
    }, 800)
}
function ScarletFase3Java() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet_fase_3_java.jpg')";
    setTimeout(function () {
        escolha = prompt("Escolha o seu caminho.");
        if (escolha == 1) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Scarlet_fase_3_java_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 800)
        }
        else if (escolha == 2) 
        
        ScarletFinal()
    }, 800)
}
function ScarletFinal() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet_fase_3_java_final.jpg')";
}