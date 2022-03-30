// const BASE_URL = 'https://zenquotes.io/api/quotes'


// fetch zen quotes api

// fetch(BASE_URL)
// .then(resp => resp.json())
// .then(data => {
//     console.log(data)
// })


// Create a function to render quotes to DOM and append



// Add event listeners comments,
// Click like button
// submit a comment
// change drop down menu





// SUBMIT A COMMENT:
const commentForm = document.querySelector('#comment-form')
const commentList = document.querySelector('#comment-list')

commentForm.addEventListener('submit', newComment)


function newComment(e, comments) {
    e.preventDefault();

    let li = document.createElement('li')
    li.textContent = e.target.addComment.value

    commentList.append(li)
}



// console.log('test')