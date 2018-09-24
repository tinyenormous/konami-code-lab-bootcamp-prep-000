const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let count=0

function init() {
  const main = document.querySelector('body')
  main.addEventListener('keydown', function(event) {
     // console.log(event.key)
     if (event.key===codes[count]){
       count++;
       // console.log(`${count} / ${codes.length}`)

    } else {
      count = 0
    }
    if (count === codes.length){
         window.alert("YOU DID IT!")
         count = 0
    }
  }, false)
}

init()
