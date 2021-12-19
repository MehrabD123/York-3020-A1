var postCount = 0;
var negCount = 0;

function printResult() {
  document.getElementById("result").innerHTML = ("Positive numbers: " + postCount + "\nNegative numbers: " + negCount);

}

function pos() {

  let btnClear = document.querySelector('button');
  let inputs = document.querySelectorAll('input');



  var x = parseInt(document.getElementById("num").value);
  document.getElementById("num").value = ''

  if (x > 0) {
    postCount++;
  } else if (x < 0) {
    negCount++;
  } else {
    printResult();
    postCount = 0;
    negCount = 0;
  }


}
