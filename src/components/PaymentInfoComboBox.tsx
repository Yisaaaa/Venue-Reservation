import { ComboBox } from "./ComboBox";

export interface PaymentInfo {
  value: string;
  label: string;
}
const infos: PaymentInfo[] = [
  {
    value: "paid",
    label: "Paid",
  },
  {
    value: "not paid",
    label: "Not Paid",
  },
];

export function PaymentInfoComboBox({
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
      name={"payment info"}
      items={infos}
    />
  );
}
