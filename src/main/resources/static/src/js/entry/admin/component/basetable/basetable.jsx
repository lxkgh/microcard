import React,{PropTypes} from 'react'

import Table from 'admin.Table'

class BaseTable extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {header,body,percents,keys} = this.props
        return (
            <Table>
                {this.renderHeader(header,percents)}
                {this.renderBody(body,percents,keys)}
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
    renderBody(body,percents,keys){
        let rowsDom=body.map((row,i)=>{
            let itemsDom=keys.map((key)=>{
                return row[key]
            })
            return (
                <Table.Row key={i} percents={percents}>
                    {itemsDom}
                </Table.Row>
            )
        })
        return <Table.Body>{rowsDom}</Table.Body>
    }
}

BaseTable.propTypes={
    header:PropTypes.arrayOf(PropTypes.string).isRequired,
    body:PropTypes.arrayOf(PropTypes.object).isRequired,
    percents:PropTypes.arrayOf(PropTypes.string).isRequired,
    keys:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default BaseTable
