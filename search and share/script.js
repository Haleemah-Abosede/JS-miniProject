function searchMovies() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase()

    let x = document.getElementsByClassName('movies')

    for (i = 0; i < x.length; i++){
        if (!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none";
        }

        else {
            x[i].style.display = "list-items";
        }
    }
}


// comment: it only works once upon reload, you have to reload the site if you are searching more than once.
// you also can clear search and re enter key words as it will not work





const showContainers = document.querySelectorAll(".show-replies");

showContainers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let parentContainer = e.target.closest(".comment");
    let _id = parentContainer.id;
    if (_id) {
      let childrenContainer = parentContainer.querySelectorAll(
        `[dataset=${_id}]`
      );
      childrenContainer.forEach((child) => child.classList.toggle("opened"));
    }
  })
);




// like button


const likeBtn = document.querySelector(".like-btn");
const likeIcon = document.querySelector("#like");
const count = document.querySelector("#count");


// button clicked
let clicked = false

likeBtn.addEventListener("click", () =>{
    console.log("it works")

    if(!clicked) {
        clicked = true;
        likeIcon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
        count.textContent++;
    }
    else{
        clicked = false
        likeIcon.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`
        count.textContent--;
    }
    
})








// viewers count

// let views = document.querySelector("#visits").value
// console.log(views)

// function websiteVisits(response){
//     document.querySelector("#visits").textContent = response.value;

// }

const views =document.getElementById('visits');

updateVisitCount();

function updateVisitCount(){
    fetch('https://api.countapi.xyz/update/codefoxx.com/c63d9a7e-7c1d-429d-8b4a-fd1fc837184a/?amount=2')

    .then(res => res.json())
    .then(res =>{
        views.innerHTML = res.value
    })
}




// share button

const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.google.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});




// comment

// credit:Saloni Mishra
// visit: https://javascript.plainenglish.io/how-to-create-a-comment-section-using-html-and-vanilla-js-aa6b6a53b9cf
// for explanation

// add comment dynamically

window.onload = function setTemplate() {
    document.getElementById('allComments').innerHTML = localStorage.getItem('template');
};

const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});

function addComment(ev) {
    let commentText, wrapDiv;
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    if(hasClass(ev.target.parentElement, 'container')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        commentText = document.getElementById('comment').value;
        document.getElementById('comment').value = '';
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "cornflowerblue";
        wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
        commentContainer.appendChild(wrapDiv);
    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "paleturquoise";
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
    }
    setOnLocalStorage();
}

function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
document.getElementById('allComments').addEventListener('click', function (e) {
    if (hasClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        textArea.style.marginRight = '20px';
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Add';
        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.className='cancelReply';
        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);

    } else if(hasClass(e.target, 'addReply')) {
        addComment(e);
    } else if(hasClass(e.target, 'likeComment')) {
         const likeBtnValue = e.target.innerHTML;
         e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseInt(likeBtnValue) + 1 : 1;
        setOnLocalStorage();
    } else if(hasClass(e.target, 'cancelReply')) {
        e.target.parentElement.innerHTML = '';
        setOnLocalStorage();
    } else if(hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }
});