/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import './style.css';
import { Link } from 'react-router';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Layout, Menu, } from 'antd';
const { Header, Footer } = Layout;
class Container extends React.Component{
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render(){
        return (
            <Layout>
                <Header style={{color:'#fff',background:'#9C27B0',height:'48px',lineHeight:'48px'}}>
                    <Row>
                        <Col span={2}>
                            Giggle丶__
                        </Col>
                        <Col span={22}>
                            <Menu
                                style={{color:'#fff',background:'#9C27B0'}}
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                            >
                                <Menu.Item key="1"><Link to="/list1">列表一</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/list2">列表二</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/list3">列表三</Link></Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Header>
                    {this.props.children}
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}
export default Container;