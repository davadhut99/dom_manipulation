
// Implement the code as per the youtuber
const posts = [
    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime() }
];

let intervalID = 0;


function getPost() {
    clearInterval(intervalID);
    intervalID = setInterval(() => {
        let output = '';
        for (i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title}- Last Updated : ${(new Date().getTime() - posts[i].createdAt) / 1000}</li>`;
        }
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        callback();
    }, 2000);
}


function create4thPost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() })
        callback()
    }, 6000);
}

var timer;
var count = 0;
function lastEditedSecondsAgo() {
    count = 0;
    clearInterval(timer);
    timer = setInterval(() => {
        count++;
        console.log(count);
    }, 5000);
}

//getPosts();
createPost({ title: 'Post Three', body: 'This is Post Three' }, getPost);


create4thPost({ title: 'Post Four', body: 'This is Post Four' }, getPost);



// Make a new function call create4thPost for adding one more new post "Post Four".
//create4thPost should take createPost as a callback function. Once the post is created all the 4 posts should be displayed too.


// Lets also record when the post was created. So now onwards whenever. a new post is created  add a new key called createdAt in each post.
//CreatedAt should have the timestamp of  when the post was created. So now your post  object would look like { title, body, createdAt}


//  On the screen show the user how long back each of the post was edited in seconds ago.
//Just add "{ current timestamp  - postcreated At timestamp }"


//on each of the post. It should look like the following
// Post 1  created 8 seconds ago
// Post 2 created 7 seconds ago
// Post 3 crated  2 seconds