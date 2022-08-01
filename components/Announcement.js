import React from "react";
import { TruckIcon } from "@heroicons/react/outline";

const Announcement = () => {
  return (
    <div className="max-h-10 py-1.5 px-5 bg-gray-300">
      <div className="flex justify-center gap-x-2">
        <TruckIcon className="h-5 w-5 text-black" />
        <span>
          ENVÍO GRATIS a todo Colombia por compras superiores a $160.000.
        </span>
      </div>
    </div>
  );
};

export default Announcement;
