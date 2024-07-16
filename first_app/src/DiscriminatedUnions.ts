interface Square {
    type: "square",
    size: number,
}

interface Rectangle {
    type: "rectangle",
    height: number,
}

interface Circle {
    type: "circle",
    radius: number
}

type Shape = Square | Rectangle | Circle;

function print(shape: Shape) {
    switch (shape.type) {
        case "square":
            console.log(shape.size);
            break;
        case "circle":
            console.log(shape.radius);
            break;
        case "rectangle":
            console.log(shape.height);
            break;
        default: "square"
            break;
    }
}