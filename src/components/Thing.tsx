import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface ThingProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactNode;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<ThingProps> = ({ children }) => {
  return (
    <div className="bg-violet-500">
      {children || `the snozzberries taste like snozzberries`}
    </div>
  );
};

export default Thing;
