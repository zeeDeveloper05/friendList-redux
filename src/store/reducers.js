import { createReducer } from "@reduxjs/toolkit";
import * as actions from './actions'

const initialState = {
    friendList : [
        {name : 'Amit Patel',fav:1},
        {name : 'Bijal Makwana',fav:0},
        {name : 'Neha Pandey',fav:0},
        {name : 'Ram Lodhi',fav:0},
        {name : 'Javed Ali',fav:0},
        {name : 'Rohit Kumar',fav:1},
        {name : 'Jasmine Dsuza',fav:1},
        {name : 'Rahul Kumar',fav:0},
        {name : 'Javed Ali',fav:0},
        {name : 'Rohit Kumar',fav:1},
        {name : 'Palak Singh',fav:1},
        {name : 'Sonum singh',fav:0},
        {name : 'Govind Gawli',fav:0},
        {name : 'Rohit Kumar',fav:1},
        {name : 'Saif Ali Khan',fav:1}
    ]
}
const reducer = createReducer(initialState,{
    [actions.DELETE.type] : (state,action) =>{
        state.friendList = state.friendList.filter(
            (item,index) =>{
                return item.name !== action.payload
            }
        )
    },
    [actions.SORT.type] : (state,action) =>{
        console.log(action);
        state.friendList = state.friendList.sort(
            (a,b)=>{

                if(action.payload){
                    if(a.fav > b.fav) { return 1; }
                    if(a.fav < b.fav) { return -1; }
                    return 0;
                }
                else{
                    if(a.fav > b.fav) { return -1; }
                    if(a.fav < b.fav) { return 1; }
                    return 0;
                }


            }
        )
    },
    [actions.ADD.type] : (state,action)=>{

        let namePresent  = false

        state.friendList.map(
            (item)=>{
                if((action.payload.name).toLowerCase() === (item.name).toLowerCase()){
                    alert('Name Already Present')
                    namePresent = true;
                }
            }
        )
        if(!namePresent){
                    let updateArr = [...state.friendList]
                    updateArr.unshift(action.payload)
                    state.friendList = updateArr
        }
    },
    [actions.FAVORITE.type] : (state,action) => {
        console.log(action.payload);
        state.friendList.map(
            (item,index) => {
                if(item.name === action.payload.name){
                    console.log(index);
                    state.friendList[index].fav = !state.friendList[index].fav
                }
            }
        )
    }
})

export default reducer