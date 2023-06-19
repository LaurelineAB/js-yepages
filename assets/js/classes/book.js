class Book 
{
    #title;
    #author;
    #category;
    #resume;
    #cover;
    
    constructor (title, author, category, resume, cover)
    {
        this.#title = title;
        this.#author = author;
        this.#category = category;
        this.#resume = resume;
        this.#cover = cover;
    }
    
    //GETTERS
    get title()
    {
        return this.#title;
    }
    
    get author()
    {
        return this.#author;
    }
    
    get category()
    {
        return this.#category;
    }
    
    get resume()
    {
        return this.#resume;
    }
    
    get cover()
    {
        return this.#cover;
    }
    
    //SETTERS
    set title (newTitle)
    {
        this.#title = newTitle;
    }
    
    set author (newAuthor)
    {
        this.#author = newAuthor;
    }
    
    set category (newCat)
    {
        this.#category = newCat;
    }
    
    set resume (newResume)
    {
        this.#resume = newResume;
    }
    
    set cover (newCover)
    {
        this.#cover = newCover;
    }
}


export {Book};