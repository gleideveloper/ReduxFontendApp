import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos);

    return (
        <div className="my-4">
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
            ))}
        </div>
    );
};

export default TodoList;
