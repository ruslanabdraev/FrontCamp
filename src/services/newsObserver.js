class newsObserver{
    constructor(){
        this.observers = []
    }

    loadNews(promise)
    {
        promise.then(
            data => this.notifyAll(data)
        )
    }

    subscribe(observer){
        this.observers.push(observer)
    }

    unsubscribe(observer){
        let index = this.observers.indexOf(observer)
        if(index > -1){
            this.observers.slice(index, 1)
        }
    }

    notifyAll(data){
        for (let o of this.observers) {
            o(data)
        }
    }
}

export default newsObserver