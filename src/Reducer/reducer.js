import { combineReducers } from "redux";
const initialState={
    todo:null
}

const dataReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_DATA':return{
            ...state,todo:action.payload
        }
        case 'DELETE_DATA':return initialState;
        default:return state;
    }
}
 const reducer=combineReducers({
    data:dataReducer
 })
export default reducer;