import config from './config.json'
import newsService from './services/newsService'
import articles from './components/articles'
import './style.css'

const _newsService = new newsService(config.newsApiKey)

_newsService.getNews()
    .then(response => response.json())
    .then(data => {
        var container = document.getElementById("container")
        container.innerHTML = articles(data.articles)
    })