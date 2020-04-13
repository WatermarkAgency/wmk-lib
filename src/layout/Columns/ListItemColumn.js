import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {wmkClass} from 'wmk-lib'
import PropTypes from 'prop-types'

const ListItemColumn = ({list, JSX}) => {
    //console.log(list)
    return (
        <Row className={"flex-column"}>
            {list && list.length ? list.map((li,i)=>{
                return <JSX key={li+i} li={li} />
            }) : null }
        </Row>
    )
}

export default ListItemColumn

ListItemColumn.propTypes = {
    list: PropTypes.array.isRequired,
    JSX: PropTypes.func
}

ListItemColumn.defaultProps = {
    JSX: ({li}) => <Col>{console.log(li)} List Item Data</Col>
}