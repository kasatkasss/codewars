function passed (list) {
    let arrayWhoPassed = [];
    let sum = 0;
    let averageResult = 0;
    let counter = 0;
    for(let i = 0; i < list.length; i++){
      if(list[i] <= 18){
        arrayWhoPassed.push(list[i])
        sum += list[i];
        counter++;
      }
    }
    if(sum != 0){
      averageResult = sum/counter;
      return Math.round(averageResult);
    }
    else{
      return 'No pass scores registered.'
    }
  //Good luck!
  } 