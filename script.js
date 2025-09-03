
//Heart Function
let heartCounter = document.getElementById('heart-counter');

let heartCount = 0
const iconHeart = document.getElementsByClassName('icon-heart');



for (let i = 0; i < iconHeart.length; i++) {
  const element = iconHeart[i];
  
  element.addEventListener('click',function (){
    element.classList.toggle('fa-regular');
    element.classList.toggle('fa-solid');
    element.classList.toggle('text-red-500');

    if(element.classList.contains('fa-solid')){
      heartCount++;
      
    }
    else{
      heartCount--;
      
    }
    heartCounter.innerText = heartCount;
  })
  
}


//Function for Call button alert
  let  coinDisplay = document.getElementById('coin-balance');
  let coinBalance = coinDisplay.innerText;
  const call = document.getElementsByClassName('call-btn');

  
for (let i = 0; i < call.length; i++) {
  let element = call[i];
 
  let cardNum = document.getElementsByClassName('card-num');
  let cardTitle= document.getElementsByClassName('card-title');
  
  element.addEventListener('click',function() {

    if( coinBalance > 20){
      coinBalance -= 20;
      alert('📞 calling  ' + cardTitle[i].innerText + " " + cardNum[i].innerText);
      coinDisplay.innerText = coinBalance;
    }
    else{
      alert("❌ You don't have enough balance to make call");
    }
  })

}

//Function for copy button + copy textt
let copyDisplay = document.getElementById('copy-display');
let copyBtn = document.getElementsByClassName('copy-btn');
let copyCount = 0;
let cardNum = document.getElementsByClassName('card-num');
for (let i = 0; i < copyBtn.length; i++) {
  const element = copyBtn[i];

  element.addEventListener('click', function(){
    copyCount++;
    copyDisplay.innerText = copyCount;

    const text = cardNum[i].innerText ;
    //Copy Text to clipboard
     navigator.clipboard.writeText(text);
     alert("Copied: " + text);
     console.log(text);
  })

  
}

//Call History Card




  
  
  




    

