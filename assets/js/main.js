const inputFeld = document.getElementById("inputFeld");
const output = document.getElementById("output");

function submit1() {
  if (inputFeld.value) {
    let array = ["o"];
    let text = "";

    for (let a = 0; a <= inputFeld.value; a++) {
      for (let b = 0; b < array.length; b++) {
        output.innerHTML = `L${text}p`;

        text = text + array[b].charAt(0);

        output.style.color = "green";
        console.log(array[b]);
      }
    }
  }
  if (inputFeld.value == "") {
    output.innerHTML = "";
  }
}

// for(let a = 1; a <=10; a++){

//     for(let b = 1; b <=10; b++){

//     console.log(`${a} x ${b} = ${(a*b)}`);

//     }

// }
