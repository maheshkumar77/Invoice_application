import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import { CirclePlus } from "lucide-react";
  import Link from "next/link"; // Correct import for Next.js Link
  
  export default function Dashboard() {
    // Example data for the table
    const invoices = [
      {
        date: "10/31/2024",
        customer: "John Doe",
        email: "johndoe@example.com",
        status: "Open",
        value: "$250.00",
      },
      // Add more invoice objects here as needed
    ];
  
    return (
      <main className="flex flex-col justify-center h-full gap-6 text-center max-w-5xl mx-auto my-12">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Invoice</h1>
          <Button className="inline-flex gap-2" variant="ghost" asChild>
            <Link href="/invoices/new">
              <CirclePlus className="h-4 w-4" />
              Create Invoice
            </Link>
          </Button>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-left p-4">
                  {invoice.date}
                </TableCell>
                <TableCell className="text-left p-4">
                  {invoice.customer}
                </TableCell>
                <TableCell className="text-left p-4">
                  {invoice.email}
                </TableCell>
                <TableCell className="text-center p-4">
                  <Badge className="rounded-full">
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right p-4">
                  {invoice.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    );
  }