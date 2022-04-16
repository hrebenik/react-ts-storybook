import React from 'react';
import {Card} from "antd";
import "antd/dist/antd.css";
import {CardProps} from "./types";

const TestCard = (props: CardProps) => {
    const { cardTitle, cardContent } = props;
    return (
        <div>
            <Card title={cardTitle} bordered style={{ width: 300 }}>
                <p>{ cardContent }</p>
            </Card>
        </div>
    );
};

export default TestCard;