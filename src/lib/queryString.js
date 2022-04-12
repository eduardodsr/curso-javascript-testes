module.exports.queryString = obj => {
  // console.log(Object.entries(obj)); //  [ [ 'name', 'Eduardo' ], [ 'profession', 'Developer' ] ]
  const entries = Object.entries(obj).map(item => {
    // console.log(item);
    //  [ 'name', 'Eduardo' ]
    // [ 'profession', 'Developer' ]
    return `${item[0]}=${item[1]}`; //  [ 'name=Eduardo', 'profession=Developer' ]
  });
  // console.log(entries.join('&')); // name=Eduardo&profession=Developer
  return entries.join('&');
};
