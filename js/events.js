function getIt() {
  alert('Hey!')
}

function frameIt() {
//var pix = document.images
var pix = document.getElementsById('img')
  pix.style.border='medium solid red'
}

$(document).ready(function(){

$(p).on('click', function() {
  getIt()
})
#(img).on('load' function() {
  frameIt()
})

});
