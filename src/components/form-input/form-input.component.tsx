import "./form-input.styles.scss";

interface FormInputProps {
  label?: string;
  [key: string]: any;
}

const FormInput = ({ label, ...props }: FormInputProps) => {
  return (
    <div className="group">
      <input className="form-input" {...props} />
      {label && (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
