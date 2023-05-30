import { useState, useEffect } from 'react';
import './style.scss';

import Form from '../Form';
import Results from '../Results';
import logo from './github-mark.png';



function App() {

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('react');


    const fetchRepos = async() => {
            try {
                setIsLoading(true);//dès qu'on fait appel à l'api, on déclenche un nouveau state pour dire qu'on est en train de charger
                const response = await fetch("https://api.github.com/search/repositories?q=" + search);
                const data = await response.json();
                setList(data.items);//déclenche un nouveau state, la nouvelle valeur
                setIsLoading(false);//dès qu'on a la réponse de l'api, on repasse le state à l'état false
            } catch (error) {
                console.error(error);
                alert('Erreur lors de la récupération des dépots');
            }
        };

    useEffect (()=> {
     fetchRepos();
    }, [search]);    

    return (
    <main>
        <div className= "app">
            <h1>
                <img src={logo} alt="" className="logo" />
                Rechercher des dépots sur Github
            </h1>
            <Form setSearch={setSearch} />
            <h2 className="app-title">Résultats de la recherche {search}</h2>
            {isLoading && <p>Veuillez patientez</p>}
            {!isLoading &&  <Results list={list}/>}
        </div>
    </main>
    );
}

export default App;
