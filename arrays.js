function addElementToBeginningOfArray(n,m){
  var array = [];
  array = m.unshift(n);
  return array;
}

function destructivelyAddElementToBeginningOfArray(n,m){
  m.unshift(n);
  return m;
}
