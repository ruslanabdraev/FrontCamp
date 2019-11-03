import config from './config.json'
import newsServiceFactory from './factories/newsServiceFactory'
import newsObserverFactory  from './factories/newsObserverFactory'
import articles from './components/articles'
import './style.css'

var container = document.getElementById("container")

const _newsServiceFactory = new newsServiceFactory()
const _newsObserverFactory = new newsObserverFactory()

const _newsService = _newsServiceFactory.create()
const _newsObserver = _newsObserverFactory.create()

const callback = (data)=>{
    container.innerHTML = articles(data.articles)
}

_newsObserver.subscribe(callback)
_newsObserver.loadNews(_newsService.getNews())
_newsObserver.unsubscribe(callback)