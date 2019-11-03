import config from './config.json'
import newsService from './services/newsService'
import articles from './components/articles'
import './style.css'

const _newsService = new newsService(config.newsApiKey)

var container = document.getElementById("container")

_newsService.getNews()
    .then(news=> container.innerHTML = articles(news.articles))