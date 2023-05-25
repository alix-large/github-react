import PropTypes from 'prop-types';
import './style.scss';


import Card from '../Card';


function Results({list}) {
  console.log(list);
  return (
    <div className="results"> 
      {list.map(repo =>
      <Card 
          key = {repo.id}
          title={repo.name}
          desc={repo.description}
          avatar = {repo.owner.avatar_url}
          url = {repo.owner.url}
        />
      )}   
    </div>
  );
}

Card.PropTypes ={
  title:PropTypes.string,
  desc : PropTypes.string,
}

export default Results;
