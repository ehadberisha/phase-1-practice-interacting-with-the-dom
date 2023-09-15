// recreate event listeners 
// 1. timer that adds increments inter by secs
// 2. click events 
// +/- buttons (mouse click: adds/subs total tally count action) *
// like button (*mouse click: logs likes action) 
// pause button (mouse click: disabled action)
// 3. Form
// submit button (submit event: logs comment on form action)

const thePlusButton = document.getElementById('plus')
console.log(thePlusButton)
const theCounter = document.getElementById('counter')

thePlusButton.addEventListener( 'click',(e) => {
    console.log(e.target)
    theCounter.innerText++
})

const theMinusButton = document.getElementById('minus')
console.log(theMinusButton)

theMinusButton.addEventListener('click',(e) => {
    theCounter.innerText--
})

// const theLikeButton = document.getElementById('heart')
// const likesArea = document.querySelector('.likes')

// theLikeButton.addEventListener( 'click', (e) => {
//     likesArea.innerText =`${theCounter.innerText} has been liked ${theLikeButton.innerHTML}times`
// })
// console.log(theLikeButton)

// function submitComment(e){
//     e.preventdefault()
//     theTextFromTheUser = e.target.content.value
//     const div = document.createElement('div')
//     // const usersText = document.getElementById('comment-input')
//     div.innertext = theTextFromTheUser
//     const contentContainer = document.getElementById('list')
//     contentContainer.append('dev')
//     e.target.reset()
// }

// const theForm = document.getElementById('comment-form', submitComment)

const theForm = document.querySelector('form')

function 

