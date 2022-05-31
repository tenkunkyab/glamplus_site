import Image from "next/image";

const impactData = [
  {
    id: 1,
    imgSrc: "/images/moneyJar.png",
    description:
      "SaaS startup Glamplus raises Rs 2Cr in pre-Series-A led by Inflection Point Ventures.",
    link: "#",
  },
  {
    id: 2,
    imgSrc: "/images/winklr.png",
    description:
      "SaaS startup Glamplus raises Rs 2Cr in pre-Series-A led by Inflection Point Ventures.",
    link: "#",
  },
  {
    id: 3,
    imgSrc: "/images/gravity.png",
    description:
      "SaaS startup Glamplus raises Rs 2Cr in pre-Series-A led by Inflection Point Ventures.",
    link: "#",
  },
 
];

function ImpactCard({ imgSrc, description, link }) {
  return (
    <div className="w-[280px] flex flex-col gap-[10px] bg-white rounded-lg shadow-lg">
      <div className="w-full h-[150px] mx-auto relative">
        <Image
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          src={imgSrc}
          layout="fill"
        />
      </div>
      <div className="w-full flex flex-col gap-[20px] px-[20px] py-[10px] pb-[20px]">
        <h3 className="text-[#263741] text-lg font-[600]">{description}</h3>
        <span className="text-[#0BACF0]">
          <a href={link || "#"}>Read More...</a>
        </span>
      </div>
    </div>
  );
}

function Impact() {
  return (
    <div className="w-full p-[10px] mx-auto flex overflow-x-auto">
      <div className="flex gap-[20px] lg:gap-[30px] mx-auto">
        {impactData.map((card) => {
          return (
            <ImpactCard
              key={card.id}
              imgSrc={card.imgSrc}
              description={card.description}
              link={card.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Impact;
