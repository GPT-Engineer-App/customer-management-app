import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchCustomerDetails = async (id) => {
  // This is a mock API call. Replace with actual API call in production.
  return {
    id,
    name: "John Doe",
    email: "john@example.com",
    joinDate: "2023-01-15",
    totalOrders: 12,
    address: "123 Main St, Anytown, USA",
    phoneNumber: "+1 (555) 123-4567"
  };
};

const CustomerView = () => {
  const { id } = useParams();
  const { data: customer, isLoading, isError } = useQuery({
    queryKey: ['customer', id],
    queryFn: () => fetchCustomerDetails(id)
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching customer details</div>;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Customer Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Name:</h3>
              <p>{customer.name}</p>
            </div>
            <div>
              <h3 className="font-semibold">Email:</h3>
              <p>{customer.email}</p>
            </div>
            <div>
              <h3 className="font-semibold">Join Date:</h3>
              <p>{customer.joinDate}</p>
            </div>
            <div>
              <h3 className="font-semibold">Total Orders:</h3>
              <p>{customer.totalOrders}</p>
            </div>
            <div>
              <h3 className="font-semibold">Address:</h3>
              <p>{customer.address}</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone Number:</h3>
              <p>{customer.phoneNumber}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-4 space-x-2">
        <Button asChild>
          <Link to={`/customers/edit/${id}`}>Edit Customer</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/customers">Back to Customer List</Link>
        </Button>
      </div>
    </div>
  );
};

export default CustomerView;