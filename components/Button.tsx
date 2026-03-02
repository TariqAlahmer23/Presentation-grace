"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

const variantClassNames: Record<ButtonVariant, string> = {
  primary: "btn-primary px-4 py-3",
  secondary: "btn-secondary px-4 py-3",
  icon: "btn-icon"
};

export function Button({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn-base ${variantClassNames[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
