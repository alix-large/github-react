import './style.scss';

function Form() {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
  <form id="search-form" className="form" onSubmit={handleSubmit}>
   <label className="form__label">
    Mots clefs
     <input class="form__input" type="search" id="search-input" />
     <button class="form__action" type="submit">Rechercher</button>
   </label>
  </form>
  );
}

export default Form;
