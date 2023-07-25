import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/features/todo.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
interface TodoItemProps {
    id: string;
    text: string;
    completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(id));
    };

    return (
        <div className={`mb-2 d-flex align-items-center ${completed ? 'text-muted' : ''}`} style={{ textDecoration: completed ? 'line-through dashed' : 'none' }}>
            <div className="flex-grow-1">{text}</div>
            {/*{!completed && (*/}
                <>
                    <button onClick={handleToggle} className="btn btn-sm btn-success mx-2">
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" />
                    </button>
                    <button onClick={handleRemove} className="btn btn-sm btn-danger">
                        <FontAwesomeIcon icon={faCircleXmark}  size="lg" />
                    </button>
                </>
            {/*)}*/}
        </div>
    );
};

export default TodoItem;
