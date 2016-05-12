import React from 'react'
import ReactDOM from 'react-dom'

import './admin.css'
import 'css.Common'

import LeftNav from './component/leftnav/leftnav.jsx'
import Content from 'admin.Content'
import OpColumn from 'admin.OpColumn'
import Button from 'admin.Button'
import Table from 'admin.Table'


const styles={
    adminAPP:{
        height:'100%',
        width:'100%'
    }
}

const percents=['20%','20%','20%','20%','20%']

class AdminAPP extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={styles.adminAPP} className="flexbox">
                <LeftNav/>
                <Content className="flex flexbox flex-center column">
                    <OpColumn className="self-center">
                        <Button>
                            按钮
                        </Button>
                    </OpColumn>
                    <div className="flex self-center" style={{width:'100%',marginTop:'30px'}}>
                        <Table>
                            <Table.Header>
                                <Table.Row percents={percents}>
                                    {'姓名'}
                                    {'角色'}
                                    {'真实姓名'}
                                    {'类型'}
                                    {'类型'}
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row percents={percents}>
                                    {1}
                                    {2}
                                    {3}
                                    {4}
                                    {5}
                                </Table.Row>
                                <Table.Row percents={percents}>
                                    {1}
                                    {2}
                                    {3}
                                    {4}
                                    {5}
                                </Table.Row>
                                <Table.Row percents={percents}>
                                    {1}
                                    {2}
                                    {3}
                                    {4}
                                    {5}
                                </Table.Row>
                                <Table.Row percents={percents}>
                                    {1}
                                    {2}
                                    {3}
                                    {4}
                                    {5}
                                </Table.Row>
                                <Table.Row percents={percents}>
                                    {1}
                                    {2}
                                    {3}
                                    {4}
                                    {5}
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </Content>
            </div>
        )
    }
}
ReactDOM.render(
    <AdminAPP />,
    document.getElementById('common-body')
)
