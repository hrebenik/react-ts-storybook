import React from 'react';
import { Story } from '@storybook/react';
import TestCard from "./index";
import {CardProps} from "./types";

export default {
    title: 'Example card',
    component: TestCard,
};

const Template: Story<CardProps> = args => <TestCard { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
    cardTitle: 'Card header',
    cardContent: 'Card content!',
};