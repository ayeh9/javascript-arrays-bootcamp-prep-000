function addElementToBeginningOfArray(m,n){
  var array = [];
  array = m.push(n);
  return array;
}

function destructivelyAddElementToBeginningOfArray(m,n){
  return m.push(n);
}
