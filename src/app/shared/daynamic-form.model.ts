export interface DaynamicForm {
  name: string;
  type: string;
  label: string;
  isVisible?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  hint?: string;
  value?: string | boolean | number;
  options?: (string | boolean | number)[];
}
