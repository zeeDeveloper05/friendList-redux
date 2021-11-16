import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faSrarSolid, faTrash, } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons'
import Pagination from '../Pagination/Pagination';




const FriendList = (props) => {
    const [ListData, setListData] = useState([]);
    const [pageCount, setpageCount] = useState(4);
    const [pageSelect, setpageSelect] = useState(1);

    const [sortVal, setSortVal] = useState(false)

    useEffect(() => {
        setListData(props.data)
    }, [props.data]);




    let startPage = pageCount*(pageSelect-1)
    let endPage = pageCount*(pageSelect)

    
    let pageArr = []
    for(let i = 1; i <= Math.ceil(props.data.length / 4) ;i++ ){
        pageArr.push(i)
    }


    const paginationDataHandler = (data) => {
            setpageCount(data.pageCount)
            setpageSelect(data.pageSelect)
    }

    const favBtnClickHandler = () =>{
        setSortVal(!sortVal)
        props.favBtn(sortVal)
    }


    const onDeleteHandler = (name) => {
        // console.log(name);
        props.deleteBtn(name)
    }

    const onAddToFavHandler = (data) =>{
        props.addToFav(data)
    }


    return (

        <React.Fragment>
            <div className="text-right mb-3 d-flex justify-content-between align-items-center">
                <p className='m-0'>See The List Of { !sortVal ? 'Favorites' : 'Least Favorite' } Friends</p>
                <button
                onClick={ favBtnClickHandler } 
                className="btn btn-outline-success"
                >{ !sortVal ? 'Favorites' : 'Least Favorite' }</button>
            </div>

            <div className="list-group" style={{
                minHeight:'252px'
            }}>
            {
                ListData.length ?
                ListData.slice(startPage,endPage).map(
                    (listItem,index) => {
                        return (
                            <div key={ index } className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="name-block">{ listItem.name }</div>
                                <div className="action-block">
                                    <button
                                    onClick={ () => onAddToFavHandler(listItem) } 
                                    className={'btn mr-2 btn-outline-success' }>
                                        { listItem.fav 
                                        ? <FontAwesomeIcon icon={ faSrarSolid }></FontAwesomeIcon> 
                                        : <FontAwesomeIcon icon={ faStarReg }></FontAwesomeIcon>}
                                    </button>
                                    <button 
                                    onClick={ () => onDeleteHandler(listItem.name) }
                                    className="btn btn-outline-danger">
                                    <FontAwesomeIcon icon={ faTrash } />
                                    </button>
                                </div>
                            </div>
                        )
                    }
                )
                : <div className="alert alert-danger">No Data Found</div>
            }
            </div>
            {
                pageArr.length > 1 
                ?
                <Pagination 
                data={ ListData } 
                paginationData={ (data) => paginationDataHandler(data) }
                ></Pagination>
                : ''

            }
        </React.Fragment>
    );
}

// const mapStateToProps = (state) =>{
//     return
// }

// const mapDispatchToProps = (dispatch) =>{
//     return
// }

export default FriendList;
// export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
