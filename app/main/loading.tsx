"use client";

import { BounceLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="absolute w-screen h-screen flex items-center justify-center backdrop-blur-md top-0 left-0">
      <BounceLoader color="#7c3aed" size={100} speedMultiplier={1.5} />
    </div>
  );
}