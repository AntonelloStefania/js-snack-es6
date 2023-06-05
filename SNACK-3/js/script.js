const biciclette =[
  { nome: 'Bici1', peso: 10 },
  { nome: 'Bici2', peso: 8 },
  { nome: 'Bici3', peso: 12 },
  { nome: 'Bici4', peso: 9 },
  { nome: 'Bici5', peso: 11 },
  { nome: 'Bici6', peso: 7 },
  { nome: 'Bici7', peso: 10.5 }
]

let biciLeggera = biciclette[0];

biciclette.forEach(({nome,peso})=>{
    if (peso<biciLeggera.peso){
       biciLeggera = {nome, peso}
    }
    return biciLeggera
})

console.log(`la bici più leggera è ${biciLeggera.nome} con il peso di ${biciLeggera.peso}`)