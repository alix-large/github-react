import './style.scss';
import getTitleByResultsNumber from '../../utils/getTitleByResultsNumber.js';

import Card from '../Card';

function Results({list}) {
  console.log(list);
  return (
    <section>
      <h2>{getTitleByResultsNumber(list)}</h2>
        <div  className="results">
        {list.map((repo) => (
          <Card 
              key = {repo.id}
              title={repo.full_name}
              desc={repo.description}
              avatar = {repo.owner.avatar_url}
              url = {repo.html_url}
              open_issues ={repo.open_issues}
            />
          ))} 
        </div>  
    </section>
  );
}

export default Results;
