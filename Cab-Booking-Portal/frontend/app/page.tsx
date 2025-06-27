// frontend/app/page.tsx
import Link from "next/link";
import BookingForm from "../components/BookingForm";

export default function HomePage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Cab Booking Portal</h1>
      <BookingForm />
      <p className="mt-8 text-center">
        <Link href="/auth/login" className="text-blue-600 underline">
          Employee / Vendor Login
        </Link>
      </p>
    </main>
  );
}
