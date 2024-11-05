import {createContext, useState} from "react";
import run from "../Config/gemini";
export const Context = createContext();

const ContextProvider = (props) => {

const [input , setInput] = useState("");
const [recentPrompt , setRecentPrompt] = useState("");
const [prevPrompt , setPrevPropmt] = useState([]);
const [showResult , setShowResult] = useState(false);
const [loading , setLoading] = useState(false);
const [resultData , setResultData] =useState("");

const delayPara = (index , nextWord) => {
    setTimeout(() => {
        setResultData(prev => prev+nextWord);
    }, 74*index);
}

const newChat = ()=> {
    setLoading(false);
    setShowResult(false);

}
const OnSent = async(prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt !== undefined){
        response = await run(prompt);
        setRecentPrompt(prompt);
    } else {
        setPrevPropmt(prev => [...prev ,input]);
        setRecentPrompt(input);
        response = await run(input);
    }


    let responsArray = response.split("**");
    let newRespons="";
    for(let  i =0; i< responsArray.length; i++){
        if(i === 0 || i%2 !== 1 ){
            newRespons += responsArray[i];
        } else {
            newRespons += "<b>"+responsArray[i] + "</b>";
        }
    } 

    let newRespons2 = newRespons.split("*").join("</br>");
    let newResponsArray = newRespons2.split(" ");

    for(let i =0; i< newResponsArray.length; i++){
        const nextWord =newResponsArray[i];
        delayPara(i, nextWord+ " ");
    }
    setLoading(false);
    setInput("");
}

 const ContextValue = {
    prevPrompt,
    setPrevPropmt,
    OnSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
    
 }


    return(
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    );

}

export default ContextProvider;