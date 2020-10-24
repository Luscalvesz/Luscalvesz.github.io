function travazap() {
    const audio = new Audio('./assets/music/windows-10-error-sound.mp3');
    const audio2 = new Audio('./assets/music/avast2.mp3');

    let box2 = document.getElementById("b")
    let box = document.getElementById("a")
    let e2 = ''
    let e1 = ''

    let i = 0;
    let rdn = 0
    let rdn2 = 0
    while (i < 500) {
        songs()
        rdn = Math.floor(Math.random() * 20);
        rdn2 = Math.floor(Math.random() * 20);
        out(i, rdn, rdn2);
        i++;
    }
    function out(i, rdn, rdn2) {
        setTimeout(function () {
            e2 = `<img style="z-index:${rdn2}; position:fixed; right: ${i -= rdn}rem; top: ${i -= rdn}rem" src='./assets/img/error2.png'>`
            box2.innerHTML += e2

            e1 = `<img style="z-index:${rdn2}; position:fixed; left: ${i += rdn}rem; top: ${i += rdn}rem;" src='./assets/img/error.png'>`
            box.innerHTML += e1
            
            console.log(`<img style="position:fixed; left: ${i}rem; top: ${i}rem" src='./assets/img/error.png'>`)
        }, 50 * i);
    }
    function songs() {
        audio.play()
        setTimeout(() => { audio2.play(); }, 5000);
    }
    setTimeout(() => {
        document.getElementById('bImg').classList.add('is--active')
    }, 5000);
    setTimeout(() => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO", "lusca", "height=500,width=500");
    }, 15000);


                                // let dno = document.getElementById('download')
                                // function download() {
                                //     dno.click()
                                // }
                                // dwn()
}