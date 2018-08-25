// Lightbox Config

lightbox.option({
    alwaysShowNavOnTouchDevices : true,

});


// ****************************//
//  Vanilla JS Search Filter   //
// ****************************//

const thumbs = document.querySelectorAll('a');
let captions;
let found;

document.getElementById('search-input').addEventListener('keyup', function(event){
    let userInput = event.target.value.toLowerCase();
    filter(userInput);
});

// Inspiration from 'https://stackoverflow.com/a/40358801/10270166'
function filter(input) {
    for(let i = 0; i < thumbs.length; i++) {
        captions = thumbs[i].getAttribute('data-title').toLowerCase();
        for(let j = 0; j < captions.length; j++) {
            if (captions.indexOf(input) > -1) {
                found = true;
            }
        }
        if(found){
            thumbs[i].style.display= '';
            found = false;
        } else  {
            thumbs[i].style.display = 'none';
        }
    }
}
