const line = () => {
    let sizeW = Math.random() * 12
    let e = document.createElement('div');
    let duration = Math.random() * 3;

    e.setAttribute('class', 'circle');
    document.body.appendChild(e);
    e.style.width = 2 + sizeW + 'px';
    e.style.left = Math.random() * + innerWidth + 'px';
    e.style.animationDuration = 2 + duration + 's';


    setTimeout(() => {
        document.removeChild(e)
    }, 5000);
}

setInterval(() => {
    line()
}, 200);