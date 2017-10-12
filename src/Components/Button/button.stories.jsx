import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  select
} from '@storybook/addon-knobs';

const stories = storiesOf('Button', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add('with text', () => {
  return (
    <button
      disabled={ boolean('Disabled', false) }
      onClick={ action('clicked') }
    >
      { text('Label', 'Hello Button') }
    </button>
  )
})

stories.add('with color', () => {
  return (
    <button
      style={{ color: color('Color', '#bada55') }}
      onClick={ action('clicked') }
    >
      { text('Label', 'Hello Button') }
    </button>
  )
})

stories.add('with some emoji', () => {

  const options = {
    '👻': '👻',
    '👽': '👽',
    '💀': '💀',
    '🤖': '🤖',
  };

  return (
    <button
      onClick={ action('clicked') }
    >
      { select('Emoji', options, '👻') }
    </button>
  )
});
