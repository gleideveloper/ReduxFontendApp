import React, {useState} from 'react';
import {useAppDispatch} from './redux/store';
import {addTodo} from './redux/features/todo.slice';
import TodoList from './components/TodoList';

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-4">Todo List</h1>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="form-control"
                                    placeholder="Enter your todo..."
                                />
                                <button onClick={handleAddTodo} className="btn btn-primary">
                                    Add Todo
                                </button>
                            </div>
                            <TodoList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
