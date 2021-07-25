import React, { Component } from 'react'

export default class About extends Component {
    render() {
        console.log('Abount组件收到的props是',this.props)

        return (
           <h3>我是Abount的内容</h3>
        )
    }
}
