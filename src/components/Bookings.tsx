import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Booking } from "@/interfaces";
import { useState } from "react";
import DateFilter from "./DateFilter";
import RoomTypeFilter from "./RoomTypeFilter";
import TimeFilter from "./TimeFilter";
import { IoFilterSharp } from "react-icons/io5";

const Bookings = ({ bookings }: { bookings: Booking[] }) => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState("");

  let filteredBooking: Booking[] = [];
  let hasFilter = false;

  if (roomTypeFilter != "") {
    if (filteredBooking.length == 0 && !hasFilter) {
      filteredBooking = bookings.filter(
        (booking) => booking.roomType == roomTypeFilter
      );
    } else {
      filteredBooking = filteredBooking.filter(
        (booking) => booking.roomType == roomTypeFilter
      );
    }

    hasFilter = true;
  }

  if (dateFilter != "") {
    if (filteredBooking.length == 0 && !hasFilter) {
      filteredBooking = bookings.filter(
        (booking) => booking.date == dateFilter
      );
    } else {
      filteredBooking = filteredBooking.filter(
        (booking) => booking.date == dateFilter
      );
    }

    hasFilter = true;
  }

  if (timeFilter != "") {
    if (filteredBooking.length == 0 && !hasFilter) {
      filteredBooking = bookings.filter(
        (booking) => booking.time == timeFilter
      );
    } else {
      filteredBooking = filteredBooking.filter(
        (booking) => booking.time == timeFilter
      );
    }

    hasFilter = true;
  }

  bookings = hasFilter ? filteredBooking : bookings;

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <IoFilterSharp className="text-2xl text-[#431F8F]" />
        <RoomTypeFilter value={roomTypeFilter} setValue={setRoomTypeFilter} />
        <DateFilter value={dateFilter} setValue={setDateFilter} />
        <TimeFilter value={timeFilter} setValue={setTimeFilter} />
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] text-xl font-semibold">
              ID
            </TableHead>
            <TableHead className="text-lg font-semibold">Name</TableHead>
            <TableHead className="text-lg font-semibold">Room Type</TableHead>
            <TableHead className="text-lg font-semibold">Date</TableHead>
            <TableHead className="text-lg font-semibold">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow> */}
          {bookings.map((booking) => {
            return (
              <TableRow>
                <TableCell className="font-medium">
                  {booking.id.substring(0, 6)}
                </TableCell>
                <TableCell className="text-lg">{booking.name}</TableCell>
                <TableCell className="text-lg">{booking.roomType}</TableCell>
                <TableCell className="text-lg">{booking.date}</TableCell>
                <TableCell className="text-lg">{booking.time}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Bookings;
