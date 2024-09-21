import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { PriorityComboBox } from "./PriorityComboBox";
import { ButtonOutline } from "./Buttons";
import { PaymentInfoComboBox } from "./PaymentInfoComboBox";
import { Customer } from "@/App";

const EnqueueDialog = ({
  add,
  customers,
}: {
  add: Function;
  customers: Customer[];
}) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");

  const handleEnqueue = () => {
    if (name === "" || status === "" || paymentInfo === "") {
      return;
    }

    if (customers.length >= 3) {
      console.log("max");
      return;
    }

    let priority = 0;
    if (["pwd", "senior"].includes(status)) {
      priority++;
    }

    if (paymentInfo === "paid") {
      priority++;
    }

    if (status == "vip") {
      priority += 2;
    }

    add({ name, status, paymentInfo, priority, id: customers.length + 1 });

    setName("");
    setStatus("");
    setPaymentInfo("");
  };

  return (
    <Dialog>
      <DialogTrigger>
        <ButtonOutline text={"Enqueue"}></ButtonOutline>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className={"mb-6"}>
          <DialogTitle>Enqueue</DialogTitle>
          <DialogDescription>
            Click the enqueue button to enqueue.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="title"
              className="font-semibold text-gray-800 text-sm"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-blue-300 border-2 rounded-md p-2 mb-3"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-800 text-sm font-semibold">Status</p>
            <PriorityComboBox value={status} setValue={setStatus} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-800 text-sm font-semibold">Payment Info</p>
            <PaymentInfoComboBox
              value={paymentInfo}
              setValue={setPaymentInfo}
            />
          </div>
          <DialogClose className="text-white bg-blue-700 rounded-md font-semibold  hover:bg-blue-600 active:bg-blue-500 transition-all duration-150 ml-auto">
            <p onClick={handleEnqueue} className="w-full h-full px-4 py-2">
              Add
            </p>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnqueueDialog;
