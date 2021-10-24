let desk = document.getElementById('desk')
const size = 4

desk.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`

function reverse(row, col) {
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
        alert('you win!')
    }
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (Math.floor(Math.random() * 2) === 1) {
            desk.innerHTML += `<div class="block vertical" data-i="${i}" data-j="${j}"></div>`
        } else {
            desk.innerHTML += `<div class="block horizontal" data-i="${i}" data-j="${j}"></div>`
        }
    }
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        document.querySelector('[data-i="' + i + '"][data-j="' + j + '"]').addEventListener('click', () => {
            console.log(i, j)
            reverse(i, j)
        })
    }
}
