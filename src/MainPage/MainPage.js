import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import FriendList from '../FriendList/FriendList';
import Search from '../Search/Search';

import * as actions from './../store/actions'

const MainPage = (props) => {


    const [list,setlist] = useState([])
    const [filterList,setfilterList] = useState([])

    useEffect(() => {
        setlist(props.mainData.friendList)
        setfilterList(props.mainData.friendList)
    }, [props.mainData.friendList])

    const searchValHandler = (e) => {
        var updatedList = list;
        updatedList = updatedList.filter(function (item) {
            return item.name.toLowerCase().search(e.toLowerCase()) !== -1;
        });
        setfilterList(updatedList)
    }

    const onDeleteHandler = (name) =>{
        props.onDelete(name)
    }

    const onFavHandler = (e) =>{
        console.log(e);
        props.onSort(e)
    }

    const onAddHandler = (data) =>{
        props.onAdd(data)
    }

    const onAddToFavHandler = (data) =>{
        // console.log(name);
        props.onFav(data)
    }

    return (
        <React.Fragment>
            <h2 className="text-center">Friend List</h2>
            <hr/>
            <Search 
            onEnetr={ onAddHandler } 
            searchVal={(e) => searchValHandler(e)}
            ></Search>
            <hr/>
            <FriendList
            addToFav = { onAddToFavHandler } 
            favBtn={ (e) => onFavHandler(e) } 
            deleteBtn={ onDeleteHandler } 
            data={ filterList } 
            ></FriendList>
        </React.Fragment>
    );
}


const mapStateToProps = (state) => {
    return {mainData: state.mainReducer}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete : (name) => { dispatch(actions.DELETE(name)) },
        onSort : (e) => { dispatch(actions.SORT(e)) },
        onAdd : (data)=>{ dispatch(actions.ADD(data)) },
        onFav : (data) => { dispatch(actions.FAVORITE(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
