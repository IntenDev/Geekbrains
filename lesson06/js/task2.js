'use script';
const SLIDE_WIDTH = 600;
const SLIDES_NUM = 3;

let slider = {
    container: null,
    frame: 0,
    set: function (frame) {
        this.container.scrollTo({
            left: SLIDE_WIDTH * frame,
            behavior: 'smooth'
        });
    },
    init: function () {
        this.container = document.querySelector('#scr');
        this.set(this.frame);
    },
    left: function () {
        this.frame--;
        if(this.frame < 0) this.frame = SLIDES_NUM - 1;
        this.set(this.frame);
    },
    right: function () {
        this.frame++;
        if (this.frame == SLIDES_NUM) this.frame = 0;
        this.set(this.frame);
    }
};
window.onload = function () {
    slider.init();
};
