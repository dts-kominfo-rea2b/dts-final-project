import React from 'react';
import {
  ButtonBase,
  ButtonDisable,
  ButtonVariant,
  ButtonSize,
} from 'utils/theme';

const Button = ({
  className,
  loading,
  variant,
  size,
  type,
  children,
  disabled,
  onClick,
  ...props
}) => {
  const classNames =
    ButtonBase +
    ' ' +
    (disabled === true ? ButtonDisable : ButtonVariant[variant]) +
    ' ' +
    ButtonSize[size] +
    ' ' +
    className;

  const onClickHandler = (event) => {
    if (disabled || loading) return;
    onClick && onClick(event);
  };

  return (
    <button
      onClick={onClickHandler}
      className={classNames}
      disabled={disabled}
      type={type}
      aria-label={type}
      {...props}
    >
      {!loading && children}
      {loading && (
        <div
          className='h-5 w-5 border-3px border-gray-800 border-t-3px rounded-full animate-spin'
          style={{ borderTopColor: '#f1f1f1' }}
        />
      )}
    </button>
  );
};

export default Button;
