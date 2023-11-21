function isIsogram(str){
  let counter = 0;
  if(str === ""){
    return true;
  }
  else{
    for(let i = 0; i < str.length; i++){
      for(let j = 0; j < str.length; j++){
        if(str.charAt(i).toLowerCase() === str.charAt(j).toLowerCase()){
          counter++;
        }else{
          continue;
        }
      }
    }
  }
  if(counter > str.length){
    return false;
  }
  else{
    return true;
  }
}
