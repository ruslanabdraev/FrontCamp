export default class newsSerive{
    constructor(newsApiKey){
        this.newsApiKey = newsApiKey
    }

    getNews(){
        return fetch(`https://newsapi.org/v1/articles?source=bbc-news&apiKey=${this.newsApiKey}`)
    }
}