// do it for anything that you want to automate.

//  two main steps
// step 1 query step. That is where you go and you find what the class name is you're looking for, and then you query it and you store that value in a variable.
// step 2 perform the process. In this case, the process was simply clicking on the button. 

// hashtags follow
let hashtagBtns = document.querySelectorAll('.mn-discovery-hashtag-card__action-btn')
hashtagBtns.forEach(btn => btn.click())

// unfollow hashtags
const followingBtns = document.querySelectorAll('.follows-recommendation-card__follow-btn')
followingBtns.forEach(followbtn => followbtn.click())

forEach


