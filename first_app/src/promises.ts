// class Family {
//     constructor(
//         public readonly name: string,
//         public readonly castles: string[],
//     ){};
// }

// const lannister = new Family('Lannister', ['Winterfell', 'Casterly Rock']);
// const targaryen = new Family('Targaryen', ['Dragonstone', 'Summerhall']);

// const families: Family[] = [lannister, targaryen];

// function getCastleByFamily(family: string): Promise<string[]> {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let foundCastles = families.filter(({name}) => name == family);
    
//             if(foundCastles.length > 0) {
//                 const castles = foundCastles[0].castles;
//                 res(castles);
//             } else {
//                 rej("No se encontraron castillos");
//             }
//         }, 2000); 
//     })
// }

// console.log('Comenzando la busqueda...');
// getCastleByFamily("Lannister")
//     .then(castles => castles.length)
//     .then(numCastles => console.log(`Castillos encontrados: ${numCastles}`))
//     .catch(reason => console.log(reason));
// console.log('Busqueda terminada...');