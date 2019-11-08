const article = (item) =>{
    return `<div>
        <h2>${item.title}</h2>
    </div>
    <img src=${item.urlToImage} alt="${item.title}"/>
    <div>
        <a href="${item.url}" target="_blank">${item.description}</a>
        <p>${(new Date(item.publishedAt)).toDateString()}</p>
        <p>${item.author}</p>
    </div>`
}

export default article