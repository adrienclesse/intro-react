import React,{useState} from 'react';
import {RiCloseCircleFill} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import TodoForm from './TodoForm';

export default function Todo({ todos, removeTodo, updateTodo, setTodos }) {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value:'',
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    const finishTodo = (id) => {
       let newArray = [...todos];

       newArray.map((item) => {
         if (item.id == id) {
           item.complete = !item.complete;
         }
       });
   
       setTodos(newArray);
    }
    return todos.map((todo, index) => (
        
        <div className={todo.isComplete ? 'todo-row complete' :'todo-row'}
         key={index} >
        <input type="checkbox" checked={todo.complete} onClick={ () => finishTodo (todo.id)} />
            <div key={todo.id} >
                {todo.text}
            </div>
            <div className="icons"> 
             
            <RiCloseCircleFill onClick={()=> removeTodo(todo.id)} className="delete-icon"/> 
            <TiEdit onClick={()=> setEdit({id: todo.id,value: todo.text})} className="edit-icon" />

            </div>
        </div>
        ));
    
}
