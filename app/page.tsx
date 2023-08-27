import { getAllProducts } from "@/app/api/product";
import { getAllVisitors } from "@/app/api/visitor";
import DashboardLayout from "./components/Dashboard/dashboardLayout";
import { PageProps } from "@/.next/types/app/page";


const Home = async (props: PageProps) => {
  const allProducts = await getAllProducts();
  const allVisitors = await getAllVisitors();

  return (
    <DashboardLayout products={allProducts} visitors={allVisitors} />
  )
}

export default Home;