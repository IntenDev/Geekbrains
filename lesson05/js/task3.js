'use strict';
const wrap = document.querySelector('.wrapper');
const show = document.querySelector('button');

show.addEventListener('click', function(){
    wrap.classList.remove('hidden');
    wrap.classList.add('animated', 'zoomIn');

});
wrap.addEventListener('click', function(){
    wrap.classList.add('hidden');
});
