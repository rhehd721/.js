wrapper = document.querySelector('.wrapper');

function _callback(){
    wrapper.style.backgroundColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
}

wrapper.addEventListener('click', _callback)


