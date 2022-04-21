

let submitButton=document.getElementById('button_submit');
let cardMain=document.querySelector('.card__main');
let main=document.querySelector('main');

let ratingButtons=Array.from(document.getElementsByName('rating'));
let cardResult=document.createElement('div');

let rating='';

ratingButtons.forEach(button=>{
    button.addEventListener('change',(e) => {
      
      rating=e.target.value;
      
    });
});



submitButton.onclick=(e) => {
    if(rating===''){
        return;
    }
    cardMain.classList.add("card__hidden");
    cardResult.classList.add(['card', 'card__result']);
    cardResult.innerHTML=`<div class="card card__result">
    <div class="card__image">
        <img src="./images/illustration-thank-you.svg" alt="">
    </div>
    <div class="text__result">
        <span>You selected ${rating} out of 5</span>
    </div>
    <h1 >Thank you!</h1>
    <div class="card__content">
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>

    </div>
`
    main.appendChild(cardResult);
    console.log(rating)
    rating='';
}

