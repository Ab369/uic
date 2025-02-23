import React from 'react';

// Utility function to combine class names (since `cn` is being used in the code)
const cn = (...classes) => classes.filter(Boolean).join(' ');

const InteractiveHoverButton = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'group relative lg:w-72 md:w-52 w-40 cursor-pointer overflow-hidden rounded-full border bg-background  md:px-2 text-center font-semibold',
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2 justify-center">
          <div className="h-2 md:w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]" />
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
          <span>{children}</span>
          →
        </div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = 'InteractiveHoverButton';

export default InteractiveHoverButton;
