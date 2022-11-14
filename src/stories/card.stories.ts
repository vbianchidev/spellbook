import { CardComponent } from '@components/card/card.component';
import { IconComponent } from '@components/icon/icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SpellEntity } from 'src/app/modules/spell/store/spell.entity';
import { PipesModule } from '@shared/pipes/pipes.module';

const spellMock: SpellEntity = {
  id: 0,
  name: 'Mock Spell',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam consequat, tortor vel eleifend volutpat, felis leo rhoncus nunc, a eleifend justo justo ac mauris. 
    Pellentesque commodo purus sed consectetur lacinia. 
    Aenean ornare quam quis imperdiet accumsan. 
    Sed rutrum, arcu quis scelerisque pellentesque, elit enim ultrices quam, sit amet tincidunt risus urna ut neque. 
    Mauris a ultrices justo. Aenean sit amet volutpat felis. 
    Sed pellentesque, augue eu euismod bibendum, nunc orci lobortis enim, vitae molestie magna nisi nec lacus. 
    Quisque iaculis posuere orci, sed fermentum arcu sollicitudin ut. 
    Suspendisse nulla mauris, euismod nec eros et, malesuada porta sem. 
    Vestibulum egestas at purus posuere scelerisque.`,
  type: 'acid',
  level: 0,
  school: 'evocation',
  castingTime: '1 Action',
  range: '60 Feet',
  duration: 'Instantaneous',
  components: ['V', 'S'],
};

export default {
  title: 'Spell/Card',
  component: CardComponent,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    moduleMetadata({
      imports: [PipesModule, FontAwesomeModule, CardComponent],
    }),
  ],
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Fire = Template.bind({});
Fire.args = {
  spell: { ...spellMock, type: 'fire' },
};
