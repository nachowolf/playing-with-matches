window.onload = random;
var blocked =   document.querySelectorAll('.rand')
var messageElem = document.querySelector('.message')



  function random() {
    for(var i = 0 ; i<blocked.length ; i++){
      var elems = blocked[i]
 var num = Math.floor(Math.random() * 9);
     
    showNum(elems, num)
      
  }
    matching(elems)
  }

function showNum(elems, num){
elems.innerHTML = num
  
}

function matching(elems){
  if(blocked[1].innerHTML === blocked[0].innerHTML && blocked[1].innerHTML == blocked[2].innerHTML){
    messageElem.classList.remove('match1')
    
      blocked[1].classList.add('ultra')
     blocked[0].classList.add('ultra')
    blocked[2].classList.add('ultra')
    messageElem.classList.add('ultra1')
    messageElem.classList.remove('message')
    
    messageElem.innerHTML = "You have found a match!"
    }
   if(blocked[1].innerHTML === blocked[0].innerHTML){
      blocked[1].classList.add('match')
     blocked[0].classList.add('match')
     messageElem.classList.remove('message')
     messageElem.classList.remove('ultra1')
    messageElem.classList.add('match1')
     messageElem.innerHTML = "You have found a match!"
    }
  
  else if(blocked[1].innerHTML == blocked[2].innerHTML){
      blocked[1].classList.add('match')
     blocked[2].classList.add('match')
    messageElem.classList.remove('message')
     messageElem.classList.remove('ultra1')
    messageElem.classList.add('match1')
   
    messageElem.innerHTML = "You have found a match!"
    }
  
  else{
    messageElem.classList.remove('ultra1')
    messageElem.classList.remove('match1')
    messageElem.classList.add('message')
  }
  
}