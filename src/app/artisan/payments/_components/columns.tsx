"use client"
 
import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
    date: string;
    type: string;
    description: string;
    amount: string;
    status: "successful" | "failed";
    id: number;
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "date",
        header: "Date"
    },
    {
        accessorKey: "type",
        header: "Type"
    },
    {
        accessorKey: "description",
        header: "Description"
    },
    {
        accessorKey: "amount",
        header: "Amount"
    },
    {
        accessorKey: "status",
        header: "Status"
    }
]