import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const CustomerManagement = () => {
  const initialCustomers = [
    { id: 1001, name: "John Doe", email: "john@example.com", joinDate: "2023-01-15", totalOrders: 12 },
    { id: 1002, name: "Jane Smith", email: "jane@example.com", joinDate: "2023-02-03", totalOrders: 8 },
    { id: 1003, name: "Bob Johnson", email: "bob@example.com", joinDate: "2023-03-21", totalOrders: 5 },
    { id: 1004, name: "Alice Brown", email: "alice@example.com", joinDate: "2023-04-07", totalOrders: 3 },
    { id: 1005, name: "Charlie Davis", email: "charlie@example.com", joinDate: "2023-05-19", totalOrders: 1 },
    { id: 1006, name: "Eva Wilson", email: "eva@example.com", joinDate: "2023-06-30", totalOrders: 7 },
    { id: 1007, name: "Frank Miller", email: "frank@example.com", joinDate: "2023-07-11", totalOrders: 4 },
    { id: 1008, name: "Grace Lee", email: "grace@example.com", joinDate: "2023-08-22", totalOrders: 6 },
    { id: 1009, name: "Henry Taylor", email: "henry@example.com", joinDate: "2023-09-14", totalOrders: 2 },
    { id: 1010, name: "Ivy Clark", email: "ivy@example.com", joinDate: "2023-10-05", totalOrders: 9 },
    { id: 1011, name: "Jack Robinson", email: "jack@example.com", joinDate: "2023-11-18", totalOrders: 11 },
    { id: 1012, name: "Karen White", email: "karen@example.com", joinDate: "2023-12-27", totalOrders: 3 },
  ];

  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(5);

  useEffect(() => {
    const filteredCustomers = initialCustomers.filter(customer => 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCustomers(filteredCustomers);
    setCurrentPage(1);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Get current customers
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            value={searchTerm}
            onChange={handleSearch}
          />
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
            {currentCustomers.map((customer) => (
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
                    asChild
                  >
                    <Link to={`/customers/view/${customer.id}`}>View</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <Link to={`/customers/edit/${customer.id}`}>Edit</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => paginate(currentPage - 1)}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {[...Array(Math.ceil(customers.length / customersPerPage)).keys()].map((number) => (
              <PaginationItem key={number + 1}>
                <PaginationLink
                  onClick={() => paginate(number + 1)}
                  isActive={currentPage === number + 1}
                >
                  {number + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                onClick={() => paginate(currentPage + 1)}
                className={currentPage === Math.ceil(customers.length / customersPerPage) ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default CustomerManagement;