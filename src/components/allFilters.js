import React, { useState } from 'react';
import { Button, Collapse } from 'reactstrap';

const AllFilters = (props) => {
    const [collapse, setCollapse] = useState(false);
    const toggle = () => setCollapse(!collapse);
    const close = () => setCollapse(false);

    return (
        <div className='allfilters'>
            <Button className='allfilters_toggle' onClick={toggle} >
                Show All Filters
            </Button>
            <Collapse isOpen={collapse}>
                    <ul className='allfilters_list'>
                        {
                            props.tags.map((tags, index) => (
                                <li className='allfilters_list_item' key={index} onClick={close}>
                                    <button className='allfilters_list_item_btn btn' key={tags} value={tags} onClick={props.filterList}>{tags}</button>
                                </li>
                            ))
                        }
                    </ul>
            </Collapse>
        </div>
    )
}

export default AllFilters;