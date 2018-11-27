function addElementToBeginningOfArray(m,n){
  var array = [];
  array = m.unshift(n);
  return array;
}

function destructivelyAddElementToBeginningOfArray(m,n){
  return m.unshift(n);
}
