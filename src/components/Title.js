import React from 'react';
import style from './css/Title.css';

const Title = props => {
    return(
        <div className={style.Title}>
            <h1>{props.title}</h1>
            <div>{props.noumber}</div>
        </div>
    );
}
export default Title