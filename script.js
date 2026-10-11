let springButton = document.querySelector('.spring')
let summerButton = document.querySelector('.summer')
let autumnButton = document.querySelector('.autumn')
let winterButton = document.querySelector('.winter')

let humbergerMenuBtn = document.querySelector('.humburger')
let line1 = document.querySelector('.l1')
let line2 = document.querySelector('.l2')
let line3 = document.querySelector('.l3')

let navBurger = document.querySelector('.nav_burger')

let isClickMenu = false

let portfolioContainer = document.querySelector('.portfolio_images')
let images = document.querySelectorAll('.portfolio_image')

let modalPortfolio = document.querySelector('.modal_window_portfolio')

springButton.addEventListener('click', () => {
    changeImage(springButton.textContent.toLowerCase())
    resetStyles()

    selectButton(springButton)
    addImageToModal(springButton.textContent.toLowerCase())
})

summerButton.addEventListener('click', () => {
    changeImage(summerButton.textContent.toLowerCase())
    resetStyles()

    selectButton(summerButton)

    addImageToModal(summerButton.textContent.toLowerCase())
})

autumnButton.addEventListener('click', () => {
    changeImage(autumnButton.textContent.toLowerCase())
    resetStyles()

    selectButton(autumnButton)

    addImageToModal(autumnButton.textContent.toLowerCase())
})

winterButton.addEventListener('click', () => {
    changeImage(winterButton.textContent.toLowerCase())
    resetStyles()
    selectButton(winterButton)

    addImageToModal(winterButton.textContent.toLowerCase())
})

modalPortfolio.addEventListener('click', (event) => {
    // modalPortfolio.innerHTML = ''
    if (event.target === modalPortfolio) {
        modalPortfolio.close();
    }
})

function addImageToModal(buttonName) {
    modalPortfolio.innerHTML = ''
    modalPortfolio.style.visibility = 'visible'
    modalPortfolio.showModal()
    modalPortfolio.style.zIndex = '4'

    for (let i = 1; i < 7; i++) {
        const img = document.createElement('img');
        img.src = './img/porfolio/' + buttonName + '/' + i + '.jpg'
        img.alt = 'Описание изображения';
        img.style.width = '150px'
        img.style.height = '186.6px'
        modalPortfolio.appendChild(img)
    }
}


function changeImage(buttonName) {
    let index = 1
    for (let image of images) {
        image.src = './img/porfolio/' + buttonName + '/' + index + '.jpg'

        index++
    }
}

function resetStyles() {
    springButton.style.color = '#bdae82'
    springButton.style.backgroundColor = 'black'

    summerButton.style.color = '#bdae82'
    summerButton.style.backgroundColor = 'black'

    autumnButton.style.color = '#bdae82'
    autumnButton.style.backgroundColor = 'black'

    winterButton.style.color = '#bdae82'
    winterButton.style.backgroundColor = 'black'
}

function selectButton(button) {
    button.style.color = 'black'
    button.style.backgroundColor = '#bdae82'
}

humbergerMenuBtn.addEventListener('click', () => {
    isClickMenu = !isClickMenu
    if (isClickMenu) {
        navBurger.style.visibility = 'visible'
        line1.classList.add('line_1');
        line2.classList.add('line_2');
        line3.classList.add('line_3');
        navBurger.classList.add('navigation_show')

        line1.classList.remove('line_1_back');
        line2.classList.remove('line_2_back');
        line3.classList.remove('line_3_back');
        navBurger.classList.remove('navigation_hide')
    } else {
        delectedBurger()
    }
})

navBurger.addEventListener('click', () => {
    delectedBurger()
})

document.addEventListener('click', (e) => {
    const target = e.target;

    // Проверяем, что клик не был по меню или по кнопке
    if (target == humbergerMenuBtn || target == navBurger) {
        return
    } else {
        isClickMenu = false
        delectedBurger()
    }
});

function delectedBurger() {
    line1.classList.remove('line_1');
    line2.classList.remove('line_2');
    line3.classList.remove('line_3');
    navBurger.classList.remove('navigation_show')

    line1.classList.add('line_1_back');
    line2.classList.add('line_2_back');
    line3.classList.add('line_3_back');
    navBurger.classList.add('navigation_hide')
}

window.addEventListener('resize', () => {
    // Получаем актуальную ширину и высоту видимой области
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width > 768) {
        isClickMenu = false
        delectedBurger()
    }
});