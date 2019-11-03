import '@babel/polyfill'

export default class newsService{
    constructor(newsApiKey){
        this.newsApiKey = newsApiKey
    }

    async getNews(){

        try{
            let response = await fetch(`https://newsapi.org/v1/articles?source=bbc-news&apiKey=${this.newsApiKey}`)
            if(response.ok)
            {
                return await response.json()
            }else{
                throw new Error("News loading failed")
            }

        }catch(error){
            console.error(err); 
        }
        
    }
}