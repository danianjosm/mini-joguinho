alert('Boas vidas ao jogo do numero secreto');
let  numeroSecreto = 9;
let chute 
console.log(numeroSecreto)

// while é o equivalente a enquanto 

while (chute != numeroSecreto){
    chute = prompt('escolha um numero entre1 e 30 ');
}

if( chute == numeroSecreto) {
   alert(`haha, você descobriu o numero secreto ${numeroSecreto}`);
}
    // se o chute for diferente do numero secreto 
else {
    if (numeroSecreto > chute){
        alert (`o numero secreto é maior que ${chute}`);
    } else {
        alert('o numero secreto é menor ');
    }
}