import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CustomerManagement = () => {
  const customers = [
    { id: 1001, name: "John Doe", email: "john@example.com", joinDate: "2023-01-15", totalOrders: 12 },
    { id: 1002, name: "Jane Smith", email: "jane@example.com", joinDate: "2023-02-03", totalOrders: 8 },
    { id: 1003, name: "Bob Johnson", email: "bob@example.com", joinDate: "2023-03-21", totalOrders: 5 },
    { id: 1004, name: "Alice Brown", email: "alice@example.com", joinDate: "2023-04-07", totalOrders: 3 },
    { id: 1005, name: "Charlie Davis", email: "charlie@example.com", joinDate: "2023-05-19", totalOrders: 1 },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="bg-[#2c3e50] text-[#ecf0f1] p-4 text-center mb-6">
        <h1 className="text-2xl font-bold">Customer Management</h1>
      </header>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Customer Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#ecf0f1] p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-[#2c3e50]">1,234</h3>
            <p className="text-[#7f8c8d]">Total Customers</p>
          </div>
          <div className="bg-[#ecf0f1] p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-[#2c3e50]">56</h3>
            <p className="text-[#7f8c8d]">New This Month</p>
          </div>
          <div className="bg-[#ecf0f1] p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-[#2c3e50]">78%</h3>
            <p className="text-[#7f8c8d]">Retention Rate</p>
          </div>
          <div className="bg-[#ecf0f1] p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-[#2c3e50]">$45.67</h3>
            <p className="text-[#7f8c8d]">Avg. Order Value</p>
          </div>
        </div>
        
        <div className="flex mb-4">
          <Input 
            type="text" 
            placeholder="Search customers..." 
            className="flex-grow mr-2"
          />
          <Button onClick={() => alert('Search functionality would be implemented here.')}>
            Search
          </Button>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Total Orders</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.joinDate}</TableCell>
                <TableCell>{customer.totalOrders}</TableCell>
                <TableCell>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mr-2"
                    onClick={() => alert(`View details for customer ${customer.id}`)}
                  >
                    View
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => alert(`Edit details for customer ${customer.id}`)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="flex justify-center mt-4">
          <Button variant="outline" size="sm" className="mx-1">&laquo;</Button>
          <Button variant="outline" size="sm" className="mx-1">1</Button>
          <Button variant="outline" size="sm" className="mx-1">2</Button>
          <Button variant="outline" size="sm" className="mx-1">3</Button>
          <Button variant="outline" size="sm" className="mx-1">4</Button>
          <Button variant="outline" size="sm" className="mx-1">5</Button>
          <Button variant="outline" size="sm" className="mx-1">&raquo;</Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;