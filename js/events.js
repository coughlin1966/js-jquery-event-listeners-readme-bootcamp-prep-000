/*function getIt() {
  alert('Hey!')
}

function frameIt() {
var pixClass = document.getElementsByTagName('img')
pixClass.classList.add(pixClass)
  pixClass.style.border='medium solid red'
}

$(document).ready(function(){

$(p).on('click', function() {
  getIt()
})
#(img).on('load' function() {
  frameIt()
})

});
*/

function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty')
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

function pressIt(key) {
  $('input').on('keydown', function() {
//var key = 0
    if (key.keyCode == 71) {
      alert('G key was pressed.')
    }
  })
}

$(document).ready(function(){

getIt()
frameIt()
submitIt()
pressIt()

});
