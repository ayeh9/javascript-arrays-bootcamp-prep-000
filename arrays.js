function addElementToBeginningOfArray(m,n){
  var array = [];
  array = m.unshift(n);
  return array;
}

function destructivelyAddElementToBeginningOfArray(m,n){
  m.unshift(n);
  return m;
}
