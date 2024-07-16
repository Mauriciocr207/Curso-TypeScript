type StringOrArray = string[] | string;

function reverse(stringOrArray: string): string;
function reverse(stringOrArray: string[]): string[];

function reverse(stringOrArray: StringOrArray) {
    return (typeof stringOrArray === "string") 
        ? stringOrArray.split('').reverse().join('')
        : stringOrArray.slice().reverse();
}

const output = reverse(["1","2", "3"]);