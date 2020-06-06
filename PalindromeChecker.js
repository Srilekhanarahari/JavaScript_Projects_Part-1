function palindrome(str) {
  let RE=/[^a-z0-9]/gi;
  let word=str.toLowerCase().replace(RE,'');
  var arr=word.split("");
  var revarr=arr.reverse();
  var revarr=revarr.join("");
  if(word===revarr){
    return true;
  }
  else{
    return false;
  }
}



palindrome("eye");