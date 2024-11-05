import Bookings from "@/components/Bookings";
import RoomCard from "@/components/RoomCard";
import { Booking } from "@/interfaces";
import { RiShining2Fill } from "react-icons/ri";

type roomType =
  | "meeting-room"
  | "breakout-room"
  | "conference-room"
  | "workspace"
  | "event-hall";

const Home = ({ bookings }: { bookings: Booking[] }) => {
  const handleReserveRoom = (e: Event) => {};

  return (
    <div>
      <div className="bg-[#E0F7FA]">
        <div className="max-w-screen-lg m-auto pt-16 pb-20">
          <div className="m-auto mb-20">
            <p className="font-['Playfair_Display'] w-[60%] m-auto font-bold text-7xl drop-shadow-md mb-6 leading-tight text-center [word-spacing:14px]">
              <span className="inline-flex items-baseline gap-6">
                <span className="text-[#9C27B0]">Reserve</span> Your
                <RiShining2Fill className="text-5xl" />
              </span>
              <span className="inline-flex items-baseline gap-6">
                <RiShining2Fill className="text-5xl" />
                <span> Room </span> Today!
              </span>
            </p>

            <p className="w-[70%] m-auto text-lg font-medium leading-loose ">
              Looking for the ideal space to gather, connect, or celebrate?{" "}
              <br /> Our meeting and event rooms offer flexibility, style, and
              everything you need to create a seamless experience
            </p>
          </div>

          <img
            className="w-[80%] m-auto"
            src="/hero.png"
            alt="Collage image of different rooms"
          />
        </div>
      </div>

      <div className="max-w-screen-lg m-auto pt-10 pb-16">
        <p id="rooms" className="text-center text-5xl font-bold mb-24">
          In One Easy Step!
        </p>

        <div className="grid grid-cols-3 items-stretch justify-between gap-4 px-20">
          <RoomCard
            id="meeting-room"
            roomName="Meeting Room"
            capacity={5}
            imgSrc="/meeting_room.jpeg"
            amenities={["TV Screen", "Whiteboard", "Wi-Fi"]}
            desc="A compact space suitable for small group discussions"
          />

          <RoomCard
            id="breakout-room"
            roomName="Breakout Room"
            imgSrc="/breakout_room.jpg"
            capacity={8}
            desc="A cozy space ideal for brainstorming sessions with your team"
            amenities={[
              "Couch Seating",
              "Whiteboard",
              "Wi-Fi",
              "Coffee Station",
            ]}
          />

          <RoomCard
            id="conference-room"
            roomName="Conference Room"
            capacity={10}
            imgSrc="/conference_room.jpeg"
            amenities={["TV & Projector", "Whiteboard", "Wi-Fi"]}
            desc="Small conference room with basic meeting amenities"
          />
        </div>

        <p className="text-center text-5xl font-bold my-28">
          Need a bigger space?
        </p>

        <div className="grid grid-cols-2 justify-between gap-4 px-60">
          <RoomCard
            roomName="Workspace"
            id="workspace"
            imgSrc="/workspace.jpg"
            capacity={20}
            desc="Medium-sized room equipped for hands-on workshops and activites"
            amenities={["Workbenches", "Power Outlets", "Projector,", "Wi-Fi"]}
          />

          <RoomCard
            id="event-hall"
            roomName="Event Hall"
            capacity={50}
            imgSrc="event_hall.jpeg"
            desc="A larger event space perfect for presentations and performances"
            amenities={["Stage", "Sound System", "Wi-Fi", "Lighting"]}
          />
        </div>
      </div>

      <div className="pt-16 pb-96 max-w-screen-lg m-auto">
        <h2 className="text-center text-5xl font-bold mb-16">
          List of Reservations
        </h2>
        <Bookings bookings={bookings} />
      </div>
    </div>
  );
};

export default Home;
