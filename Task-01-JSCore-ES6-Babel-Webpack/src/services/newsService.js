export default class newsSerive{
    getNews(){
        return fetch("https://newsapi.org/v1/articles?source=bbc-news&apiKey=2ed7982b8edb4e8c8f81f08dfb8889fe")
    }
}