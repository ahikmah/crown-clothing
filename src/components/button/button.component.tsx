import "./button.styles.scss";

interface ButtonProps {
  children?: React.ReactNode;
  buttonType?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  buttonType = "default",
  ...other
}: ButtonProps) => {
  const types: { [key: string]: string } = {
    google: "google-sign-in",
    inverted: "inverted",
  };

  return (
    <button className={`button-container ${types[buttonType]}`} {...other}>
      {children}
    </button>
  );
};

export default Button;
