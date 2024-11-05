import { ComboBox } from "./ComboBox";
import { allSlots } from "@/services";

const TimeFilter = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Function;
}) => {
  return (
    <div className="border-gray-300 border-2 py-1 px-2 rounded-lg">
      <ComboBox
        name="Time"
        value={value}
        setValue={setValue}
        items={allSlots}
      />
    </div>
  );
};

export default TimeFilter;
