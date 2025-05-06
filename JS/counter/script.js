let num;
let c = document.getElementById("para1");
function OdEv() {
  if (num % 2 == 0) {
    c.textContent = "Even";
  } else {
    c.textContent = "Odd";
  }
}

let value1 = 0;
let d = document.getElementById("head");
function incr() {
  value1++;
  d.textContent = value1;
}

function decr() {
  value1--;
  d.textContent = value1;
}

function reset() {
  value1 = 0;
  d.textContent = value1;
}
