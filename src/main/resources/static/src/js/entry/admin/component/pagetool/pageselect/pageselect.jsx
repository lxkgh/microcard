import React,{PropTypes} from 'react'

import csses from './pageselect.css'
import cx from 'classnames'

const STATE={
    noChange:-1,
    prePage:-2,
    nextPage:-3
}

class PageSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            page:this.props.page,
            totalPages:this.props.totalPages
        }
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextState.page!=this.state.page&&nextProps.page==this.props.page) {
            this.props.onSelect(nextState.page)
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            page:nextProps.page,
            totalPages:nextProps.totalPages
        })
    }
    render() {
        const {page,totalPages} = this.state
        const preCsses=cx(csses.span,{[csses.disabled]:page==0})
        const nextCsses=cx(csses.span,{[csses.disabled]:totalPages-1==page})
        return (
            <div className={csses.pageselect} onClick={(e)=>{this.onClick(e)}}>
                <span name={STATE.prePage} className={preCsses}>上一页</span>
                {this.renderPageLink(page+1,totalPages)}
                <span name={STATE.nextPage} className={nextCsses}>下一页</span>
            </div>
        )
    }
    onClick(e){
        const value = Number(e.target.attributes.name.value)
        if (value==STATE.noChange) {
            return
        }
        let newPage=-4
        if (value>=0) {
            newPage=value
        }else {
            const oldPage=this.state.page
            if (value==STATE.prePage&&oldPage!=0) {
                newPage=oldPage-1
            }
            if (value==STATE.nextPage&&oldPage!=this.state.totalPages-1) {
                newPage=oldPage+1
            }
        }
        if (newPage!=-4) {
            this.setState({
                page: newPage
            })
        }
    }
    renderPageLink(page,totalPages){
        let pagesDom = []
        let pages=this.getPages(page,totalPages)
        for (let i = 0; i < pages.length; i++) {
            const isNoChange=pages[i]==STATE.noChange
            const classes=cx(csses.span,{[csses.active]:page==pages[i],[csses.disabled]:isNoChange})
            pagesDom.push(<span key={i} className={classes}
                name={pages[i]-1}>{pages[i]!=STATE.noChange?pages[i]:'...'}</span>)
        }
        return pagesDom
    }
    getPages(page,totalPages){
        let pages1=[]
        if (page<7) {
            for (let i = 0; i < page; i++) {
                pages1.push(i+1)
            }
        } else {
            pages1.push(1)
            pages1.push(2)
            pages1.push(STATE.noChange)
            pages1.push(page-2)
            pages1.push(page-1)
            pages1.push(page)
        }

        let pages2=[]
        if (totalPages-page<7) {
            for (let i=totalPages ; i > page; i--) {
                pages2.unshift(i)
            }
        }else {
            pages2.unshift(totalPages)
            pages2.unshift(totalPages-1)
            pages2.unshift(STATE.noChange)
            pages2.unshift(page+2)
            pages2.unshift(page+1)
        }
        return pages1.concat(pages2)
    }
}

PageSelect.propTypes={
    page:PropTypes.number.isRequired,
    totalPages:PropTypes.number.isRequired,
    onSelect:PropTypes.func.isRequired
}
export default PageSelect
