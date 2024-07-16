interface ApiEndpoint {
    get(): string[];
    post(request: {token:string, body: string}): void;
}

let httpServer: {
    [key: string]: ApiEndpoint
} = {};

function validUser(token: string): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
        const method = descriptor.value;
        descriptor.value = function(request: {token: string, body: string}) {
            if(request.token !== token) {
                console.log("403 Forbiden!!");
            } else {
                method.call(this, request);
            }
        }
    }
}

function registerEndpoint(target: any): void {
    const className = target.name;
    const endpointPath = "/" + className.toLowerCase();

    httpServer[endpointPath] = new target(); 
}

function paramDecorator(target: any, key: string, index: number): void {
    console.log(target, key, index);
}


@registerEndpoint
class Families implements ApiEndpoint {
    private houses = ["Lannister", "Targaryen"];

    get() {
        return this.houses;
    }

    @validUser("families")
    post(request: {token:string, body: string}) {
        this.houses.push(request.body);
    }
}

@registerEndpoint
class Castles implements ApiEndpoint {
    private castles = ["Winterfell", "Casterly Rock"];
    
    get() {
        return this.castles;
    }

    getCastles(
        @paramDecorator index: number, 
        @paramDecorator defaultValue: string
    ) {
        return this.castles[index] ?? defaultValue
    }
    
    @validUser("castles")
    post(@paramDecorator request: {token:string, body: string}) {
        this.castles.push(request.body);
    }
}

// registerEndpoint(Families);
// registerEndpoint(Castles); 

// console.log(httpServer);
const families = httpServer['/families'];
const castles = httpServer['/castles'];

// families.post({token: "families", body: "Carrillo"});
// console.log(families.get());
// castles.post({token: "castles", body: "Romero"});
// console.log(castles.get());

