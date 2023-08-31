import axios from "axios";
import {reactive} from "vue";

export const store = reactive({
    inputText: "",
    movResult: [],
    tvResult: [],
})


export function searchMov(){
    let url= "https://api.themoviedb.org/3/search/multi";

    axios.get(url, {
        params: {
            api_key: '7df8a69cc24027278465c7a1322a8642',
            query: store.inputText
        }
    }).then((response)=>{
        store.movResult = response.data.results
        if(store.movResult.length === 0 ){
            alert("Non esisa il film/serie che hai cercato")
            startFill()
        }
        console.log(store.movResult)
    });
}


export function startFill(){
    let url= "https://api.themoviedb.org/3/discover/movie";

    axios.get(url, {
        params: {
            api_key: '7df8a69cc24027278465c7a1322a8642',
        }
    }).then((response)=>{
        store.movResult = response.data.results
        console.log(store.movResult)
    });
}

