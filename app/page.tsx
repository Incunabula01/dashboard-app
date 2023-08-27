import Dashboard from "./dashboard/page"
import { getAllProducts } from "@/app/api/product";
import { getAllVisitors } from "@/app/api/visitor";
import DashboardLayout from "./components/Dashboard/dashboardLayout";

export default async function Home() {
  const allProducts = await getAllProducts();
  const allVisitors = await getAllVisitors();

  return (
    <>
      <DashboardLayout products={allProducts} visitors={allVisitors} />
    </>
  )
}
