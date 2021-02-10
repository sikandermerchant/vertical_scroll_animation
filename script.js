const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
  //this is to determine the trigger-point where we can start the transition of boxes; it is not a static number as that can change based on the window size
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach(box => {
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const boxTop =  box.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
      box.classList.add('show');
    }else{
      box.classList.remove('show');
    }
  });
}