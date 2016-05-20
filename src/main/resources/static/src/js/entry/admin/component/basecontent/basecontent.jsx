import React,{PropTypes} from 'react'

import Content from 'admin.Content'

import BaseColumn from '../crudcolumn/crudcolumn.jsx'
import PageTool from '../pagetool/pagetool.jsx'
class BaseContent extends React.Component {
    constructor(props) {
        super(props)
        this.refresh=this.refresh.bind(this)
    }
    render() {
        const {buttons,children,setData,url} = this.props
        return (
            <Content>
                <BaseColumn buttons={buttons}/>
                {children}
                <PageTool ref="pageTool" setData={setData}
                    url={url}/>
            </Content>
        )
    }
    refresh(){
        this.refs['pageTool'].refresh()
    }
}

BaseContent.defaultProps={
    buttons:[{desc:'新增'},{desc:'修改'},{desc:'刷新'},{desc:'删除'}],
    setData:()=>{},
    url:'#'
}

BaseContent.propTypes={
    buttons:PropTypes.arrayOf(PropTypes.object),
    setData:PropTypes.func,
    url:PropTypes.string
}

export default BaseContent
