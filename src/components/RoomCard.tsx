import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RoomCard = ({
  roomName,
  id,
  desc,
  amenities,
  capacity,
  imgSrc,
}: {
  roomName: string;
  id: string;
  desc: string;
  amenities: string[];
  capacity: number;
  imgSrc: string;
}) => {
  return (
    <Link to={`/book/${id}`}>
      <div
        id={id}
        className="rounded-xl shadow-lg pb-9 overflow-hidden cursor-pointer hover:-translate-y-4 transition-all duration-200"
      >
        <img className="w-full h-44 mb-4" src={imgSrc} alt={roomName} />
        <div className="px-6">
          <p className="text-2xl mb-2 font-bold">{roomName}</p>
          <p className="text-base mb-8">{desc}</p>
          <ul className="text-base flex flex-col gap-2">
            <li className="flex gap-2 items-center">
              <FaCheckCircle className="text-dark-primary" /> Good for{" "}
              <strong>{capacity} people</strong>
            </li>
            {amenities.map((amenity) => (
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-dark-primary" /> {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
