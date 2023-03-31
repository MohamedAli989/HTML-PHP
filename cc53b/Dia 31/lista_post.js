const URL = "https://jsonplaceholder.typicode.com/posts"
const divPosts = document.getElementById('Posts');



fetch(URL)
    .then( response => response.text())
    .then( response => {
        const potsArray = JSON.parse(response);
    potsArray.forEach( (e)=> {
        const divTit = document.createElement('div');
        const divDesc = document.createElement('div');
        const divPost = document.createElement('div');

divTit.innerText = e.title;
divDesc.innerText = e.body;

divPost.appendChild(divTit);
divPost.appendChild(divDesc);

divPosts.appendChild(divPost);
    });
          
} );