import newsService from "../services/newsService"
import config from '../config.json'

class newsServiceFactory{
    create(){
        return new newsService(config.newsApiKey)
    }
}

export default newsServiceFactory