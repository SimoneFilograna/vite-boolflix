import axios from "axios";
import {reactive} from "vue";

export const store = reactive({
    inputText: "",
    movResult: [],
})


export function searchMov(){
    let url= "https://api.themoviedb.org/3/search/movie";

    axios.get(url, {
        params: {
            api_key: '7df8a69cc24027278465c7a1322a8642',
            query: store.inputText
        }
    }).then((response)=>{
        console.log(response.data.results)
    })
}