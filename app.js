
const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');
const label3 = document.querySelector('#label3');
const label4 = document.querySelector('#label4');

const navigators = document.querySelectorAll('label');
const arrowLeft = document.querySelector('.fa-chevron-circle-left');
const arrowRight = document.querySelector('.fa-chevron-circle-right');

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.checked ? label1.classList.add('filled-button') : "";
})


const container = document.querySelector('.container');

container.addEventListener('scroll', (e) => {
    let scrollAmount = e.target.scrollLeft;
    console.log(e)

    switch(scrollAmount) {
        case 0:
        arrowLeft.classList.add('hidden');
        label1.classList.add('filled-button');
        label2.classList.remove('filled-button');
        label3.classList.remove('filled-button');
        label4.classList.remove('filled-button');
        break;

        case 640:
        arrowLeft.classList.remove('hidden');
        arrowRight.classList.remove('hidden');
        label1.classList.remove('filled-button');
        label3.classList.remove('filled-button');
        label4.classList.remove('filled-button');
        label2.classList.add('filled-button');
        break;

        case 1280:
        arrowLeft.classList.remove('hidden');
        arrowRight.classList.remove('hidden');
        label1.classList.remove('filled-button');
        label2.classList.remove('filled-button');
        label4.classList.remove('filled-button');
        label3.classList.add('filled-button');
        break;

        case 1920:
        arrowLeft.classList.remove('hidden');
        arrowRight.classList.add('hidden');
        label1.classList.remove('filled-button');
        label2.classList.remove('filled-button');
        label3.classList.remove('filled-button');
        label4.classList.add('filled-button');
        break;
    }
})

class Navigator {
    slideImages(allNavBtns, nav1Btn, nav2Btn, nav3Btn, nav4Btn) {
        allNavBtns.forEach( (button) => {
            button.addEventListener('click', (e) => {
                
                const element = e.target.id;
                switch(element) {
                    case 'label1':
                    nav1Btn.classList.add('filled-button');
                    nav2Btn.classList.remove('filled-button');
                    nav3Btn.classList.remove('filled-button');
                    nav4Btn.classList.remove('filled-button');
                    arrowLeft.classList.add('hidden');
                    arrowRight.classList.remove('hidden');
                    break;

                    case 'label2':
                    nav2Btn.classList.add('filled-button');
                    nav1Btn.classList.remove('filled-button');
                    nav3Btn.classList.remove('filled-button');
                    nav4Btn.classList.remove('filled-button');
                    arrowRight.classList.remove('hidden');
                    arrowLeft.classList.remove('hidden');
                    break;

                    case 'label3':
                    nav3Btn.classList.add('filled-button');
                    nav1Btn.classList.remove('filled-button');
                    nav2Btn.classList.remove('filled-button');
                    nav4Btn.classList.remove('filled-button');
                    arrowRight.classList.remove('hidden');
                    arrowLeft.classList.remove('hidden');
                    break;

                    case 'label4':
                    nav4Btn.classList.add('filled-button');
                    nav1Btn.classList.remove('filled-button');
                    nav2Btn.classList.remove('filled-button');
                    nav3Btn.classList.remove('filled-button');
                    arrowRight.classList.add('hidden');
                    arrowLeft.classList.remove('hidden');
                    break;
                }
            })
        })
    }
}

const switchImage = new Navigator;
switchImage.slideImages(navigators, label1,  label2,  label3,  label4);


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

