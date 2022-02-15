var slider = document.getElementById("heightNum");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var x = document.createElement("SELECT");



const element = document.getElementById("heightNum");
slider.oninput = function myFunction() {
  var j = document.getElementById("dropDown").value;
  output.innerHTML = dropDown.value;
  output.innerHTML = this.value;
  const x = document.getElementById("heightNum").value;
  let string = ""
  for (let i = 1; i <= x; i++) {
    for (let j = 0; j < x - i; j++) {
      string += " . ";
    }
    for (let k = 0; k < i; k++) {
      string += j;
     }
     string += "\n";
  }
 rowStr.innerText = string;
 document.body.appendChild(rowStr);
 function secFunction() {
   var myobj = document.getElementById("rowStr");
   myobj.remove();
 }
}