import article from './article' 
import articleDecorator from "./articleDecorator"

const articles = (items) =>{
    return items.map(item => articleDecorator(article(item))).join("") 
}

export default articles