import article from './article' 

const articles = (items) =>{
    return items.map(item =>{
        return article(item)
    }).join("") 
}

export default articles