var squadreDiCalcio = [
    { nome: 'Juventus'},
    { nome: 'Inter'},
    { nome: 'Milan'},
    { nome: 'Roma'},
    { nome: 'Napoli'},
    { nome: 'Lazio'}
  ];

function randomNumbers(max,min){
   return Math.floor(Math.random()*(max - min +1) + min)
}

squadreDiCalcio.forEach((squadra)=>{
    squadra.punti=randomNumbers(120,1);
    console.log(squadra.punti)
    squadra.falli=randomNumbers(50,1);
    console.log(squadra.falli)
})
console.log(squadreDiCalcio)

squadreDiCalcio.forEach(({nome, falli})=>{
    console.log(nome,falli)
})

