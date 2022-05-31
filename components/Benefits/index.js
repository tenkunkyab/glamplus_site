import Card from "../Card";

const benifitsData = [
  {
    id: 1,
    imgSrc: "/icons/earth.svg",
    imgClass: "h-[150px] w-[150px] md:h-[180px] md:w-[180px] xl:h-[220px] xl:w-[220px]",
    subtitle: "Innovation for the greater good",
    subtitleClass: "w-[90%] md:w-[80%] text-[12px] md:text-[20px] xl:text-[24px]",
  },
  {
    id: 2,
    imgSrc: "/icons/key.svg",
    imgClass: "h-[150px] w-[150px] md:h-[180px] md:w-[180px] xl:h-[220px] xl:w-[220px]",
    subtitle: "Be the owner of your work",
    subtitleClass: "w-[90%] md:w-[80%] text-[12px] md:text-[20px] xl:text-[24px]",
  },
  {
    id: 3,
    imgSrc: "/icons/together.svg",
    imgClass: "h-[150px] w-[150px] md:h-[180px] md:w-[180px] xl:h-[220px] xl:w-[220px]",
    subtitle: "We are all in it together",
    subtitleClass: "w-[90%] md:w-[80%] text-[12px] md:text-[20px] xl:text-[24px]",
  },
  {
    id: 4,
    imgSrc: "/icons/growth.svg",
    imgClass: "h-[150px] w-[150px] md:h-[180px] md:w-[180px] xl:h-[220px] xl:w-[220px]",
    subtitle: "A place for us to nurture growth",
    subtitleClass: "w-[90%] md:w-[80%] text-[12px] md:text-[20px] xl:text-[24px]",
  },
];

function Benefits({ className }) {
  return (
    <div className={`flex flex-col gap-[10px] lg:gap-[20px] ${className}`}>
      {/* heading */}
      <div
        className={`m-auto w-[90%] lg:w-[70%] xl:w-[50%] flex flex-col items-center`}
      >
        <span className="componentTitle">
          BENEFITS
        </span>
        <span className="bigText text-center">Why Work With Us?</span>
      </div>
      {/*  */}
      <div
        className={`grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-[10px] md:gap-[30px] xl:gap-[124px] justify-items-center p-[10px] mx-auto`}
      >
        {benifitsData.map((benifit) => {
          return (
            <Card
              className="max-w-[300px]"
              key={benifit.id}
              imgSrc={benifit.imgSrc}
              imgClass={benifit.imgClass}
              subtitle={benifit.subtitle}
              subtitleClass={benifit.subtitleClass}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Benefits;
