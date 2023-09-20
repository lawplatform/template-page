import type { Meta, StoryObj } from '@storybook/react';
import { Searchbar } from './Searchbar';
const meta: Meta<typeof Searchbar> = {
	title: 'ui/Searchbar',
	component:Searchbar,
};

export default meta;
type Story = StoryObj<typeof Searchbar>;

export const Basic: Story = {
	args: {
		//basic args here 
	},
};
