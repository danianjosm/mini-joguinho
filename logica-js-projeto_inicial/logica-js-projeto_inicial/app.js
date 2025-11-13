alert('Boas vidas ao jogo do numero secreto');
let  numeroSecreto = 9;
let chute 
let tentativas = 1; 
console.log(numeroSecreto);

// while é o equivalente a enquanto 

while (chute != numeroSecreto){
    chute = prompt('escolha um numero entre 1 e 30 ');

  // se o chute for igual ao numero secreto 
  if( chute == numeroSecreto) {
   alert(`haha, você descobriu o numero secreto ${numeroSecreto}com ${tentativas} tentativas`);
}
  // se o chute for diferente do numero secreto 
   else {
     if (numeroSecreto > chute){
         alert (`o numero secreto é maior que ${chute}`);
 } else {
         alert('o numero secreto é menor ');
     }
     // tentativas +1 
     tentativas ++;
 }

}