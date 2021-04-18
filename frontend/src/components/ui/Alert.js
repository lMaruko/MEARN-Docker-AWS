import React from 'react'

const Alert = ({ alert }) => {

    const { title, message, color } = alert;

    return (
        <>
            <div className="my-2 transition ease-in-out duration-150">
                <div className={`bg-${color}-500 py-2 px-4 text-lg text-white rounded-tr-md rounded-tl-lg font-bold`}>
                    {title}
                </div>
                <div className={`bg-${color}-200 py-2 px-4 text-lg text-${color}-700 border-l border-r border-b rounded-bl-md rounded-br-md border-${color}-400`}>     {message}
                </div>
            </div>
        </>
    )
}

export default Alert
