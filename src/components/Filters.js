import React from 'react'
import AllFilters from './allFilters';


const Filters = (props) => {
    return (
        <div className='mainfilters'>
            <ul className='mainfilters_list'>
                {
                    props.filters.map((filter, index) => (
                        <li className='mainfilters_list_item' key={index}>
                            <button className='mainfilters_list_item_btn button' key={filter} value={filter} onClick={props.filterList}>{filter}</button>
                        </li>
                    ))
                }
            </ul>
            <AllFilters tags={props.tags} filterList={props.filterList} />
        </div>
    )
}

export default Filters;