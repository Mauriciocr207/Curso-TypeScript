// class Family {
//     constructor(
//         public readonly name: string,
//         public readonly castles: string[],
//     ){};
// }

// const lannister = new Family('Lannister', ['Winterfell', 'Casterly Rock']);
// const targaryen = new Family('Targaryen', ['Dragonstone', 'Summerhall']);

// const families: Family[] = [lannister, targaryen];

// interface CastleCallback {
//     (err: Error | null, castles?: string[]): void
// }

// function getCastleByFamily(family: string, callback: CastleCallback): void {
//     setTimeout(() => {
//         try {
//             let foundCastles = families.filter(({name}) => name == family);
    
//             if(foundCastles.length === 0) {
//                 throw Error('No se encontraron castillos');
//             }

//             const castles = foundCastles[0].castles;
            
//             callback(null, castles);
//         } catch (error) {
//             callback(error as Error);
//         }
//     }, 2000); 
// }

// const logCastleSearch: CastleCallback = (err, castles) => {
//     if(err) {
//         console.log(`Mensaje de error: ${err.message}`);
//     } else {
//         console.log("Se econtraron los siguientes castillos");
//         console.log(castles);
//     }
// }

// console.log('Comenzando la busqueda...');
// getCastleByFamily("Lannister", logCastleSearch);
// console.log('Busqueda terminada...');