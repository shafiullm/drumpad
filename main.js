//keyboard
document.addEventListener('keydown', playSound);

//mouse
const divKeys = document.querySelectorAll('.key');
divKeys.forEach(key => {
   key.addEventListener('click', () => {
     const dataKey = key.getAttribute('data-key');
     const audioElement = document.querySelector(`audio[data-key="${dataKey}"]`);
     const divElement = document.querySelector(`div[data-key="${dataKey}"]`);
     
     if (!audioElement) return;
     
     divElement.classList.add('playing');

     changeTransitionColor(divElement);

     audioElement.currentTime = 0;
     audioElement.play();
    });
});



  function playSound(e){
    console.log(e);
    const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const divElement = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audioElement) return;

    divElement.innerHTML = "";
    divElement.classList.add('playing');
    
    changeTransitionColor(divElement);

    audioElement.currentTime = 0;
    audioElement.play();
  }

  const keys = document.querySelectorAll('.key');

  keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
  })

  function removeTransition(e){
    if (e.propertyName !== 'transform'){
      return;
    }
    this.classList.remove('playing');
  }

  function changeKitAudio(){
    let selectedKit = document.querySelector('input[name="option"]:checked').value;
    const audioList = document.querySelectorAll('audio');
    audioList.forEach((e)=>{
      e.src = e.src.replace(/\/[A-Za-z0-9]+-kit\//,"/"+selectedKit+"/");
    })
  }

  function changeTransitionColor(divElement){
    var colors = ['42A5F5','2196F3','29B6F6','03A9F4','26C6DA','00BCD4','26A69A','009688','66BB6A','4CAF50','9CCC65','8BC34A','D4E157','CDDC39','FFEE58','FFEB3B','FFCA28','FFC107','FFA726','FF9800','FF7043','FF5722','AB47BC','9C27B0','7E57C2','673AB7','5C6BC0','3F51B5','EF5350','F44336','EC407A','E91E63'];
    var color = '#';
    color += colors[Math.floor(Math.random() * colors.length)];

    divElement.style.background = color;
    const transitionSelector = document.querySelector(".playing");
    transitionSelector.style.borderColor = color;
    transitionSelector.style.boxShadow = `0 0 1.5rem ${color}`;
  }
  