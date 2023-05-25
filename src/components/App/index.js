import { useState, useEffect } from 'react';
import './style.scss';

import Form from '../Form';
import Results from '../Results';



function App() {

    const [list, setList] = useState([]);

    const fetchRepo = async(search) => {
      console.log('on va faire un appel pour le terme', search);
            try {
                const response = await fetch("https://api.github.com/search/repositories?q=react");
                const data = await response.json();
                setList(data.items);
            } catch (error) {
                console.error(error);
                alert('Erreur de récupération');
            }
        };

    useEffect (()=> {
   
    fetchRepo('react');
    }, []);    

    return (
    <main className = "app">
        <Form />
        <Results 
            list={list}
        />
    </main>
    );
}

export default App;
