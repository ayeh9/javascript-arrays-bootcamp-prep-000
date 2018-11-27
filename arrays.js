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
  var array = [...m,n];
  return array;
}

function destructivelyAddElementToEndOfArray(m,n){
  m.push(n);
  return m;
}

function accessElementInArray(m,n){
  return m[n];
}

function destructivelyRemoveElementFromBeginningOfArray(m){
  return m.shift();
}

function removeElementFromBeginningOfArray(m){
  return m.slice(1);
}


function destructivelyRemoveElementFromEndOfArray(m){
  return m.pop;
}
