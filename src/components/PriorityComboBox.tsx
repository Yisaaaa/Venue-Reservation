import { ComboBox } from "./ComboBox";

export interface Status {
  value: string;
  label: string;
}
const priorities: Status[] = [
  {
    value: "regular",
    label: "Regular",
  },
  {
    value: "pwd",
    label: "PWD",
  },
  {
    value: "senior",
    label: "Senior",
  },
  {
    value: "vip",
    label: "VIP",
  },
];

export function PriorityComboBox({
  value,
  setValue,
}: {
  value: string;
  setValue: Function;
}) {
  return (
    <ComboBox
      value={value}
      setValue={setValue}
      name={"status"}
      items={priorities}
    />
  );
}
