# Dropdown Component

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Optionally, run `npm update` to update dependencies to their latest versions
4. Run `npm run storybook` to start Storybook

## Usage

Import the `Dropdown` component and use it in your project:

```jsx
import Dropdown from './components/Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  // Add more options
];

<Dropdown
  options={options}
  isMulti={true}
  isSearchable={true}
  onChange={(selected) => console.log(selected)}
/>;

## Features

- **Searchable Dropdown:** Allows the dropdown options to be searchable. Enable this feature by setting `isSearchable` to `true`.
- **Portal Support:** Allows the dropdown to render in a different DOM tree. This is useful for rendering the dropdown menu outside of its parent container to avoid clipping issues. Enable this feature by setting `usePortal` to `true`.
- **Single or Multiple Selection:** Supports both single and multiple selection modes. Enable multiple selection by setting `isMulti` to `true`.
- **Customizable Option Rendering:** Allows customization of how the options are rendered. Use the `customOptionRenderer` prop to provide a custom rendering function.
- **Search Filtering:** Allows custom filtering of options based on search input. Use the `filterOptions` prop to provide a custom filter function.
- **Toggle Features:** Allows individual features like multi-selection and search to be toggled on or off using the `toggleFeatures` prop.
- **Z-Index Compatibility:** Ensures that the dropdown menu works correctly with elements that have a high z-index value by setting a high z-index for the menu.

## Props

- **options (array):** The options to display in the dropdown. Each option should be an object with `value` and `label` properties.
- **isMulti (boolean):** Enables multiple selection mode. Default is `false`.
- **isSearchable (boolean):** Enables search functionality. Default is `true`.
- **onChange (function):** Callback function that is called when the selected options change.
- **usePortal (boolean):** Enables portal support for rendering the dropdown menu outside of its parent container. Default is `false`.
- **customOptionRenderer (function):** Custom function for rendering options.
- **filterOptions (function):** Custom function for filtering options based on search input.
- **toggleFeatures (object):** Object to toggle individual features like `isMulti` and `isSearchable`.
