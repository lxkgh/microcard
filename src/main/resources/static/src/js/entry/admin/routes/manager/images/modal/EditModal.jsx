import React,{PropTypes} from 'react'

import Cover from 'Cover'
import Dialog from 'Dialog'
import Button from 'Button'
import Input from 'Input'
import Col from '../../../../component/col/col.jsx'
import Label from 'Label'

class EditModal extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            image:{
                name:''
            }
        }
        this.show=this.show.bind(this)
        this.hide=this.hide.bind(this)
    }
    render() {
        const {onSubmit} = this.props
        const {name} = this.state.image
        return (
            <Cover ref="cover">
                <Dialog width="40%">
                    <Dialog.Header>
                        <h4>修改图片</h4>
                    </Dialog.Header>
                    <Dialog.Body>
                        <Col col={2}>
                            <Label>图片名称</Label>
                        </Col>
                        <Col col={10}>
                            <Input value={name} onChange={(e)=>{this.handleName(e)}}/>
                        </Col>
                    </Dialog.Body>
                    <Dialog.Footer>
                        <Button bstyle="primary"
                            onClick={(e)=>{this.handleSubmit(e,onSubmit)}}>保存</Button>
                    </Dialog.Footer>
                </Dialog>
            </Cover>
        )
    }
    handleSubmit(e,onSubmit) {
        e.preventDefault()
        onSubmit(this.state.image)
    }
    handleName(e){
        const value=e.target.value
        let image=this.state.image
        image.name=value
        this.setState({image:image})
    }
    show(image){
        this.refs['cover'].setState({
            show:true
        })
        this.setState({
            image:image
        })
    }
    hide(){
        this.refs['cover'].setState({
            show:false
        })
    }
}
EditModal.propTypes={
    onSubmit:PropTypes.func.isRequired
}
export default EditModal
