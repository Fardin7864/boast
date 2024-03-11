import Image from "next/image";

const Cards = ({content, image}) => {
  return (
    <div data-aos="zoom-in">
      <Image
        src={content}
        width={900}
        height={500}
        alt="Hero Image"
        data-aos="fade-down"
      />

      <div>
        <Image
          src={image}
          width={900}
          height={500}
          alt="Hero Image"
          data-aos="fade-down"
        />
      </div>
    </div>
  );
};

export default Cards;
