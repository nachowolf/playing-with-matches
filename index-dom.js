window.onload = random;

  function random() {
 var num = Math.floor(Math.random() * 9);

  document.querySelector('.rand').innerHTML = num
  
}