import './style.scss';
import   colorNumber  from '../../utils/colorNumber.js';
import truncate from '../../utils/truncate.js';

function Card( {title, desc, url, avatar, open_issues}) {
  return (
    <article className="card">
      <img className="card__img" src={avatar} alt="" />
        <h3 className="card__title">{title}</h3>
        <p className="card__info">{truncate(desc)}</p>
        <p>Issues : 
          <span className={"card__issues card__issues--" + colorNumber(open_issues)}>
            {open_issues}
          </span>
        </p>
        <a href={url}>Consulter le dépot <span className='sr-only'>{title}</span> </a>
    </article>
  );
}

export default Card;
