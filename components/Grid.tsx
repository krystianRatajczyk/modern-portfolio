import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item) => {
          return <BentoGridItem {...item} key={item.id} />;
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
