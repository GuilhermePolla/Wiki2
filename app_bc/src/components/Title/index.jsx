import "./styles.css";

export function Title({ children, ...props }) {
  return (
    <h1 className="Title" {...props}>
      {children}
    </h1>
  );
}
