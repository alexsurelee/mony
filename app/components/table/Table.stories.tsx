import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "./Table";

export default {
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});
