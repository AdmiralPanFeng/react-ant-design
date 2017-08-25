import React from 'react';
import '../style.css';
import { Card,Popconfirm, message,Button } from 'antd';
function confirm(e) {
    console.log(e);
    message.success('她是非常美的!');
}

function cancel(e) {
    console.log(e);
    message.error('选择不美就是你瞎呀!');
}
// 获取图片相关的数据
const IMG_DATA = require('../../data/imageDatas.1.json');
class Cardaa extends React.Component{

    getCard(){
        return IMG_DATA.map((item,k)=>{
            return (
                <Card key={k} style={{ width: 240,float:'left' }} bodyStyle={{ padding: 0 }}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src={require('../../images/' + item.fileName)} />
                </div>
                    <div className="custom-card">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <Popconfirm title="郭华大美女美吗?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                            <Button type="primary">评论</Button>
                        </Popconfirm>
                    </div>
                </Card>
            )
        })
    }
    render(){
        return(
            <div>
                {this.getCard()}
            </div>
        );
    }
}

export default Cardaa;
