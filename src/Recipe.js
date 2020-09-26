import React from 'react'

const Recipe = (props) => {
const {label, image, calories} = props
    return (
        <>
        <div>
    <h2>Recipe Name: {label}</h2>
            <p>Calories: {calories}</p>
            <img src={image} alt={label} />
        </div>
        </>
    )
}

export default Recipe