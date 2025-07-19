import React from "react";

import MediaCarts from "./MediaCarts";
import { mediaCartsData } from "../data";

function MediaCartsList() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
      {mediaCartsData.map((item) => {
        return <MediaCarts key={item.id} bg={item.bg} text={item.text} />;
      })}
    </div>
  );
}

export default MediaCartsList;
