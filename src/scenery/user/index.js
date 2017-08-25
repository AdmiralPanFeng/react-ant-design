/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import '../style.css';
import 'antd/dist/antd.css';
import { Breadcrumb,Carousel } from 'antd';
class Scenery extends React.Component{
    render(){
        return (
            <div>
                <Breadcrumb style={{height:'42px',lineHeight:'42px' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>图片展示</Breadcrumb.Item>
                </Breadcrumb>

                <Carousel autoplay>
                    <div><img src={require('./img/1.jpg')} alt=""/></div>
                    <div><img src={require('./img/2.jpg')} alt=""/></div>
                    <div><img src={require('./img/3.jpg')} alt=""/></div>
                    <div><img src={require('./img/4.jpg')} alt=""/></div>
                    <div><img src={require('./img/5.jpg')} alt=""/></div>
                </Carousel>
            </div>

        )
    }
}
export default Scenery;