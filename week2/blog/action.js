// Creates variable with id of post title
var postTitle = document.getElementById('post-title')
var click = false

// Adds an action when the post's title is click
postTitle.addEventListener('click', handleClick)

function handleClick() {
  var blogPost = document.querySelector('.blog-post') // Creates a variables holding the post

  // If click is false (meaning it was not clicked before)
  if (!click) {
    blogPost.style.display = "none" // will hide the post
    click = true // click will be set to true

  // If click is true (meaning it was clicked before)
  } else {
    blogPost.style.display = "block" // will show the post
    click = false // will reset the click back to false
  }
}

/*********************************************/
/***************** TODO **********************/
/*** ADD MORE CUSTOM BEHAVIOUR OF YOUR OWN ***/
/*** EXAMPLE: Display the LENTH of the post **/
/*********************************************/
