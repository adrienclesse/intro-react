import React, {useState,} from 'react';
import Todo from './Todo';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text : input,
        complete : false,
        });


    setInput('');
    };
    // const leftTodo = [...todos].filter(todo => todo.complete = false)
        
    return (
            <>
            <form className='todo-form' onSubmit={handleSubmit}>
                
                <input type="text" placeholder="Add a todo" value={input} name="text" className='todo-input' onChange={handleChange} ></input>
                <button className="todo-button" type="submit">Add todo</button>
                <br></br>
                {/* <h3>Left to do : {todos.filter((todo) => !todo.complete).length} </h3> */}

            </form>

            
        </>
    )
}

export default TodoForm
