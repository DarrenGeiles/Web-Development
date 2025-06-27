// frontend/app/dashboard/page.tsx
import DashboardList from "../../components/DashboardList";

export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Your Bookings</h1>
      <DashboardList />
    </main>
  );
}
