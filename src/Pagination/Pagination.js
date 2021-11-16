import React, { useEffect, useState } from 'react';

const Pagination = (props) => {

    const [pageCount, setpageCount] = useState(4);
    const [pageSelect, setpageSelect] = useState(1);
    const [totalPage, settotalPage] = useState(0);
    const [paginationCount, setpaginationCount] = useState([]);

    useEffect(() => {
        settotalPage(Math.ceil(props.data.length / 4))
    }, [props.data])

    let pageArr = []
    for(let i = 1; i <= totalPage ;i++ ){
        pageArr.push(i)
    }

    const nextPageHandler = () =>{
        if(totalPage > pageSelect){
            setpageSelect(pageSelect + 1)
        }
    }

    const prevPageHandler = () =>{
        setpageSelect(pageSelect - 1)
    }

    props.paginationData(
            {
                pageCount : pageCount,
                pageSelect:pageSelect,
                totalPage:totalPage,pageArr:pageArr,
            }
        )

    return (
        <React.Fragment>
                <nav className="d-flex justify-content-center mt-3">
                    <ul className="pagination">
                        <li className={"page-item"+" "+ (1 === pageSelect ? 'disabled' : '') }>
                            <a 
                            style={{
                                cursor:'pointer'
                            }}
                            className="page-link"
                            onClick={ prevPageHandler }
                            >Previous</a>
                        </li>
                        {
                            pageArr.map(
                                (page,index) =>{
                                    return(
                                        <li key={ index } className={"page-item" +" "+ (index + 1 === pageSelect ? 'active' : '')}>
                                            <a  className="page-link" style={{
                                                cursor:'pointer'
                                            }} onClick = { () => {setpageSelect(page)} } >{ page }</a>
                                        </li>
                                    )
                                }
                            )
                        }
                        <li className={"page-item"+" "+ (totalPage === pageSelect ? 'disabled' : '') }>
                            <a 
                            style={{
                                cursor:'pointer'
                            }}
                            className="page-link"
                            onClick={ nextPageHandler }
                            >Next</a>
                        </li>
                    </ul>
                </nav>
        </React.Fragment>
    );
}

export default Pagination;
