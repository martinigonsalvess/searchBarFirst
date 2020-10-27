import React from 'react'
import style from './recipe.module.css';

const Recipe = ({title,ingredients,image})=>{

    return(
        <div className={style.recipe}>
            <h3>{title}</h3>
            <img className={style.recipe} src={image} alt=""/>
            <ol>
                {ingredients.map(e =>(
                    <li>{e.text}</li>
                ))}
            </ol>
        </div>
    );

}
export default Recipe;