function shopImage(element){
    if(element){
        var img = el(element).src;
        el('fullscreenImg').src = img;
    }
    el('imgShow').classList.toggle('on');
}

function el(id) { return document.getElementById(id); }