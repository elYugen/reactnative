import { useEffect, useState } from "react";

export const usePokedex = () => {
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        async function loadPokedex() {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?langage=japanese");
                const data = await response.json();
                setPokedex(data.results);
            } catch (error) {
                console.error("probleme recup des données :", error);
            }
        }

        loadPokedex();
    }, []);

    return pokedex;
};
