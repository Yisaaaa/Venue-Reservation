import { Customer } from "@/App";

const CustomerList = ({ customers }: { customers: Customer[] }) => {
  console.log(customers);

  function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className=" w-[80%] mx-auto rounded-2xl bg-white shadow ">
      <div className="flex justify-between text-center border-b-2 border-slate-50 px-4 py-3 text-slate-400 font-bold">
        <p className="basis-36 shrink-0">Customer Name</p>
        <p className="basis-36 shrink-0">Status</p>
        <p className="basis-36 shrink-0">Payment Info</p>
        <p className="basis-36 shrink-0">Priority</p>
      </div>
      <div className="">
        {customers.map((customer: Customer) => {
          // const style =
          //   customer.priority >= 1
          //     ? "bg-red-200 border-2 border-red-800 text-red-800"
          //     : "bg-green-200 border-2 border-green-800 text-green 800";

          let style;
          let prio;
          if (customer.priority <= 1) {
            style = "bg-green-200 border-2 border-green-800 text-green-800";
            prio = "Low";
          } else if (customer.priority < 3) {
            style = "bg-orange-200 border-2 border-orange-800 text-orange-800";
            prio = "Medium";
          } else {
            style = "bg-green-200 border-2 border-green-800 text-green 800";
            prio = "High";
          }

          return (
            <div
              key={customer.id}
              className="flex justify-between text-center px-4 py-3 border-b-2 border-slate-50 font-medium"
            >
              <p className="basis-36 shrink-0">{`${customer.name} (${customer.id})`}</p>
              <p className="basis-36 shrink-0">
                {capitalizeFirstLetter(customer.status)}
              </p>
              <p className="basis-36 shrink-0">
                {capitalizeFirstLetter(customer.paymentInfo)}
              </p>
              <div className="basis-36 shrink-0">
                <p className={`${style} w-[67%] mx-auto rounded-lg`}>{prio}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerList;
