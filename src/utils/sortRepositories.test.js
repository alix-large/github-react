describe('sortRepositories', () => {
    test('devraient renvoyer un tableau d\'entrée trié par nombre d\'issues', () => {
      const input = [
        {name: 'Repo 1', open_issues: 100},
        {name: 'Repo 2', open_issues: 50},
        {name: 'Repo 3', open_issues: 200}
      ];
      const output = [
        {name: 'Repo 2', open_issues: 50},
        {name: 'Repo 1', open_issues: 100},
        {name: 'Repo 3', open_issues: 200}
      ];
      expect(sortRepositories(input)).toEqual(output);
    });
  });