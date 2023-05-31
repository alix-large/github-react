import './style.scss';
import { useState} from 'react';

function Form({ setSearch }) {
  
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(value.length > 2) {
      setSearch(value);
      setValue('');
    }
  };

  const handleChange = (event)=> {
    setValue(event.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span>Mots clefs</span>
          <input 
            className="form__input" 
            type="search" 
            placeholder="React, JavaScript, Express,..."
            onChange={handleChange}
            value = {value} 
            />   
        </label>
        <button type="submit">Lancer la recherche</button>
      </form>   
      {value.length <= 2 && <p className="form__format">La recherche doit faire plus de 2 caractères</p>}
    </>
  );
}

export default Form;
