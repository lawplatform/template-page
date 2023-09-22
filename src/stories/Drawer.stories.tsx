import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
const meta: Meta<typeof Drawer> = {
	title: 'ui/Drawer',
	component:Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
	args: {
		//basic args here 
	},
};
