import React from 'react';
import Select from 'react-select';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

const Dropdown = ({
  options,
  isMulti = false,
  isSearchable = true,
  onChange,
  usePortal = false,
  customOptionRenderer,
  filterOptions,
  toggleFeatures = {},
}) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? 'rgb(209, 213, 219)' : 'rgb(229, 231, 235)', // Tailwind gray-300 and gray-200
      boxShadow: state.isFocused ? '0 0 0 1px rgb(96, 165, 250)' : null, // Tailwind ring-2 ring-blue-400
      '&:hover': {
        borderColor: 'rgb(209, 213, 219)', // Tailwind gray-300
      },
      padding: '0.5rem',
      borderRadius: '0.375rem', // Tailwind rounded-md
    }),
    menu: (base) => ({
      ...base,
      zIndex: 1000,
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isFocused
        ? 'rgb(229, 231, 235)' // Tailwind gray-200
        : isSelected
        ? 'rgb(209, 213, 219)' // Tailwind gray-300
        : null,
      color: 'rgb(31, 41, 55)', // Tailwind gray-800
      padding: '0.5rem',
      '&:active': {
        backgroundColor: 'rgb(209, 213, 219)', // Tailwind gray-300
      },
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: 'rgb(229, 231, 235)', // Tailwind gray-200
      borderRadius: '0.375rem', // Tailwind rounded-md
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: 'rgb(31, 41, 55)', // Tailwind gray-800
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: 'rgb(156, 163, 175)', // Tailwind gray-400
      '&:hover': {
        backgroundColor: 'rgb(209, 213, 219)', // Tailwind gray-300
        color: 'rgb(31, 41, 55)', // Tailwind gray-800
      },
    }),
  };

  const filteredOptions = filterOptions ? filterOptions(options) : options;

  const DropdownComponent = (
    <Select
      options={filteredOptions}
      isMulti={toggleFeatures.isMulti !== undefined ? toggleFeatures.isMulti : isMulti}
      isSearchable={toggleFeatures.isSearchable !== undefined ? toggleFeatures.isSearchable : isSearchable}
      onChange={onChange}
      styles={customStyles}
      components={customOptionRenderer ? { Option: customOptionRenderer } : undefined}
      className="text-sm"
      classNamePrefix="react-select"
    />
  );

  return usePortal ? createPortal(DropdownComponent, document.body) : DropdownComponent;
};

export default Dropdown;
