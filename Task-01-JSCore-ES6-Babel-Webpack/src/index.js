import articles from './components/articles'
import newsService from './services/newsService'
import './style.css'

const _newsService = new newsService()

_newsService.getNews()
    .then(response => response.json())
    .then(data => {
        var container = document.getElementById("container")
        container.innerHTML = articles(data.articles)
    })