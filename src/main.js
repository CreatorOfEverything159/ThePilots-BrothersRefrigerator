let field = document.getElementById('field')
const size = 4

field.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`

const reverse = (row, col) => {
    for (let i = 0; i < size; i++) {
        let cell = document.querySelector('[data-i="' + i + '"][data-j="' + col + '"]')
        if (cell.classList.contains('vertical')) {
            cell.classList.remove('vertical')
            cell.classList.add('horizontal')
        } else if (cell.classList.contains('horizontal')) {
            cell.classList.remove('horizontal')
            cell.classList.add('vertical')
        }
        cell = document.querySelector('[data-i="' + row + '"][data-j="' + i + '"]')
        if (cell.classList.contains('vertical')) {
            cell.classList.remove('vertical')
            cell.classList.add('horizontal')
        } else if (cell.classList.contains('horizontal')) {
            cell.classList.remove('horizontal')
            cell.classList.add('vertical')
        }
    }
    let clickCell = document.querySelector('[data-i="' + row + '"][data-j="' + col + '"]')
    if (clickCell.classList.contains('vertical')) {
        clickCell.classList.remove('vertical')
        clickCell.classList.add('horizontal')
    } else if (clickCell.classList.contains('horizontal')) {
        clickCell.classList.remove('horizontal')
        clickCell.classList.add('vertical')
    }

    if (document.getElementsByClassName('vertical').length === 0
    || document.getElementsByClassName('vertical').length === size ** 2) {
        let mass = document.getElementsByClassName('propeller')
        for (let i = 0; i < 16; i++) { mass[i].classList.add('circle') }
    }
}

const clearField = () => {
    field.innerHTML = ''
}

const generationField = () => {
    clearField()
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (Math.floor(Math.random() * 2) === 1) {
                field.innerHTML += `<div class="propeller vertical" data-i="${i}" data-j="${j}"></div>`
            } else {
                field.innerHTML += `<div class="propeller horizontal" data-i="${i}" data-j="${j}"></div>`
            }
        }
    }
}

const addListeners = () => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            document.querySelector('[data-i="' + i + '"][data-j="' + j + '"]').addEventListener('click', () => { reverse(i, j) })
        }
    }
}

generationField()
addListeners()
