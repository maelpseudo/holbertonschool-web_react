import  React  from "react";
import PropTypes  from "prop-types";

export default function BodySection(props) {

    return(
        <div className="bodySection">
            <h2>props.title</h2>
            <p>test</p>
        </div>
    )
}


BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};