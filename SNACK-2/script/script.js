const students=[
    {
        id : '213',
        name: 'Marco della Rovere',
        grades:'78'
    },
    {
        id : '110',
        name: 'Paola Cortellessa',
        grades:'96'
    },
    {
        id : '250',
        name: 'Andrea Mategna',
        grades:'48'
    },
    {
        id : '145',
        name: 'Gaia Borromini',
        grades:'74'
    },
    {
        id : '196',
        name: 'Luigi Grimaldello',
        grades:'68'
    },
    {
        id : '102',
        name: 'Piero della Francesca',
        grades:'50'
    },
    {
        id : '120',
        name: 'Francesca da Polenta',
        grades:'84'
    },
]
//nomi studenti in maiuscolo
students.forEach((student) => {
    let name= student.name.toUpperCase()
    console.log(name)
    
    return name

})

//arrai studenti con grado > 70
const goodStudents = students.filter((item)=>{
    if(item.grades > 70){
        return true
    }
})
console.log(goodStudents)
//(object) studenti con grado > 70
for(i=0; i<goodStudents.length; i++){
    console.log(goodStudents[i])
}

//array studenti con grado >70 e id > 120
const idStudents = students.filter((value)=>{
    if(value.id>120 && value.grades > 70){
        return true        
    }
})

console.log(idStudents)

//(object) studenti con grado >70 e id >120
for(i=0; i<idStudents.length; i++){
    console.log(idStudents[i])
}