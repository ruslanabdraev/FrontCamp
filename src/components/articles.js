import article from './article' 
import articleDecorator from "./articleDecorator"

const decoratedArticle = articleDecorator(article)

const articles = (items) =>{
    return items.map(item => decoratedArticle(item)).join("") 
}

export default articles