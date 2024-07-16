import { useRef } from "react";
import { Button, Form } from "semantic-ui-react";

interface NewToDoProps {
    onAddToDo: (text: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = ({onAddToDo}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    function handlerSubmit(e: React.FormEvent) {
        e.preventDefault();
        const enteredText = inputRef.current!.value;
        onAddToDo(enteredText);
        inputRef.current!.value = "";
    }

    return <>
        <Form onSubmit={handlerSubmit}>
            <Form.Field>
                <label htmlFor="todo-text">Titulo</label>
                <input type="text" id="todo-text" ref={inputRef}/>
            </Form.Field>
            <Button type="submit">Agregar</Button>
        </Form>
    </>
}

export default NewToDo;