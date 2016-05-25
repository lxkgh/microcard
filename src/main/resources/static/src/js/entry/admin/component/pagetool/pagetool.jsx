import React,{PropTypes} from 'react'

import request from 'superagent'

import Column from 'admin.Column'
import PageSelect from './pageselect/pageselect.jsx'

class PageTool extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            page:0,
            totalPages:1,
            totalElems:0,
            pagesize:10,
            datasize:0,
            url:this.props.url,
            query:this.props.query
        }
        this.refresh=this.refresh.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.url!=this.props.url||nextProps.query!=this.props.query) {
            this.setState({
                url:nextProps.url,
                query:nextProps.query
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        const {page,pagesize,url,query} = this.state
        if (nextState.page!= page||nextState.pagesize!= pagesize||
            nextState.url!=url||nextState.query!=query) {
            this.getPage(nextState.url,nextState.page,nextState.pagesize,nextState.query)
        }
    }
    componentDidMount() {
        this.refresh()
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
        const {url,page,pagesize,query} = this.state
        this.getPage(url,page,pagesize,query)
    }
    onSelect(pageselect){
        this.setState({
            page: pageselect
        })
    }
    getPage(url,page,pagesize,query){
        let getUrl=`${url}?page=${page}&pagesize=${pagesize}`
        if (query!='') {
            getUrl+=`&${query}`
        }
        request.get(getUrl)
        .end((err,res)=>{
            if (!err) {
                const data=JSON.parse(res.text)
                if (data.success&&data.data) {
                    let {totalPages,totalElems,datasize} = data.data
                    totalPages=totalPages==0?1:totalPages
                    this.setState({
                        page:totalPages<(page+1)?(totalPages-1):page,
                        totalPages: totalPages,
                        totalElems:totalElems,
                        datasize:datasize,
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
    url:PropTypes.string.isRequired,
    query:PropTypes.string
}

export default PageTool
