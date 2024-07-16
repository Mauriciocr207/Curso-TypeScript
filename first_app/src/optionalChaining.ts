interface Media {
    title: string;
    genres: string[];
    director?: {name: string};
}

const fetchedMediaData: Media = {
    title: "goodfellas",
    genres: ["drama", "crime"],
    director: {name: "Martin Scorsese"},
}
const fetchedMediaData2: Media = {
    title: "goodfellas",
    genres: ["drama", "crime"],
}

console.log(fetchedMediaData.director?.name);

console.log(fetchedMediaData2.director?.name); // optional chaining

console.log(fetchedMediaData2.director?.name ?? "Director no encontrado") // null coallesing
