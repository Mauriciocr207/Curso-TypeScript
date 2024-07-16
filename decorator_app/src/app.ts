import validator from "./Decorators/validator";

class Person {
    @validator.register(["required"])
    email: string;
    @validator.register(["required", "password"])
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

const personForm = document.querySelector('.form');
personForm?.addEventListener('submit', e => {
    e.preventDefault();
    const emailElem = personForm.querySelector('#email') as HTMLInputElement;
    const passElem = personForm.querySelector('#pass') as HTMLInputElement;

    const newPerson = new Person(emailElem.value, passElem.value);

    if(!validator.validate(newPerson)) {
        console.log('No pasó la validación');
    }
})
