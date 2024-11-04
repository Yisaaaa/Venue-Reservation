import { FaCheckCircle } from "react-icons/fa";

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

        <div className="flex justify-between gap-4 px-20">
          <div
            id="meeting-room"
            className="rounded-xl shadow-lg pb-9 overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-200"
          >
            <img className="mb-4" src="/meeting_room.jpeg" alt="meeting room" />
            <div className="px-8">
              <p className="text-2xl mb-2 font-bold">Meeting Room</p>
              <p className="text-base mb-8">
                Small conference room with basic meeting amenities
              </p>
              <ul className="text-base flex flex-col gap-2">
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> Good for{" "}
                  <strong>5 people</strong>
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> TV Screen
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> Whiteboard
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> Wi-Fi
                </li>
              </ul>
            </div>
          </div>
          <div
            id="meeting-room"
            className="rounded-xl shadow-lg pb-9 overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-200"
          >
            <img className="mb-4" src="/meeting_room.jpeg" alt="meeting room" />
            <div className="px-8">
              <p className="text-2xl mb-2 font-bold">Meeting Room</p>
              <p className="text-base mb-8">
                Small conference room with basic meeting amenities
              </p>
              <ul className="text-base flex flex-col gap-2">
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> Good for{" "}
                  <strong>5 people</strong>
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> TV Screen
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> Whiteboard
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> Wi-Fi
                </li>
              </ul>
            </div>
          </div>
          <div
            id="meeting-room"
            className="rounded-xl shadow-lg pb-9 overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-200"
          >
            <img className="mb-4" src="/meeting_room.jpeg" alt="meeting room" />
            <div className="px-8">
              <p className="text-2xl mb-2 font-bold">Meeting Room</p>
              <p className="text-base mb-8">
                Small conference room with basic meeting amenities
              </p>
              <ul className="text-base flex flex-col gap-2">
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> Good for{" "}
                  <strong>5 people</strong>
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> TV Screen
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> Whiteboard
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-dark-primary" /> Wi-Fi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
