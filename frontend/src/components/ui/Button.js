import React from 'react'

const Button = ({ text, color, type, action }) => {

    return (
        <button type={type} className={`bg-${color}-400 text-white w-full text-sm font-bold py-1 rounded-sm uppercase hover:bg-${color}-500  transition ease-in-out duration-150 focus:outline-none`} onClick={action}>
            {text}
        </button>
    )
}

export default Button
