import './style.scss';
import data from './data.js';


console.log(data);

import Form from '../Form';
import Results from '../Results';


function App() {
    return (
    <div className = "app">
        <Form />
        <Results list={data.items}/>
    </div>
    );
}

export default App;
