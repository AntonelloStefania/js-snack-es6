const guests=[
    'Brad Pitt', 'Johnny Depp','Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'
]
let guest;
const newGuests = guests.map((item,index) => {

        guest = {
            tavolo: 'Tavolo Vip',
            nome : item,
            posto: (index+1)
    }
    return guest
})

for (i=0; i< newGuests.length; i++){
    let segnaposto = newGuests[i];
    console.log(segnaposto.tavolo);
    console.log(segnaposto.nome);
    console.log(segnaposto.posto);
}
