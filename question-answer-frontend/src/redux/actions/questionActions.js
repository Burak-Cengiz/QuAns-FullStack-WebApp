import * as actionTypes from "./actionTypes"

const apiUrl = process.env.REACT_APP_API_URL;

export function getQuestionsSuccess(questions){
    return{type:actionTypes.GET_QUESTİONS_SUCCESS,payload:questions}
}

export function getQuestions(page){
    return function(dispatch){
        let url = apiUrl+"/api/questions/";
        if(page){
            url+="?page="+page
        }

        return fetch(url)
        .then((response)=>response.json())
        .then((result)=>dispatch(getQuestionsSuccess(result)))
    }
}