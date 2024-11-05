import { db } from "./firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  getDoc,
} from "firebase/firestore";
import { Booking } from "./interfaces";

export const generateTimeIntervals = (): string[] => {
  const allSlots = [];

  // All available slots. Starts from 9 AM to 8 PM.
  for (let start = 9; start <= 19; start++) {
    allSlots.push(`${start}:00 to ${start + 1}:00`);
  }

  return allSlots;
};

export const allSlots = generateTimeIntervals();

export const getAvailableTimes = async (roomType: string, date: string) => {
  const q = query(
    collection(db, "bookings"),
    where("roomType", "==", roomType),
    where("date", "==", date)
  );
  const snapshot = await getDocs(q);

  const takenSlots: string[] = [];
  snapshot.forEach((doc) => {
    const bookingData = doc.data();
    // Assuming bookingData.time is the booked slot in format "start:00 to end:00"
    takenSlots.push(bookingData.time); // Adjust as necessary based on your actual data structure
  });

  console.log(takenSlots);
  // Filter available slots
  const availableSlots = allSlots.filter((slot) => !takenSlots.includes(slot));

  return availableSlots;
};

export const writeToDb = async (field: {
  name: string;
  roomType: string;
  date: string;
  time: string;
}) => {
  const docRef = await addDoc(collection(db, "bookings"), field);
  console.log("write to db: " + docRef.id);

  return docRef.id;
};

export const fetchBookings = async (): Promise<Booking[]> => {
  const snapshot = await getDocs(collection(db, "bookings"));

  const bookings = snapshot.docs.map((doc) => {
    const data = doc.data() as Booking; // Cast data to Booking
    return { ...data, id: doc.id }; // Include document ID
  });
  return bookings;
};
