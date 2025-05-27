
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  icon,
  rightIcon,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      <div
        className={cn(
          "relative flex items-center border-2 rounded-xl transition-all duration-300",
          isFocused
            ? "border-blue-500 shadow-lg shadow-blue-500/20"
            : "border-gray-200 hover:border-gray-300",
          className
        )}
      >
        {icon && (
          <div className="absolute left-4 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
            {icon}
          </div>
        )}
        
        <input
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={cn(
            "w-full px-4 py-3 bg-transparent outline-none placeholder-gray-400 transition-all duration-200",
            icon && "pl-12",
            rightIcon && "pr-12"
          )}
        />
        
        {rightIcon && (
          <div className="absolute right-4">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedInput;
