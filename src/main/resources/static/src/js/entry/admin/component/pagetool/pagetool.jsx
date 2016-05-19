import React,{PropTypes} from 'react'

import request from 'superagent'

import Column from 'admin.Column'
import PageSelect from './pageselect/pageselect.jsx'

class PageTool extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            page:0,
            totalPages:0,
            totalElems:0,
            pagesize:10,
            datasize:0,
            url:this.props.url
        }
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextState.pagesize!=this.state.pagesize||nextState.page!=this.state.page) {
            this.getPage(nextState.url,nextState.page,nextState.pagesize)
        }
    }
    render() {
        const {page,totalElems,pagesize,datasize,totalPages} = this.state
        const beginElem=page*pagesize+1
        const endElem=beginElem+datasize-1
        return (
            <Column>
                <span>
                    从 {beginElem} 到{endElem} ，共 {totalElems} 条
                </span>
                <span style={{
                    fontWeight:'bold',
                    margin:'0 2px 0 8px'
                }}>每页</span>
                <select value={pagesize} onChange={(e)=>{this.changePageSize(e)}}>
                    <option value={10}>{10}</option>
                    <option value={20}>{20}</option>
                    <option value={30}>{30}</option>
                    <option value={50}>{50}</option>
                    <option value={100}>{100}</option>
                </select>
                <span style={{marginLeft:'2px'}}>条</span>
                <PageSelect page={page} totalPages={totalPages}
                    onSelect={(pageselect)=>{this.onSelect(pageselect)}}/>
            </Column>
        )
    }
    refresh(){
        const {url,page,pagesize} = this.state
        this.getPage(url,page,pagesize)
    }
    onSelect(pageselect){
        this.setState({
            page: pageselect
        })
    }
    getPage(url,page,pagesize){
        request.get(`${url}?page=${page}&pagesize=${pagesize}`)
        .end((err,res)=>{
            if (!err) {
                const data=JSON.parse(res.text)
                if (data.success&&data.data) {
                    this.setState({
                        totalPages: data.data['totalPages'],
                        totalElems:data.data['totalElems'],
                        datasize:data.data['datasize'],
                        data:data.data['data']
                    })
                    this.props.setData(data.data['data'])
                }
            }
        })
    }
    changePageSize(e){
        this.setState({
            pagesize:e.target.value
        })
    }
}

PageTool.propTypes={
    setData:PropTypes.func.isRequired,
    url:PropTypes.string.isRequired
}

export default PageTool
