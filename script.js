var accordion = document.getElementsByClassName("accordion");

for(var i = 0; i < accordion.length; i++){
  accordion[i].addEventListener("click", function(){
    this.classList.toggle("accordionActive");
    var answer = this.nextElementSibling;
    if(answer.style.display == 'block'){
      answer.style.display = 'none';
    }else{
      answer.style.display = 'block';
    }
  });
}
