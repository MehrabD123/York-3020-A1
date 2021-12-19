function palindrome(){
  var userInput = document.getElementById("Number").value;


  var flipped = flipInt(userInput);
if (!flipped) {
  document.getElementById("demo").innerHTML = " Please Enter A Valid Number";
}
  else if(flipped == userInput)
  {
    document.getElementById("demo").innerHTML = " Yes";
  }

  else if(flipped!=userInput) {
    document.getElementById("demo").innerHTML = " No";
  }

  function flipInt(n){
      var digit, result = 0

      while( n ){
          digit = n % 10
          result = (result * 10) + digit
          n = n/10|0
      }
      document.getElementById("demo").innerHTML =result;
      return result;
  }

}
