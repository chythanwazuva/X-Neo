const loadingText = [...document.querySelectorAll('.loadingtxt')];
let text = 'Explore Borneo';
for(let i = 0; i < text.length; i++){
    setTimeout(() => {
        loadingText[0].innerHTML += text[i];
        loadingText[1].innerHTML += text[i];
    }, 300 * i)
}