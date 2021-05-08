const work = document.getElementsByClassName('work');
const workCover = document.getElementsByClassName('work-cover');
const workName = document.getElementsByClassName('work-name');

for (let i = 0; i < work.length; i++) {
    workCover[i].addEventListener('click', () => {
        // work[i].classList.add('view');
    });
}