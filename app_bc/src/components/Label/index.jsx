function Label(props) {
  return (
    <label
      htmlFor={props.htmlFor}
      className="block mt-2 text-sm font-bold text-white dark:text-white"
    >
      {props.text}
    </label>
  );
}

export default Label;
