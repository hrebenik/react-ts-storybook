import React from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";
import {ButtonTypesProps} from "./types";

export const TestButton = (props:ButtonTypesProps) => {
  const { type, label } = props;
  return (
    <Button
        type={type}
    >
      { label }
    </Button>
  );
};
