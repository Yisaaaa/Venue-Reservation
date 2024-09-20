import { useState } from "react";
import { Customer } from "./App";

const useCustomerHeap = (): [
  Customer[],
  (customer: Customer) => void,
  () => Customer,
  () => void
] => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  function add(customer: Customer) {
    setCustomers((prevCustomers) => {
      const newCustomers = [...prevCustomers, customer];
      swimUp(newCustomers.length - 1, newCustomers); // Perform swimUp on a copy of the array
      return newCustomers;
    });
  }

  function getMax(): Customer {
    return customers[0];
  }

  function swimUp(k: number, customers: Customer[]) {
    // if (customers[k].priority > customers[parent(k)].priority) {
    //   console.log("swap");
    //   swap(k, parent(k), customers);
    //   swimUp(parent(k), customers);
    // }

    if (k === 0) return; // Stop when at the root.

    const parentIdx = parent(k); // Get parent index.

    // Compare priority first, if equal, compare ids to maintain order.
    if (
      customers[k].priority > customers[parentIdx].priority ||
      (customers[k].priority === customers[parentIdx].priority &&
        customers[k].id < customers[parentIdx].id)
    ) {
      swap(k, parentIdx, customers); // Swap if needed.
      swimUp(parentIdx, customers); // Recursively swim up.
    }
  }

  function sinkDown(k: number, customers: Customer[]) {
    const { c1, c2 } = getChildren(k);
    // if (c1 < customers.length && c2 < customers.length) {
    //   if (
    //     customers[c1].priority > customers[c2].priority ||
    //     customers[c1].priority === customers[c2].priority
    //   ) {
    //     if (customers[c1].priority >= customers[k].priority) {
    //       swap(k, c1, customers);
    //       sinkDown(c1, customers);
    //     }
    //   } else {
    //     if (customers[c2].priority >= customers[k].priority) {
    //       swap(k, c2, customers);
    //       sinkDown(c2, customers);
    //     }
    //   }
    // } else if (c1 >= customers.length && c2 < customers.length) {
    //   if (customers[c2].priority >= customers[k].priority) {
    //     swap(k, c2, customers);
    //     sinkDown(c2, customers);
    //   }
    // } else if (c2 >= customers.length && c1 < customers.length) {
    //   if (customers[c1].priority >= customers[k].priority) {
    //     swap(k, c1, customers);
    //     sinkDown(c1, customers);
    //   }
    // }

    // Check if either child exists.
    if (c1 >= customers.length) return; // No children, stop recursion.

    let swapIdx = c1; // Assume left child is larger by default.

    // Compare left and right children if both exist.
    if (c2 < customers.length) {
      if (
        customers[c2].priority > customers[c1].priority ||
        (customers[c2].priority === customers[c1].priority &&
          customers[c2].id < customers[c1].id)
      ) {
        swapIdx = c2; // Use right child if it's larger or equally prioritized but older (lower id).
      }
    }

    // Compare the largest child with the current node.
    if (
      customers[swapIdx].priority > customers[k].priority ||
      (customers[swapIdx].priority === customers[k].priority &&
        customers[swapIdx].id < customers[k].id)
    ) {
      swap(k, swapIdx, customers); // Swap with the larger child.
      sinkDown(swapIdx, customers); // Recursively sink down.
    }
  }

  function getChildren(k: number): { c1: number; c2: number } {
    return { c1: 2 * k + 1, c2: 2 * k + 2 };
  }

  function swap(k1: number, k2: number, customers: Customer[]) {
    const temp = customers[k1];
    customers[k1] = customers[k2];
    customers[k2] = temp;
  }

  function parent(k: number): number {
    if (k === 0) {
      return 0;
    }
    return Math.floor((k - 1) / 2);
  }

  function removeMax() {
    if (customers.length === 0) {
      return;
    }

    setCustomers((prevCustomers): Customer[] => {
      // const last = customers.pop()!;
      // customers[0] = last;
      // sinkDown(0, customers);
      // return customers;

      const newCustomers = [...prevCustomers]; // Clone the array to avoid mutation
      const last = newCustomers.pop()!; // Remove the last element
      if (newCustomers.length > 0) {
        newCustomers[0] = last; // Replace the root with the last element
        sinkDown(0, newCustomers); // Re-heapify the array
      }
      return newCustomers;
    });
  }

  return [customers, add, getMax, removeMax];
};

export default useCustomerHeap;
