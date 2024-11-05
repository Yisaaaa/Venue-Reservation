import { ComboBox } from "./ComboBox";

const DateFilter = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Function;
}) => {
  return (
    <input
      placeholder="Date"
      className="border-gray-300 border-2 py-1 px-2 rounded-lg"
      type="date"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default DateFilter;
