import React from 'react';

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

const onFunc = () => {
  console.log("click")
}

export default Button;

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: onFunc,
};
