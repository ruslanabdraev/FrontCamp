const articleDecorator = (article=f=>f)=>{
    return (item) => `<div class="article">${article(item)}</div>`
}

export default articleDecorator