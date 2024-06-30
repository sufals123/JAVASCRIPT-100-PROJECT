// Select the container where the post list will be displayed
const postListContainer = document.querySelector(".post-list-container");

// API URL for fetching posts
const url = "https://jsonplaceholder.typicode.com/posts";

// Function to fetch data from the API
const getData = async () => {
    
        const response = await fetch(url)
        const data = await response.json();

        // console.log(data);
        // console.log(data[0].title);



        

        data.forEach(post=>{
        // console.log(post.title);
           const createDivElement = document.createElement("div");
           createDivElement.className = "post-list-item"; 
           createDivElement.innerHTML = (post.title)
           postListContainer.appendChild(createDivElement);

           const createButtonElement = document.createElement("button");
           createButtonElement.innerHTML = "SHOW";
           createButtonElement.className = "post-list-item-button";
           postListContainer.appendChild(createButtonElement);

           const createPElement = document.createElement("p");
           createPElement.className = "post-list-item-text";
           createPElement.innerHTML = (post.body)
           postListContainer.appendChild(createPElement);

           createPElement.hidden = true;

           createButtonElement.addEventListener("click", ()=>{
            createPElement.hidden = false;
            createButtonElement.hidden = true;
           })
           
           
           
        })


        // createDivElement.innerHTML = (data[0].title)
        // postListContainer.appendChild(createDivElement);

}

window.addEventListener("load",getData);
