import React from 'react'
import Task from './Task'
import Search from '../ui/Search'
import Pagination from '../ui/Pagination'

const TaskList = ({ tasks, setValues, setUpdating, handleDelete }) => {
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center">
                <h2 className="text-2xl text-gray-600">Lista de Tareas</h2>
                <Search />
            </div>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {
                    !tasks.length ? <p className="text-lg text-gray-600">No hay tareas...</p>
                        : tasks.map((task) => (
                            <Task task={task} key={task.id} setValues={setValues} handleDelete={handleDelete} setUpdating={setUpdating} />
                        ))
                }
            </div>
            <Pagination />
        </>
    )
}

export default TaskList
