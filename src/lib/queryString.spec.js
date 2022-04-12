const { queryString } = require('./queryString');

describe('Object to query string', () => {
  // deveria criar uma string de consulta válida quando um objeto for fornecido
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Eduardo',
      profession: 'Developer',
    };

    queryString(obj); //  queryString: { name: 'Eduardo', profession: 'Developer' }

    //   expect(queryString(obj)).toBe('name=Eduardo&profession=Developer');
  });
});
