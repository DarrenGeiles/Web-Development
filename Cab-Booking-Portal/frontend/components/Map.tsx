// frontend/components/Map.tsx
"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

type MapProps = {
  lat: number;
  lng: number;
  zoom?: number;
};

export default function Map({ lat, lng, zoom = 12 }: MapProps) {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GMAP_KEY! });

  const center = useMemo(() => ({ lat, lng }), [lat, lng]);
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap center={center} zoom={zoom} mapContainerStyle={{ width: "100%", height: "400px" }}>
      <Marker position={center} />
    </GoogleMap>
  );
}
