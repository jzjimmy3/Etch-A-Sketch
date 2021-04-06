const container = document.querySelector('.container');

for (let i = 0; i < 4; i++) {
    const div = document.createElement('div');
    div.classList.add('div')
    div.textContent = 'Nothing';
    container.appendChild(div);
}


