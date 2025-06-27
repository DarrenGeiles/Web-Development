// frontend/components/BookingForm.tsx
"use client";

import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    employeeName: "",
    companyName: "",
    date: "",
    time: "",
    pickupLocation: "",
    dropLocation: "",
    carType: "Sedan",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify(formData),
    });

    if (res.ok) alert("Booking sent to vendor!");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(formData).map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={(formData as any)[field]}
          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
          className="border p-2 w-full rounded"
        />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Book Cab</button>
    </form>
  );
}
