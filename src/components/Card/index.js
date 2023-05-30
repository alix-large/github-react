import './style.scss';

function Card( {title, desc, url, avatar}) {
  return (
    <article className="card">
      <img className="card__img" src={avatar} alt="" />
        <h3 className="card__title">{title}</h3>
        <p className="card__info">{desc}</p>
        <a href={url}>Consulter le dépot <span className='sr-only'>{title}</span> </a>
    </article>

  );
}

export default Card;
