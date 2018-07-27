import React from 'react';
import style from './css/Todo.css';

const Todo = props => {
    return(
        <li className={style.Todo} onClick={() => props.remove(props.id)}>
            {props.text}
        </li>
    );
}



export default Todo
