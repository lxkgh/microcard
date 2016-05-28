import React,{PropTypes} from 'react'

import Cover from 'Cover'
import Dialog from 'Dialog'
import Button from 'Button'
import Input from 'Input'
import Col from '../../../../component/col/col.jsx'
import Label from 'Label'

class AddModal extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            image: null,
            type:null,
            name:''
        }
        this.show=this.show.bind(this)
        this.hide=this.hide.bind(this)
    }
    render() {
        const {onSubmit} = this.props
        const {name} = this.state
        return (
            <Cover ref="cover">
                <Dialog width="40%">
                    <Dialog.Header>
                        <h4>新增图片</h4>
                    </Dialog.Header>
                    <Dialog.Body>
                        <Col col={2}>
                            <Label>选择图片</Label>
                        </Col>
                        <Col col={10}>
                            <input type="file" onChange={(e)=>{this.handleFile(e)}}/>
                        </Col>
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
        const data={
            data:this.state.image,
            type:this.state.type.split('/')[1].toUpperCase(),
            name:this.state.name
        }
        onSubmit(data)
    }
    handleFile(e){
        let file = e.target.files[0]
        let reader = new FileReader()
        if (file===undefined) {
            this.setState({image: null,type:null})
            return
        }
        reader.onload = (upload) => {
            this.setState({image: upload.target.result,type:file.type})
        }
        reader.readAsDataURL(file)
    }
    handleName(e){
        const value=e.target.value
        this.setState({name:value})
    }
    show(){
        this.refs['cover'].setState({
            show:true
        })
    }
    hide(){
        this.refs['cover'].setState({
            show:false
        })
    }
}
AddModal.propTypes={
    onSubmit:PropTypes.func.isRequired
}
export default AddModal
