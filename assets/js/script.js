function travazap() {
    const audio = new Audio('./assets/music/windows-10-error-sound.mp3');
    const audio2 = new Audio('./assets/music/avast.mp3');

    let box2 = document.getElementById("b")
    let box = document.getElementById("a")
    let e2 = ''
    let e1 = ''

    let i = 0;
    let rdn = 0
    while (i < 100) {
        songs()
        rdn = Math.floor(Math.random() * 25);
        out(i, rdn);
        i++;
    }
    function out(i, rdn) {
        setTimeout(function () {
            e2 = `<img style="position:fixed; right: ${i += rdn}rem; top: ${i += rdn}rem" src='./assets/img/error2.png'>`
            box2.innerHTML += e2

            e1 = `<img style="z-index:1; position:fixed; left: ${i += rdn}rem; top: ${i += rdn}rem;" src='./assets/img/error.png'>`
            box.innerHTML += e1
            
            setTimeout(() => { audio.play(); }, 1000);
            setTimeout(() => { audio2.play(); }, 5000);
            console.log(`<img style="position:fixed; left: ${i}rem; top: ${i}rem" src='./assets/img/error.png'>`)
            
        }, 50 * i);
    }
    function songs() {
        audio.play()
        setTimeout(() => {
            audio.play()
        }, 2000);
    }
    setTimeout(() => {
        document.getElementById('bImg').classList.add('is--active')
    }, 4500);
    setTimeout(() => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO", "lusca", "height=500,width=500");
    }, 15000);
    

}
// function alterimg() {
//     setTimeout(() => {
//         var imag = document.getElementById('imagem')
//         imag.src = './assets/img/hacking.svg'
//     }, 1000);
// }
// function removeImg() {
//     setTimeout(() => {
        
//     var imag = document.getElementById('imagem')
//     imag.src = './assets/img/internet.svg'
//     }, 1000);
// }

// window.onload = function() {
//     writer();
// };