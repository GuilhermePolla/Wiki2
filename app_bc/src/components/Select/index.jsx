import "./styles.css";

function Select(props) {
  return (
    <>
      <label
        htmlFor={props.name}
        className="block mt-2 text-sm font-bold text-white dark:text-white"
      >
        {props.label}
      </label>
      <select
        id={props.name}
        name={props.name}
        className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
        style={{ width: "100%" }}
        defaultValue={props.selected}
      >
        {props.options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
