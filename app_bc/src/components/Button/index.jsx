import "./styles.css";

export function Button({ children, primary, ...props }) {
  return (
    <>
      {primary ? (
        <button type="button" className="ButtonOrange" {...props}>
          {children}
        </button>
      ) : (
        <button type="button" className="ButtonGray" {...props}>
          {children}
        </button>
      )}
    </>
  );
}
