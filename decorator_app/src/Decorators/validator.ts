interface ValidationData {
    [className: string]: {
        [propName: string]: string[];
    }
}

function validator() {
    const validations: ValidationData = {};
    return {
        register(types: string[]) {
            return (target: Object, propName: string): void => {
                const constructorName = target.constructor.name;
                if(!validations[constructorName]) {
                    validations[constructorName] = {
                        [propName]: types
                    }
                } else {
                    validations[constructorName][propName] = types;
                }
            }
        },
        validate(obj: any): boolean {
            const validationRegistered = validations[obj.constructor.name];
            
            if(!validationRegistered) {
                return true;
            }

            let passed = true;

            for (const prop in validationRegistered) {
                validationRegistered[prop].forEach(validation => {
                    switch(validation) {
                        case 'required': {
                            passed = passed && !!obj[prop];
                            break;
                        }
                        case 'password': {
                            passed = passed && obj[prop].length > 5;
                            break;
                        }
                    }
                });
            }

            return passed;
        }
    }
}

export default validator();