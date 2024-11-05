// import { useState } from "react";
// import { ButtonOutline, ButtonSolid } from "./components/Buttons";
// import QueueAnnouncer from "./components/QueueAnnouncer";
// import CustomerList from "./components/CustomerList";
// import useCustomerHeap from "./useCustomerHeap";
// import EnqueueDialog from "./components/EnqueueDialog";

// export interface Customer {
//   name: string;
//   status: string;
//   paymentInfo: string;
//   priority: number;
//   id: number;
// }

// const App = () => {
//   const dummy = [
//     {
//       name: "Jhon Doe",
//       status: "Regular",
//       payment: "Paid",
//       priority: 0,
//       id: 1,
//     },
//     {
//       name: "Jhon Doe",
//       status: "PWD",
//       payment: "Paid",
//       priority: 1,
//       id: 2,
//     },
//     {
//       name: "Jhon Doe",
//       status: "Senior",
//       payment: "Paid",
//       priority: 1,
//       id: 3,
//     },
//   ];

//   const [customers, add, getMax, removeMax] = useCustomerHeap();

//   return (
//     <div className="h-full bg-[#f7f9fe]">
//       <div className="h-full max-w-screen-xl mx-auto px-12">
//         <header className="flex justify-between pt-14 mb-14">
//           <h1 className="text-2xl font-medium">Customer List</h1>
//           <div className="flex gap-3">
//             <EnqueueDialog add={add} customers={customers} />

//             <ButtonSolid handleClick={() => removeMax()} text="Dequeue" />
//           </div>
//         </header>

//         <main className="">
//           <QueueAnnouncer
//             next={getMax() ? `${getMax().name} (${getMax().id})` : "None"}
//             className="mb-4"
//           />
//           <CustomerList customers={customers} />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;
import Home from "./pages/Home.tsx";
import Reservation from "./pages/Reservation.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBookings } from "./services.ts";
import { Booking } from "./interfaces.tsx";

const App = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchBookings();
      setBookings(data);
    };

    fetch();
  }, []);

  console.log(bookings);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home bookings={bookings} />} />
        <Route
          path="/book/:id"
          element={
            <Reservation bookings={bookings} setBookings={setBookings} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
