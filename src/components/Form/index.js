import './style.scss';

function Form({fetchRepos}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRepos(event.target[0].value);//on appelle la fonction avec la valeur du champ
  };

  return (
  <form id="search-form" className="form" onSubmit={handleSubmit}>
   <label className="form__label">
    <span>Mots clefs</span>
    <input 
      className="form__input" 
      type="search" 
      placeholder="React, JavaScript, Express,..."/>
    <button className="form__action" type="submit">Rechercher</button>
   </label>
  </form>
  );
}

export default Form;
