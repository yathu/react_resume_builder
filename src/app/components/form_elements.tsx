import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

// Button component with TypeScript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    className="px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
    {...props}>
    {children}
  </button>
);

// Input field component with TypeScript
interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: {
    message?: string;
  };
  register:UseFormRegisterReturn<string>;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  register,
  ...props
}) => (
  <div className="mb-4">
    <label className="block mb-2 text-sm font-medium">{label}</label>
    <input
      className={`w-full px-3 py-2 border rounded ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      {...register}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
  </div>
);

// TextArea field component with TypeScript
interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: {
    message?: string;
  };
  register: UseFormRegisterReturn<string>;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  error,
  register,
  ...props
}) => (
  <div className="w-full">
    {label && <label className="block mb-2 text-sm font-medium">{label}</label>}
    <textarea
      className={`w-full px-3 py-2 border rounded ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      rows={4}
      {...register}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
  </div>
);
