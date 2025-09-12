import React from "react";
import PropTypes from 'prop-types';

export default function CourseListRow({isheader = false,textFirstCell,textSecondCell=null}) {

    if (isheader === true){

        if (textSecondCell === null){
        return (
            <th colSpan="2">{textFirstCell}</th>
        )
        }
        if (textSecondCell != null){
            <th>{textFirstCell}{textSecondCell}</th>
        }

    }
    if (isheader === false){
        return (
            <th>{textFirstCell}{textSecondCell}</th>
        )
    }
}

CourseListRow.propType ={
    isHeader : PropTypes.bool,
    textFirstCell : PropTypes.string.isRequired,
    textSecondCell : PropTypes.string
}
CourseListRow.defaultProps ={
    isheader : false,
    textSecondCell : null
}