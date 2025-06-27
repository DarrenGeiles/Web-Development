// frontend/components/DashboardList.tsx
"use client";

import { useEffect, useState } from "react";

export default function DashboardList() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings/all`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <table className="min-w-full border border-gray-200">
      <thead>
        <tr>
          <th className="p-2 border">Booking ID</th>
          <th className="p-2 border">Company</th>
          <th className="p-2 border">Date/Time</th>
          <th className="p-2 border">Status</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((b) => (
          <tr key={b.bookingId}>
            <td className="p-2 border">{b.bookingId}</td>
            <td className="p-2 border">{b.companyName}</td>
            <td className="p-2 border">{b.date} {b.time}</td>
            <td className="p-2 border">{b.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
