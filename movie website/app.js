const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i)=>{
    const itemNumber = movieLists[i].querySelectorAll('img').length;
    clickCounter = 0;
    arrow.addEventListener('click', () => {
        const ratio = Math.floor(window.innerWidth / 260)
        clickCounter ++;
        if(itemNumber -(6 + clickCounter) + (5- ratio) >= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get('transform')[0].x.value
            -300}px)`;
        } else{
            movieLists[i].style.transform ='translateX(0)';
            clickCounter = 0;
        }
    });

    console.log(Math.floor(window.innerWidth / 240));
});


// theme changer js code
const toggleBall = document.querySelector('.toggle-ball');
const allItems = document.querySelectorAll('.container, .movie-list-title, .navigationBar-container, .sideBar, .left-bar-icon, .toggle ')

toggleBall.addEventListener('click', () => {
    allItems.forEach(item=>{
        item.classList.toggle('active')
    });
    toggleBall.classList.toggle('active')
});