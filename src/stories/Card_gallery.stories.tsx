import type { Meta, StoryObj } from '@storybook/react';
import Card_gallery from '../components/Card_gallery';
const meta: Meta<typeof Card_gallery> = {
	title: 'ui/Card_gallery',
	component: Card_gallery,
};

export default meta;
type Story = StoryObj<typeof Card_gallery>;

export const Basic: Story = {
	args: {
		//basic args here 
	},
};
