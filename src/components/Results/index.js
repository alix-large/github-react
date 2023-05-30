import './style.scss';
import getTitleByResultsNumber from '../../test/getTitleByResultsNumber.js';

import Card from '../Card';

function Results({list}) {
  console.log(list);
  return (
    <section className="results">
      <h2>{getTitleByResultsNumber(list)}</h2>
        {list.map((repo) => (
        <Card 
            key = {repo.id}
            title={repo.full_name}
            desc={repo.description}
            avatar = {repo.owner.avatar_url}
            url = {repo.html_url}
          />
        ))}   
    </section>
  );
}

export default Results;
