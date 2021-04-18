import { useState, useEffect, useRef } from 'react';
import clienteAxios from '../components/config/axios';


export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        getTasks();

    }, []);

    const getTasks = async () => {
        try {

            const res = await clienteAxios.get('/api/tasks/');
            setState({
                loading: false,
                error: null,
                data: res.data.results
            });

        } catch (error) {
            setState({
                loading: false,
                error: error
            });
        }
    }

    return state;
}
