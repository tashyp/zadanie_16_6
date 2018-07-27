import React from 'react';
import style from './css/TodoList.css';
import Todo from '../components/Todo.js';

const TodoList = props => {
    let doing = props.items.map(item => <Todo key={item.id} id={item.id} text={item.text} remove={props.remove}/>);
    return(
        <div className={style.TodoList}>
            <h1>List to do</h1>
            <ul>
                {doing}
            </ul>
        </div>
    );
}

export default TodoList