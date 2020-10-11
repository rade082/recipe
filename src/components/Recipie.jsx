import React from 'react';
import style from '../components/recipe.module.css';

function Recipie({title,calories,image,ingredients}) {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title} </h1>
            <p>Calories:{Math.floor(calories)}</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt="yummy"/>
            
        </div>
    )
}

export default Recipie
