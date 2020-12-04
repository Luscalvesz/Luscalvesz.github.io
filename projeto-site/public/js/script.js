function move() {
    var texto1 = document.getElementById('movementText1')
    var divToMove = document.getElementById('move')
    divToMove.classList.toggle('active')
    if (divToMove.classList == 'movement active') {
        texto1.innerHTML = 'Faça o cadastro para ter acesso a todo o conteúdo sobre hacking e segurança da informação'
    } else {
        texto1.innerHTML = 'Faça o login para entrar em nossa plataforma'
    }
}

function travazap() {
    const audio = new Audio('./music/windows-10-error-sound.mp3');
    const audio2 = new Audio('./music/avast2.mp3');
    const audioAvast = new Audio('./music/avast.mp3');
    const modal = document.getElementById('modal')
    const bait = document.getElementById('bait')

    let box2 = document.getElementById("b")
    let box = document.getElementById("a")
    let e2 = ''
    let e1 = ''

    let i = 0;
    let rdn = 0
    let rdn2 = 0

    // avast
    document.getElementById('bImg').classList.add('activeAvast')
    audioAvast.play()

    let dno = document.getElementById('download')

    function download() {
        dno.click()
    }
    download()
    setTimeout(() => {
        function out(i, rdn, rdn2) {
            setTimeout(function () {
                e2 = `<img style="z-index:${rdn2}; position:fixed; right: ${i -= rdn}rem; top: ${i -= rdn}rem" src='./img/error2.png'>`
                box2.innerHTML += e2

                e1 = `<img style="z-index:${rdn2}; position:fixed; left: ${i += rdn}rem; top: ${i += rdn}rem;" src='./img/error.png'>`
                box.innerHTML += e1

                console.log(`<img style="position:fixed; left: ${i}rem; top: ${i}rem" src='./img/error.png'>`)
            }, 50 * i);
        }

        function songs() {
            audio.play()
            setTimeout(() => {
                audio2.play();
            }, 2000);
        }
        songs()
        while (i < 120) {
            rdn = Math.floor(Math.random() * 20);
            rdn2 = Math.floor(Math.random() * 20);
            out(i, rdn, rdn2);
            i++;
        }
    }, 4000);
    setTimeout(() => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO", "lusca", "height=500,width=500");
    }, 12000);
}

function openModal() {
    modal.classList.add('is--active')
}

function closeModal() {
    modal.classList.remove('is--active')
}

function showHeader() {
    var menu = document.getElementById('menu')
    menu.classList.toggle('menuTransform')

    var headerDrop = document.getElementById('drop')
    headerDrop.classList.toggle('activeHeader')
}

function scrollHist() {
    document.getElementById("scrollHist").scrollIntoView()
}
function scrollCurios() {
    document.getElementById("scrollCurios").scrollIntoView()
}
function scrollHack() {
    document.getElementById("scrollHack").scrollIntoView()
}

function closeConfirm() {
    modalConfirm.classList.remove('activeConfirm')
}
let confirm = document.getElementById("confirm").checked = false

function activeHack() {
    bait.classList.toggle('is--active')
    confirm = document.getElementById("confirm").checked = false
    if (bait.classList.value == "modal-bait is--active") {
        confirm = document.getElementById("confirm").checked = true
    }
}

function validateTravazap() {

    let modalConfirm = document.getElementById("modalConfirm")

    if (confirm == true) {
        travazap()
        console.log('errado')
    } else if (confirm == false) {
        modalConfirm.classList.add('activeConfirm')

    }
}