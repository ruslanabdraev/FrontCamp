import newsObserver from '../services/newsObserver'

class newsObserverFactory{
    create(){
        return new newsObserver()
    }
}

export default newsObserverFactory