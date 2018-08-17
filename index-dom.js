window.onload = random;
var blocked =   document.querySelectorAll('.rand')



  function random() {
    for(var i = 0 ; i<blocked.length ; i++){
      var elems = blocked[i]
 var num = Math.floor(Math.random() * 9);
     
    showNum(elems, num)
  }
  }

function showNum(elems, num){
elems.innerHTML = num
  
}