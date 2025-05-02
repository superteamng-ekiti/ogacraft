import React from "react";
import { columns, Payment } from "./columns";
import { DataTable } from "@/components/table/data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: 1,
      amount: "₦50,000",
      status: "successful",
      type: "Withdraw",
      description: "touching grass",
      date: "20-04-2018",
    },
    {
      id: 2,
      amount: "₦50,000",
      status: "successful",
      type: "Withdraw",
      description: "touching grass",
      date: "20-04-2018",
    },
    {
      id: 3,
      amount: "₦50,000",
      status: "successful",
      type: "Withdraw",
      description: "touching grass",
      date: "20-04-2018",
    },
    {
      id: 4,
      amount: "₦50,000",
      status: "successful",
      type: "Withdraw",
      description: "touching grass",
      date: "20-04-2018",
    },
    {
      id: 5,
      amount: "₦50,000",
      status: "successful",
      type: "Withdraw",
      description: "touching grass",
      date: "20-04-2018",
    },
    {
      id: 6,
      amount: "₦50,000",
      status: "successful",
      type: "Withdraw",
      description: "touching grass",
      date: "20-04-2018",
    },
    {
      id: 7,
      amount: "₦50,000",
      status: "successful",
      type: "Withdraw",
      description: "touching grass",
      date: "20-04-2018",
    },
  ];
}

export const History = async () => {
  const data = await getData();

  return (
    <div className="max-w-[882px] mx-auto py-6">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
