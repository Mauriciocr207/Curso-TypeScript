function isStringOrNumber(value: string|number) {
    console.log(value);
}

isStringOrNumber(2);

type StringOrNumber = string|number;

function anyStringNumber(value: StringOrNumber) {
    console.log(value);
}

anyStringNumber(2);

console.log(Array(10));