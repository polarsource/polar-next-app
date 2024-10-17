import { ComponentProps } from "react";

export function CheckIcon(props: ComponentProps<'svg'>) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M10 15.586l-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
      </svg>
    );
  }