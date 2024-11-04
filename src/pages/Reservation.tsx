import RoomCard from "@/components/RoomCard";

const Reservation = () => {
  return (
    <div>
      <div className="bg-[#e6fcf5]">
        <div className="max-w-screen-lg m-auto pt-16 pb-24">
          <div className="w-[60%] m-auto mb-16">
            <p className="font-bold text-7xl drop-shadow-md mb-2 leading-tight text-center">
              <a
                href="#rooms"
                className="text-dark-primary hover:cursor-pointer hover:text-[#05503A] transition-all duration-150 hover:drop-shadow-2xl block"
              >
                {"> Reserve <"}
              </a>{" "}
              <span>Your Room</span>
            </p>

            <p className="text-base font-medium leading-relaxed mb-6 text-center">
              Looking for the ideal space to gather, connect, or celebrate? Our
              meeting and event rooms offer flexibility, style, and everything
              you need to create a seamless experience
            </p>
          </div>

          <img
            className="w-[80%] m-auto"
            src="/hero.png"
            alt="Collage image of different rooms"
          />
        </div>
      </div>

      <div className="max-w-screen-lg m-auto py-16">
        <p id="rooms" className="text-center text-5xl font-bold mb-28">
          In One Easy Step!
        </p>

        <div className="grid grid-cols-3 justify-between gap-4 px-20">
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
    </div>
  );
};

export default Reservation;
