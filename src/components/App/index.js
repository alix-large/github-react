import { useState, useEffect } from 'react';
import './style.scss';

import Form from '../Form';
import Results from '../Results';
import logo from './github-mark.png';



function App() {

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const fetchRepos = async(search) => {
            try {
                setIsLoading(true);//dès qu'on fait appel à l'api, on déclenche un nouveau state pour dire qu'on est en train de charger
                const response = await fetch("https://api.github.com/search/repositories?q=" + search);
                const data = await response.json();
                setIsLoading(false);//dès qu'on a la réponse de l'api, on repasse à l'état false
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
    <main>
        <div className= "app">
            <h1>
                <img src={logo} alt="" className="logo" />
                Rechercher des dépots sur Github
            </h1>
            <Form fetchRepos={fetchRepos}/>
            <h2 className="app-title">Résultats de la recherche</h2>
            {isLoading && <p>Veuillez patientez</p>}
            {!isLoading &&  <Results list={list}/>}
        </div>
    </main>
    );
}

export default App;
