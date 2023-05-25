import { useState, useEffect } from 'react';
import './style.scss';

import Form from '../Form';
import Results from '../Results';



function App() {

    const [list, setList] = useState([]);

    const fetchRepos = async(search) => {
            try {
                const response = await fetch("https://api.github.com/search/repositories?q=react" + search);
                const data = await response.json();
                setList(data.items);//déclenche un nouveau state, la nouvelle valeur
            } catch (error) {
                console.error(error);
                alert('Erreur de récupération');
            }
        };

    useEffect (()=> {
     fetchRepos('react');
    }, []);    

    return (
    <main className = "app">
        <h1>Rechercher des dépots sur Github</h1>
        <Form fetchRepos={fetchRepos}/>
        <Results 
            list={list}
        />
    </main>
    );
}

export default App;
