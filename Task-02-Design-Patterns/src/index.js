import config from './config.json'
import newsService from './services/newsService'
import articles from './components/articles'
import './style.css'
import { newsServiceFactory } from './services/newsServiceFactory.js'

const _newsService = newsServiceFactory(config.newsApiKey)

var container = document.getElementById("container")

_newsService.getNews()
    .then(news=> container.innerHTML = articles(news.articles))