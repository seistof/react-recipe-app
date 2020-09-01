import React from 'react';
import style from './recipe.module.css';
import uuid from 'uuid/dist/v4'

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={uuid()}>{ingredient.text}</li>
        ))}
      </ul>
      <p>Calories: {Math.ceil(calories)}</p>
      <img className={style.image} src={image} alt=""/>
    </div>
  )
}

export default Recipe;