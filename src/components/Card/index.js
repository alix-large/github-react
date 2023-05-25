import './style.scss';

function Card( {title, desc, url, avatar}) {
  return (
    <a target="_blank" href={url} className="card">
      <img className="card__img" src={avatar} alt="avatar" />
      <div>
         <h1 className="card__title">{title}</h1>
         <p className="card__info">{desc}</p>
      </div>
    </a>
  );
}

export default Card;
