import { Home, Menu, ShoppingCart, Users, BarChart2, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";
import CustomerManagement from "./pages/CustomerManagement.jsx";
import CustomerView from "./pages/CustomerView.jsx";
import CustomerEdit from "./pages/CustomerEdit.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Menu Management",
    to: "/menu",
    icon: <Menu className="h-4 w-4" />,
    page: <div>Menu Management Page</div>,
  },
  {
    title: "Order Management",
    to: "/orders",
    icon: <ShoppingCart className="h-4 w-4" />,
    page: <div>Order Management Page</div>,
  },
  {
    title: "Customer Management",
    to: "/customers",
    icon: <Users className="h-4 w-4" />,
    page: <CustomerManagement />,
  },
  {
    title: "Customer View",
    to: "/customers/view/:id",
    icon: <Users className="h-4 w-4" />,
    page: <CustomerView />,
  },
  {
    title: "Customer Edit",
    to: "/customers/edit/:id",
    icon: <Users className="h-4 w-4" />,
    page: <CustomerEdit />,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <div>Analytics Page</div>,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <div>Settings Page</div>,
  },
];