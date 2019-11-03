import config from './config.json'
import newsServiceFactory from './factories/newsServiceFactory'
import articles from './components/articles'
import './style.css'

const _newsServiceFactory = new newsServiceFactory()

const _newsService = _newsServiceFactory.create()

var container = document.getElementById("container")

_newsService.getNews()
    .then(news=> container.innerHTML = articles(news.articles))