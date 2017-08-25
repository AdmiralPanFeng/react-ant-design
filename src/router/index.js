/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import './style.css';
import 'antd/dist/antd.css';
import HeaderList from './headerList';
import {Row, Col} from 'antd';
import {Layout} from 'antd';
const {Header, Footer} = Layout;
class Container extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{color: '#fff', background: '#9C27B0', height: '48px', lineHeight: '48px'}}>
                    <Row>
                        <Col span={2}>
                            Giggle丶__
                        </Col>
                        <Col span={22}>
                                <HeaderList/>
                        </Col>
                    </Row>
                </Header>
                {this.props.children}
            </Layout>
        )
    }
}
export default Container;