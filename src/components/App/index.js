import { useState, useEffect } from 'react';
import '../../css/global.scss';
import './style.scss';

import Form from '../Form';
import Results from '../Results';
import logo from './github-mark.png';

import { sortRepositories } from '../../utils/sortRepositories.js';

function App() {

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('react');


    const fetchRepos = async() => {
            try {
                setIsLoading(true);
                const response = await fetch("https://api.github.com/search/repositories?q=" + search);
                const data = await response.json();
                setList(data.items);
                setIsLoading(false);
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
                <img src={logo} alt="" className="app__logo" />
                Rechercher des dépots sur Github
            </h1>
            <Form setSearch={setSearch} />
            <h2 className="app__title">Résultats de la recherche {search}</h2>
            {isLoading && <p>Veuillez patientez</p>}
            {!isLoading &&  <Results list={sortRepositories(list)}/>}
        </div>
    </main>
    );
}

export default App;
