import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, searchable, multiple, customizable, onChange, zIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(multiple ? [] : null);
  const [search, setSearch] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    if (searchable) {
      setFilteredOptions(
        options.filter(option =>
          option.label.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredOptions(options);
    }
  }, [search, searchable, options]);

  const handleSelect = option => {
    if (multiple) {
      setSelected(prev => {
        const newSelected = prev.includes(option.value)
          ? prev.filter(val => val !== option.value)
          : [...prev, option.value];
        onChange(newSelected);
        return newSelected;
      });
    } else {
      setSelected(option.value);
      onChange(option.value);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="px-4 py-2 border rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {multiple
          ? (selected.length ? selected.join(', ') : 'Select options')
          : (selected ? options.find(opt => opt.value === selected)?.label : 'Select an option')}
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 w-full bg-white border border-gray-300 rounded shadow-lg ${zIndex ? `z-${zIndex}` : ''}`}
        >
          {searchable && (
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-1 border-b border-gray-300"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          )}
          <ul className="max-h-60 overflow-y-auto">
            {filteredOptions.map(option => (
              <li
                key={option.value}
                className={`px-4 py-2 cursor-pointer ${selected.includes(option.value) ? 'bg-blue-100' : ''}`}
                onClick={() => handleSelect(option)}
              >
                {customizable ? option.customRender : option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    customRender: PropTypes.node,
  })).isRequired,
  searchable: PropTypes.bool,
  multiple: PropTypes.bool,
  customizable: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  zIndex: PropTypes.number,
};

Dropdown.defaultProps = {
  searchable: false,
  multiple: false,
  customizable: false,
  zIndex: 50,
};

export default Dropdown;
