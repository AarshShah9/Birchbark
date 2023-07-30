import React from "react";
import Image from "next/image";

const ImageContainer: React.FC = () => {
  return (
    <div className={"p-5"}>
      <Image
        src={"/mbj.jpg"}
        alt={""}
        width={300}
        height={300}
        className={"rounded-md"}
      />
    </div>
  );
};

export default ImageContainer;
