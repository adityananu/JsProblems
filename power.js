function power(sub, pow){
  let value = 1;
  for(i = 0; i < pow ; i++){
    value = value * sub;
  }
  return value;
}
console.log(power(2,4));

//output : 16
