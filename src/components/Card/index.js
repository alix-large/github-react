import './style.scss';

function Card() {
  return (
    <a target="_blank" href="https://github.com/airbnb/javascript" className="card">
      <img className="card__img" src="https://avatars.githubusercontent.com/u/698437?v=4" alt="avatar" />
      <div>
         <h1 className="card__title">React</h1>
         <p className="card__info">lrodfjpsmfjismdfkjsdf lskdfjlsdfkjsldf lsdfkjslfkjsfl </p>
      </div>
    </a>
  );
}

export default Card;
