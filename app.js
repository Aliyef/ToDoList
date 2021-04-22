var container = document.querySelector('.child');
var text = document.querySelector('#inputtext');
var add = document.querySelector('#inputadd');
var clear = document.querySelector('#inputclear');


//----------------------------- A D D -----------------------------


add.addEventListener('click',function(){

  var paragraph = document.createElement("p");
  paragraph.classList.add('style')

 container.appendChild(paragraph);
 paragraph.innerHTML = text.value;
 text.value="";


 paragraph.addEventListener('click',function(){
     
      paragraph.style.textDecoration='line-through'});
 paragraph.addEventListener('dblclick',function(){
     
      paragraph.remove()});




 clear.addEventListener('click',function(){

    container.removeChild(paragraph);
   
   })



});







