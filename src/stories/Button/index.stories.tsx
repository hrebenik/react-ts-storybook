import React from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import {TestButton} from './index';
import {ButtonTypesProps} from "./types";

export default {
  title: 'Button',
  component: TestButton,
};

const Template: Story<ButtonTypesProps> = args => <TestButton { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  label: 'Button',
};

export const Dashed = Template.bind({});
Dashed.args = {
  type: 'dashed',
  label: 'Button',
};
