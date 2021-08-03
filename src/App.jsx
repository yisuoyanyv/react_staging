import React, { Component } from 'react'
import {DatePicker, Button } from 'antd';
import {WechatOutlined} from '@ant-design/icons'

const {RangePicker} = DatePicker;
export default class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary Button</Button>

                App...

                <WechatOutlined />
                <RangePicker/>


            </div>
        )
    }
}
