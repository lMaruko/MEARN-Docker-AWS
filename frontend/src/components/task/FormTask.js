import React, { useState } from 'react'
import Button from '../ui/Button'
import Alert from '../ui/Alert'
import clienteAxios from './../../config/axios'

const FormTask = ({ getAllTasks, updating, formValues, handleInputChange, setValues, setUpdating }) => {

    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert] = useState({
        title: '',
        message: '',
        color: '',
        duration: 0,
    });

    const { name, description } = formValues;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || description === '') {
            setAlert({
                title: 'Error',
                message: 'Por favor rellene todo los campos',
                color: 'red',
                duration: 1500,
                state: true
            });
            reloadAlert();
            return;
        }
        try {
            await clienteAxios.post('/api/tasks/', formValues);
            setValues({
                name: '',
                description: ''
            });
            setAlert({
                title: 'Success',
                message: 'Tarea creada exitosamente!',
                color: 'green',
                duration: 1500
            });
            reloadAlert();
            getAllTasks();
        } catch (error) {
            console.log(error)
        }
    }

    const reloadAlert = () => {
        setTimeout(() => {
            setShowAlert(false);
        }, 1500);
        setShowAlert(true);
    }

    const handleCancelUpdate = () => {
        setUpdating(false);
        setValues({
            name: '',
            description: ''
        });

    }

    const handleUpdateTask = async () => {
        await clienteAxios.put(`/api/tasks/${formValues.id}`, formValues);
        setValues({
            name: '',
            description: ''
        });
        setAlert({
            title: 'Success',
            message: 'Tarea actualizada exitosamente!',
            color: 'green',
            duration: 1500
        });
        setUpdating(false);
        reloadAlert();
        getAllTasks();
    }

    return (
        <form className="bg-white rounded-md shadow-md p-4 grid md:grid-cols-1 gap-2 grid-cols-1 hover:shadow-2xl transition ease-in-out duration-300" onSubmit={handleSubmit}>
            <div>
                <h2 className="text-2xl text-gray-600">Formulario de Tareas</h2>
                <div className="flex flex-col justify-start mt-4">
                    <label htmlFor="name" className="text-sm font-bold uppercase text-gray-700">Título</label>
                    <input className="appearance-none border rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:border-gray-500 border-gray-300  w-full py-1 px-2 mt-2" type="text" placeholder="Ingrese título" name="name" id="name" value={name} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col justify-start mt-4">
                    <label htmlFor="description" className="text-sm font-bold uppercase text-gray-700">Descripción</label>
                    <textarea className="appearance-none border rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:border-gray-500 border-gray-300  w-full py-1 px-2 mt-2" name="description" rows="5" id="description" value={description}
                        onChange={handleInputChange}></textarea>
                </div>

            </div>

            <div className="flex justify-between flex-col">
                <div>
                    {
                        showAlert ?
                            <Alert alert={alert} setAlert={setShowAlert}></Alert> :
                            null
                    }
                </div>
                <div className="grid grid-cols-1 gap-2 mt-2">
                    {
                        !updating ? <Button type="submit" text="Crear Tarea" color="blue" />
                            :
                            <>
                                <Button type="button" text="Actualizar" color="blue" action={handleUpdateTask} />
                                <Button type="button" text="Cancelar" color="red" action={handleCancelUpdate} />
                            </>
                    }
                </div>
            </div>

        </form>
    )
}

export default FormTask
