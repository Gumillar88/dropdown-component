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
  { value: '4', label: 'Option 4' },
  { value: '5', label: 'Option 5' },
  { value: '6', label: 'Option 6' },
];

export const Default = () => (
  <Dropdown
    options={options}
    onChange={(value) => console.log('Selected:', value)}
  />
);

export const Searchable = () => (
  <Dropdown
    options={options}
    isSearchable
    onChange={(value) => console.log('Selected:', value)}
  />
);

export const MultipleSelection = () => (
  <Dropdown
    options={options}
    isMulti
    onChange={(value) => console.log('Selected:', value)}
  />
);

export const CustomizableRendering = () => (
  <Dropdown
    options={options.map(option => ({
      ...option,
      customRender: <strong>{option.label}</strong>
    }))}
    customOptionRenderer={({ innerRef, innerProps, data }) => (
      <div ref={innerRef} {...innerProps}>
        <strong>{data.label}</strong>
      </div>
    )}
    onChange={(value) => console.log('Selected:', value)}
  />
);

export const PortalSupport = () => (
  <Dropdown
    options={options}
    usePortal
    onChange={(value) => console.log('Selected:', value)}
  />
);

export const SearchFiltering = () => (
  <Dropdown
    options={options}
    isMulti
    filterOptions={(opts) => opts.filter(option => option.label.includes('1') || option.label.includes('2'))}
    onChange={(value) => console.log('Selected:', value)}
  />
);

export const ToggleFeatures = () => (
  <Dropdown
    options={options}
    toggleFeatures={{ isMulti: true, isSearchable: true, usePortal: false }}
    onChange={(value) => console.log('Selected:', value)}
  />
);
