function abbrevName(name){
    let arr = name.split(" ");
    let firstLetter = arr[0].charAt(0).toUpperCase();
    let secondLetter = arr[1].charAt(0).toUpperCase();
    return firstLetter + "." + secondLetter;
}