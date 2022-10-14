import { IconComponent } from '@components/icon/icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';


export default {
  title: 'Spell/Icon',
  component: IconComponent,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    }),
  ],
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});

export const acid = Template.bind({});
acid.args = {
  element: 'acid'
};

export const cold = Template.bind({});
cold.args = {
  element: 'cold'
};

export const fire = Template.bind({});
fire.args = {
  element: 'fire'
};

export const force = Template.bind({});
force.args = {
  element: 'force'
};

export const lightning = Template.bind({});
lightning.args = {
  element: 'lightning'
};

export const necrotic = Template.bind({});
necrotic.args = {
  element: 'necrotic'
};

export const poison = Template.bind({});
poison.args = {
  element: 'poison'
};

export const psychic = Template.bind({});
psychic.args = {
  element: 'psychic'
};

export const radiant = Template.bind({});
radiant.args = {
  element: 'radiant'
};

export const thunder = Template.bind({});
thunder.args = {
  element: 'thunder'
};

export const bludgeoning = Template.bind({});
bludgeoning.args = {
  element: 'bludgeoning'
};

export const piercing = Template.bind({});
piercing.args = {
  element: 'piercing'
};

export const slashing = Template.bind({});
slashing.args = {
  element: 'slashing'
};