import React,{PropTypes} from 'react'

import Column from 'admin.Column'
import Button from 'admin.Button'


class BaseColumn extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {buttons} = this.props
        return (
            <Column className="flexbox">
                {this.renderButtons(buttons)}
            </Column>
        )
    }
    renderButtons(buttons){
        let buttonsDom=buttons.map((btn,i)=>{
            return <Button key={i} className="self-center" {...btn}>{btn.desc}</Button>
        })
        return buttonsDom
    }
}
BaseColumn.propTypes={
    buttons:PropTypes.arrayOf(PropTypes.object).isRequired
}
export default BaseColumn
