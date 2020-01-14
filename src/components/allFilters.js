import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SecondaryFilter from './SecondaryFilter'

const useStyles = makeStyles(theme => ({
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const AllFilters = (props) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const screenWidth = window.innerWidth > 960 ? true : false;

    return (
        <div className='allfilters'>
            <div className='icon_container'>
                <p>Toggle Filters</p>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon fontSize='large' />
                </IconButton>
            </div>

            <Collapse in={screenWidth} timeout="auto" unmountOnExit>
                <ul className='allfilters_list'>
                    <SecondaryFilter close={close} key={props.index} tags={props.tags} filterList={props.filterList} />
                </ul>
            </Collapse>
        </div>
    )
}

export default AllFilters;