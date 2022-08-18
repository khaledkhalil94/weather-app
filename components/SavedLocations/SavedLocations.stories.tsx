import {ComponentStory, ComponentMeta} from '@storybook/react';
import SavedLocations from './index';

export default {
  title: 'Components/Locations',
  component: SavedLocations,
} as ComponentMeta<typeof SavedLocations>;

const Template: ComponentStory<typeof SavedLocations> = SavedLocations;
export const Locations = Template.bind({});
