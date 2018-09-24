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
main.addEventListener('click', function(event) {
  if (event.which==codes[count]){
    count++
  } else {
    count =0
  }
  if (count === codes.length){
    alert('you done did it!!!')
  }
  // alert('I was clicked!')
})
}
