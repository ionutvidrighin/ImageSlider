
const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');
const label3 = document.querySelector('#label3');
const label4 = document.querySelector('#label4');
const label5 = document.querySelector('#label5');
let navigator = document.querySelectorAll('label');

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.checked ? label1.classList.add('filled-button') : "";
})

const container = document.querySelector('.container');

const arrowLeft = document.querySelector('.fa-chevron-circle-left');
const arrowRight = document.querySelector('.fa-chevron-circle-right');

arrowRight.addEventListener('click', () => {
    arrowLeft.classList.remove('hidden');
    let right = document.getElementById('right');
    let scroll = container.scrollLeft += 700;
    if (scroll === 2800) { 
        right.classList.add('hidden');
    }
})

arrowLeft.addEventListener('click', () => {
    arrowRight.classList.remove('hidden');
    let left = document.getElementById('left');
    let scroll = container.scrollLeft -= 700;
    if (scroll === 0) { 
        left.classList.add('hidden');
    }
})

container.addEventListener('scroll', (e) => {
    let scrollAmount = e.target.scrollLeft;

    switch(scrollAmount) {
        case 0:
        arrowLeft.classList.add('hidden');
        label1.classList.add('filled-button');
        label2.classList.remove('filled-button');
        label3.classList.remove('filled-button');
        label4.classList.remove('filled-button');
        label5.classList.remove('filled-button');
        break;

        case 700:
        arrowLeft.classList.remove('hidden');
        arrowRight.classList.remove('hidden');
        label1.classList.remove('filled-button');
        label3.classList.remove('filled-button');
        label4.classList.remove('filled-button');
        label5.classList.remove('filled-button');
        label2.classList.add('filled-button');
        break;

        case 1400:
        arrowLeft.classList.remove('hidden');
        arrowRight.classList.remove('hidden');
        label1.classList.remove('filled-button');
        label2.classList.remove('filled-button');
        label4.classList.remove('filled-button');
        label5.classList.remove('filled-button');
        label3.classList.add('filled-button');
        break;

        case 2100:
        arrowLeft.classList.remove('hidden');
        arrowRight.classList.remove('hidden');
        label1.classList.remove('filled-button');
        label2.classList.remove('filled-button');
        label3.classList.remove('filled-button');
        label5.classList.remove('filled-button');
        label4.classList.add('filled-button');
        break;

        case 2800:
        arrowRight.classList.add('hidden');
        label1.classList.remove('filled-button');
        label2.classList.remove('filled-button');
        label3.classList.remove('filled-button');
        label4.classList.remove('filled-button');
        label5.classList.add('filled-button');
        break;
    }
})


class Navigator {
    switchImage(label, nav1Btn, nav2Btn, nav3Btn, nav4Btn, nav5Btn) {
        label.forEach((button) => {
            button.addEventListener('click', (e) => {
                const element = e.target.id;
                console.log(element)
                switch(element) {
                    case 'label1':
                    nav1Btn.classList.add('filled-button');
                    nav2Btn.classList.remove('filled-button');
                    nav3Btn.classList.remove('filled-button');
                    nav4Btn.classList.remove('filled-button');
                    nav5Btn.classList.remove('filled-button');
                    break;

                    case 'label2':
                    nav2Btn.classList.add('filled-button');
                    nav1Btn.classList.remove('filled-button');
                    nav3Btn.classList.remove('filled-button');
                    nav4Btn.classList.remove('filled-button');
                    nav5Btn.classList.remove('filled-button');
                    break;

                    case 'label3':
                    nav3Btn.classList.add('filled-button');
                    nav1Btn.classList.remove('filled-button');
                    nav2Btn.classList.remove('filled-button');
                    nav4Btn.classList.remove('filled-button');
                    nav5Btn.classList.remove('filled-button');
                    break;

                    case 'label4':
                    nav4Btn.classList.add('filled-button');
                    nav1Btn.classList.remove('filled-button');
                    nav2Btn.classList.remove('filled-button');
                    nav3Btn.classList.remove('filled-button');
                    nav5Btn.classList.remove('filled-button');
                    break;

                    case 'label5':
                    nav5Btn.classList.add('filled-button');
                    nav1Btn.classList.remove('filled-button');
                    nav2Btn.classList.remove('filled-button');
                    nav3Btn.classList.remove('filled-button');
                    nav4Btn.classList.remove('filled-button');
                    break;
                }
            })
        })
    }
}

const switchButton = new Navigator;
switchButton.switchImage(navigator, label1,  label2,  label3,  label4,  label5);


/*
navigator[0].onclick = () => {
    navigator[0].classList.add('filled-button');
    navigator[1].classList.remove('filled-button');
    navigator[2].classList.remove('filled-button');
    navigator[3].classList.remove('filled-button');
    navigator[4].classList.remove('filled-button');
}

navigator[1].onclick = () => {
    navigator[1].classList.add('filled-button');
    navigator[0].classList.remove('filled-button');
    navigator[2].classList.remove('filled-button');
    navigator[3].classList.remove('filled-button');
    navigator[4].classList.remove('filled-button');
}

navigator[2].onclick = () => {
    navigator[2].classList.add('filled-button');
    navigator[0].classList.remove('filled-button');
    navigator[1].classList.remove('filled-button');
    navigator[3].classList.remove('filled-button');
    navigator[4].classList.remove('filled-button');
}

navigator[3].onclick = () => {
    navigator[3].classList.add('filled-button');
    navigator[0].classList.remove('filled-button');
    navigator[1].classList.remove('filled-button');
    navigator[2].classList.remove('filled-button');
    navigator[4].classList.remove('filled-button');
}

navigator[4].onclick = () => {
    navigator[4].classList.add('filled-button');
    navigator[0].classList.remove('filled-button');
    navigator[1].classList.remove('filled-button');
    navigator[2].classList.remove('filled-button');
    navigator[3].classList.remove('filled-button');
}
*/

