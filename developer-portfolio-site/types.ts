export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export interface FormActions {
  resetForm: () => void;
}

export interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}
