var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];



function addElementToBeginningOfArray(m,n){
  var array = [n,...m];
  return array;
}

function destructivelyAddElementToBeginningOfArray(m,n){
  m.unshift(n);
  return m;
}

function addElementToEndOfArray(m,n){
  var array = m;
  array.push(n);
  return array;
}

function destructivelyAddElementToEndOfArray(m,n){
  m.push(n);
  return m;
}
