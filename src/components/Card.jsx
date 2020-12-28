import * as React from 'react';
import {Card, Avatar, Rate, Button} from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';

export default ({title, onChange, rate, onDelete})=>{
    return (
        <Card
            style={{ width: 300 }}
            actions={[
                <DeleteOutlined onClick={onDelete}/>,
            ]}
        >
            <h4>
                {title}
            </h4>
            <div>
                <Rate onChange={onChange} value={rate}/>
            </div>
        </Card>
    )
}
