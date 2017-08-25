/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import './style.css';
import Menu from './menu';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Layout, } from 'antd';
const {  Content } = Layout;
class ContentWrap extends React.Component{
    render(){
        let {menuData=[]} = this.props;
        return (
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Row>
                    <Col span={2}>
                        <Menu menuData={menuData}/>
                    </Col>
                    <Col span={22}>
                        <Content style={{ minHeight: 280 }}>
                            {this.props.children}
                        </Content>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
export default ContentWrap;