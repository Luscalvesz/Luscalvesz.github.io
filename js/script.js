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

    // function download() {
    //     dno.click()
    // }
    // download()

    closeModal()
    setTimeout(() => {
        function out(i, rdn, rdn2) {
            setTimeout(function () {
                e2 = `<img style="z-index:${i}; position:fixed; right: ${rdn2 -= rdn}rem; top: ${rdn -= rdn2}rem" src='./img/error2.png'>`
                box2.innerHTML += e2

                e1 = `<img style="z-index:${i}; position:fixed; left: ${rdn += rdn2}rem; top: ${rdn2 += rdn}rem;" src='./img/error.png'>`
                box.innerHTML += e1

                
            }, 50 * i);
        }

        function songs() {
            audio.play()
            setTimeout(() => {
                audio2.play();
            }, 2000);
        }
        songs()
        while (i < 200) {
            rdn = Math.floor(Math.random() * 50);
            rdn2 = Math.floor(Math.random() * 50);
            out(i, rdn, rdn2);
            i++;
        }
    }, 1000);
    setTimeout(() => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO", "lusca", "height=500,width=500");
    }, 12000);
}
function loading() {
    const loading = document.getElementById('loading')
    const loadingBar = document.getElementById('loadingBar')
    let cont = 0
    loading.style.display = "flex"
    setInterval(() => {
        loadingBar.style.width = `${cont}%`
        loadingBar.innerHTML = `${cont}%`
        cont++
        if (cont == 100) {
            
            travazap()
            loading.style.display = "none"
        }
    }, 10);
    
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
        loading()
    } else if (confirm == false) {
        modalConfirm.classList.add('activeConfirm')
    }
}