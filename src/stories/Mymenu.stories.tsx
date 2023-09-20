import type { Meta, StoryObj } from '@storybook/react';
import { Mymenu } from './Mymenu';
const meta: Meta<typeof Mymenu> = {
	title: 'ui/Mymenu',
	component:Mymenu,
};

export default meta;
type Story = StoryObj<typeof Mymenu>;

export const Basic: Story = {
	args: {
		//basic args here 
	},
};
