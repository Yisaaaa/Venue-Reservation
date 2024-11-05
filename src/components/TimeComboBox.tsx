import React, { useEffect, useState } from "react";
import { getAvailableTimes } from "@/services";
import { ComboBox } from "./ComboBox";

const TimeComboBox = ({
  roomType,
  date,
  value,
  setValue,
}: {
  roomType: string;
  date: string;
  value: string;
  setValue: Function;
}) => {
  const [items, setItems] = useState<string[]>([]);

  console.log("render");
  useEffect(() => {
    const getFreeSlots = async () => {
      const data = await getAvailableTimes(roomType, date);
      setItems(data); // Ensure data matches the state type
    };

    getFreeSlots();
  }, [date]);

  console.log(items);

  return (
    <ComboBox items={items} name="Time" value={value} setValue={setValue} />
  );
};

export default TimeComboBox;
