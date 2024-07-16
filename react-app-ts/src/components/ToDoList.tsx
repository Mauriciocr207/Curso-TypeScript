import { Button, List, Icon } from "semantic-ui-react";

interface ToDoListProps {
    items: {id: string, text: string}[];
    onDeleteToDo: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({items, onDeleteToDo}) => {
    return (<>
        <List>
            {items.map(todo => (
                <List.Item key={todo.id}>
                    <Button onClick={onDeleteToDo.bind(null, todo.id)}
                         circular 
                         size="mini"
                         icon
                    >
                        <Icon color="red" name="cancel" />
                    </Button>
                    {todo.text}
                </List.Item>
            ))}
        </List>
    </>);
}

export default ToDoList;