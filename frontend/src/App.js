import React from 'react';
import './styles/main.css';
import Main from './components/task/Main'
import Footer from './components/ui/Footer';

const App = () => {
    return (
        <div className="font-body bg-gray-100 pt-2 m-4 border-gray-300 border rounded-md shadow-2xl">
            <h1 className="text-center text-4xl m-2 text-gray-700">Control de Tareas</h1>
            <Main />
            <Footer/>
        </div>
    )
}

export default App
