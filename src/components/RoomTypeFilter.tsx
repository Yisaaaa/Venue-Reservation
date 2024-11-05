import { ComboBox } from "./ComboBox";

const RoomTypeFilter = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Function;
}) => {
  const types: string[] = [
    "conference-room",
    "meeting-room",
    "breakout-room",
    "workspace",
    "event-hall",
  ];

  return (
    <div className="border-gray-300 border-2 py-1 px-2 rounded-lg">
      <ComboBox
        name="Room Type"
        value={value}
        setValue={setValue}
        items={types}
      />
    </div>
  );
};

export default RoomTypeFilter;
