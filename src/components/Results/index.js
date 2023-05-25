// import PropTypes from 'prop-types';
import './style.scss';


import Card from '../Card';


function Results({list}) {
  // if (list.length === 0) {
  //   return <p>Aucun resultat</p>;
  // }

  return (
    <div className="results"> 
      {list.map((repo) =>
      <Card 
          key = {repo.id}
          title={repo.full_name}
          desc={repo.description}
          avatar = {repo.owner.avatar_url}
          url = {repo.html_url}
        />
      )}   
    </div>
  );
}

// Card.PropTypes ={
//   title:PropTypes.string,
//   desc : PropTypes.string,
// }

export default Results;
