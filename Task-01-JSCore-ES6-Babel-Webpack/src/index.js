import articles from './articles'
import './style.css'

fetch("https://newsapi.org/v1/articles?source=bbc-news&apiKey=2ed7982b8edb4e8c8f81f08dfb8889fe")
.then(response => response.json())
.then(data => {
    var container = document.getElementById("container")
    container.innerHTML = articles(data.articles)
})