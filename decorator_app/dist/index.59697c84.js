class Person {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}
const personForm = document.querySelector(".form");
personForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.dir(personForm);
    const emailElem = personForm.querySelector("#email");
    const passElem = personForm.querySelector("#pass");
    const newPerson = new Person(emailElem.value, passElem.value);
    console.log(newPerson);
});

//# sourceMappingURL=index.59697c84.js.map
