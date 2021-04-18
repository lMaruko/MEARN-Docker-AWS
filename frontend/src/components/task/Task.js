import React from 'react'
import moment from 'moment'

const Task = ({ task, setValues, handleDelete, setUpdating }) => {

    const { id, name: title, description, created_at: fecha } = task;

    const handleUpdating = () => {
        setUpdating(true);
        setValues(task);
    }

    return (
        <div className="flex bg-gray-100 py-2 px-4 shadow-md flex-col border-l-2 border-orange-400 rounded-sm my-3 hover:shadow-lg transition ease-in-out duration-500">
            <div className="flex justify-between">
                <h2 className="text-lg text-gray-600">{title}</h2>
                <div className="flex flex-row">
                    <span className="cursor-pointer" title="Editar" onClick={handleUpdating}>
                        <svg viewBox="0 0 20 20" fill="currentColor" title="Editar" className="w-5 text-blue-500 hover:text-blue-600 transition ease-in-out duration-150 transform hover:scale-125"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></span>
                    <span className="cursor-pointer" title="Eliminar" onClick={() => handleDelete(id)}>
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 text-red-500 hover:text-red-600 transition ease-in-out duration-150 transform hover:scale-125"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                    </span>

                </div>
            </div>
            <p className="text-sm text-gray-700 my-1">{description}</p>
            <span className="self-end text-gray-800 font-light">{moment(fecha).format('DD/MM/YYYY')}</span>
        </div>
    )
}

export default Task
