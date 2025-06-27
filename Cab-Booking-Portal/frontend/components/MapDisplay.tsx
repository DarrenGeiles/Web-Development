// frontend/components/MapDisplay.tsx
"use client";

import Map from "./Map";

export default function MapDisplay() {
  return (
    <section className="my-4">
      <h2 className="text-xl font-semibold mb-2">Trip Route</h2>
      <Map lat={19.076} lng={72.8777} zoom={12} />
      {/* Optionally add directions or additional markers */}
    </section>
  );
}
