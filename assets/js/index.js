import {Library} from "./classes/library.js";
import {books} from "./data/data-books.js";
    
window.addEventListener("DOMContentLoaded", function()
{
    function displayBooks () 
    {
        let library = new Library;
        library.load(books);
        console.log(library.shelf);

        let librarySection = document.querySelector(".library");
        for (let i=0; i<5; i++)
        {
            let article = document.createElement("article");
            let figure = document.createElement("figure");
            let h2 = document.createElement("h2");
            let cat = document.createElement("p");
            cat.classList.add("category");
            let author = document.createElement("p");
            author.classList.add("author");
            let discoverBtn = document.createElement("button");
            discoverBtn.classList.add("discover");
            
            figure.innerHTML = `<img src="${library.shelf[i].cover}" alt="Couverture ${library.shelf[i].title}">`;
            h2.innerHTML = `${library.shelf[i].title}`;
            cat.innerHTML = `${library.shelf[i].category}`;
            author.innerHTML = `${library.shelf[i].author}`;
            discoverBtn.innerHTML = "Découvrir le livre"
            
            librarySection.appendChild(article);
            article.appendChild(figure);
            article.appendChild(h2);
            article.appendChild(cat);
            article.appendChild(author);
            article.appendChild(discoverBtn);
        }
    }
    
    displayBooks();
})