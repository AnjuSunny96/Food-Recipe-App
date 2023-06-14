import React from 'react'

function Pagination(props) {

 function showNextPageDishHandler(event){
    let Current_Page=event.target.id;
    props.setCurrentPage(Current_Page)
 }

let numOfPages=[];
for(let i=1; i<=Math.ceil(props.filteredList.length/props.itemsPerPage); i++){
    numOfPages.push(i);
}
let Pages=numOfPages.map((pageNumber)=>{
    return(
        <li className={ pageNumber == props.currentpage ? "active": null } id={pageNumber} onClick={showNextPageDishHandler}>{pageNumber}</li>
    )
})

  return (
    <section>
    <ul className='pagination  flex'>
        {Pages}
    </ul>
    </section>
  )
}

export default Pagination