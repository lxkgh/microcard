import React,{PropTypes} from 'react'

import Table from 'admin.Table'

class BaseTable extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            activeRow:'-1'
        }
    }
    render() {
        const {header,body,percents,keys} = this.props
        const {activeRow} = this.state
        return (
            <Table>
                {this.renderHeader(header,percents)}
                {this.renderBody(body,percents,keys,activeRow)}
            </Table>
        )
    }
    renderHeader(header,percents){
        let headerDom=header.map((item)=>{
            return item
        })
        return (
            <Table.Header>
                <Table.Row percents={percents}>
                    {headerDom}
                </Table.Row>
            </Table.Header>
        )
    }
    renderBody(body,percents,keys,activeRow){
        let rowsDom=body.map((row,i)=>{
            let itemsDom=keys.map((key)=>{
                return row[key]
            })
            return (
                <Table.Row key={i}
                    active={activeRow==i}
                    percents={percents}
                    onClick={()=>{this.clickRow(i)}}>
                    {itemsDom}
                </Table.Row>
            )
        })
        return <Table.Body>{rowsDom}</Table.Body>
    }
    clickRow(i){
        this.setState({
            activeRow:i
        })
    }
    getActiveId(){
        const {body,id} = this.props
        const {activeRow} = this.state
        if (!body[activeRow]) {
            return ''
        }
        return body[activeRow][id]
    }
}

BaseTable.propTypes={
    header:PropTypes.arrayOf(PropTypes.string).isRequired,
    body:PropTypes.arrayOf(PropTypes.object).isRequired,
    percents:PropTypes.arrayOf(PropTypes.string).isRequired,
    keys:PropTypes.arrayOf(PropTypes.string).isRequired,
    id:PropTypes.string.isRequired
}

export default BaseTable
