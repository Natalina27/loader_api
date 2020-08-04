//React
import { useEffect, useState } from 'react';
import {api} from "../../../api";

//Api

export const useApiLoader = () => {
    console.log('hook render');
    const [db, setDb] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await api.news.fetch();
            const data = await response.json();

            setDb(data);
        })();
    }, []);

    return {db}

}
