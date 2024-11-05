import { MdEventAvailable } from "react-icons/md";
import { useState } from "react";
import { writeToDb } from "@/services";
import TimeComboBox from "@/components/TimeComboBox";
import { useParams, useNavigate } from "react-router-dom";
import { Booking } from "@/interfaces";

const Reservation = ({
  bookings,
  setBookings,
}: {
  bookings: Booking[];
  setBookings: Function;
}) => {
  const roomId: string = useParams().id ?? "";

  let roomName: string;

  switch (roomId) {
    case "conference-room":
      roomName = "Conference Room";
      break;

    case "meeting-room":
      roomName = "Meeting Room";
      break;

    case "breakout-room":
      roomName = "Breakout Room";
      break;

    case "workspace":
      roomName = "Workspace";
      break;

    case "event-hall":
      roomName = "Event Hall";
      break;

    default:
      roomName = "Idk bruhh";
  }

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const field = { roomType: roomId, name, date, time };
    const id = await writeToDb(field);
    setBookings([{ ...field, id }, ...bookings]);
    setLoading(false);
    // navigate to home
    navigate("/");
  };

  return (
    <div className="">
      <div className="max-w-xl m-auto flex flex-col items-center">
        <div className="p-4 rounded-full bg-[#EDE7FA] mt-20 mb-10">
          <div className="p-2 rounded-full bg-[#E4DBF7]">
            <MdEventAvailable className="text-4xl text-[#7446D6]" />
          </div>
        </div>
        <h1 className="text-3xl font-medium mb-6">Fill up the details</h1>
        <div>
          <p className="text-gray-500 text-lg mb-8">
            Just a few paces away to reserve your room
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="font-medium text-gray-600 text-sm">
                Room Type
              </label>
              <p className="text-lg">{roomName}</p>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="font-medium text-gray-600 text-sm"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
                className="border-gray-200 border-2 rounded-md p-2 mb-3"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="font-medium text-gray-600 text-sm"
              >
                Date
              </label>
              <input
                id="name"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border-gray-200 border-2 rounded-md p-2 mb-3"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="time"
                className="font-medium text-gray-600 text-sm"
              >
                Date
              </label>
              <TimeComboBox
                value={time}
                setValue={setTime}
                roomType={roomId}
                date={date}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="py-2 bg-[#7F56DA] hover:bg-[#5427B3] cursor-pointer rounded-lg text-white font-semibold text-xl mt-10"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
