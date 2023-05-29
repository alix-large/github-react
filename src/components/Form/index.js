import './style.scss';

function Form({fetchRepos}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRepos(event.target[0].value);//on appelle la fonction avec la valeur du champ
  };

  return (
  <form className="form" onSubmit={handleSubmit}>
   <label>
    <span>Mots clefs</span>
    <input 
      className="form__input" 
      type="search" 
      placeholder="React, JavaScript, Express,..."/>
    <button type="submit">Rechercher</button>
   </label>
  </form>
  );
}

export default Form;
