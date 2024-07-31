import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export const Default = () => (
  <Dropdown
    options={options}
    onChange={value => console.log('Selected:', value)}
  />
);

export const Searchable = () => (
  <Dropdown
    options={options}
    searchable
    onChange={value => console.log('Selected:', value)}
  />
);

export const MultipleSelection = () => (
  <Dropdown
    options={options}
    multiple
    onChange={value => console.log('Selected:', value)}
  />
);

export const CustomizableRendering = () => (
  <Dropdown
    options={options.map(option => ({
      ...option,
      customRender: <strong>{option.label}</strong>
    }))}
    customizable
    onChange={value => console.log('Selected:', value)}
  />
);
