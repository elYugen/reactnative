import {useEffect, useState} from "react";

export const useApi = () => {
    const [api, setApi] = useState([])

    async function loadApi() {
        try {
            const response = await fetch(`https://api.npoint.io/68bf5db20a3c236f68ed`);
            const json = await response.json();
            //const liste = await json
            setApi(json);
            console.log(json)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {

        loadApi(); // éxécute loadApi au rendu du composant
    }, [])

    return api;
}