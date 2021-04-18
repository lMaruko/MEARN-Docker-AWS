import React, { useState, useEffect } from 'react'
import FormTask from './FormTask'
import TaskList from './TaskList'
import Spinner from '../ui/Spinner'
import clienteAxios from './../../config/axios'
import { useForm } from '../../hooks/useForm'

const Main = () => {

    const [updating, setUpdating] = useState(false);
    const [tasks, setTasks] = useState(null)
    const [loading, setLoading] = useState(true);
    const [formValues, handleInputChange, setValues] = useForm({
        name: '',
        description: ''
    });

    useEffect(() => {
        getAllTasks();
    }, [])

    const getAllTasks = async () => {
        try {
            setLoading(true);
            const res = await clienteAxios.get('/api/tasks/');
            setTasks(res.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }


    const handleDelete = async (id) => {
        await clienteAxios.delete(`/api/tasks/${id}`);
        getAllTasks();
    }

    return (
        <div className="grid md:grid-cols-3 grid-cols-1">
            <div className="col-span-1 m-4">
                <FormTask getAllTasks={getAllTasks} updating={updating} formValues={formValues}
                    setValues={setValues} handleInputChange={handleInputChange} setUpdating={setUpdating} />
            </div>
            <div className="col-span-2 m-4">
                <div className="bg-white rounded-md shadow-md px-4 pt-4 pb-2 h-full flex flex-col">
                    {
                        loading ? <Spinner />
                            : <TaskList tasks={tasks} setValues={setValues} handleDelete={handleDelete} setUpdating={setUpdating} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Main
