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

function init() {
  const main = document.querySelector('body')
  let count=0
  main.addEventListener('keydown', function(event) {
   console.log(event.key)
   if (event.key==codes[count]){
    count++
  } else {
    count = 0
  }
  if (count === codes.length){
    alert('you done did it!!!')
    count = 0
  }
  })
}

init()
