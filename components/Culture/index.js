import Card from "../Card";

const cultureData = [
  {
    id: 1,
    imgSrc: "/icons/transparency.svg",
    imgClass: "w-[140px] h-[140px] sm:h-[150px] sm:w-[150px]",
    title: "We are Transparent",
    description:
      " We believe in fostering a culture of trust, transparency, quality, and meaningful autonomy.",
    descriptionClass: "text-[16px]",
  },
  {
    id: 2,
    imgSrc: "/icons/humble.svg",
    imgClass: "w-[140px] h-[140px] sm:h-[150px] sm:w-[150px]",
    title: "We are Humble",
    description:
      "We believe that teamwork makes dream work. We're not here to win personal glory, but to succeed together.",
    descriptionClass: "text-[16px]",
  },
  {
    id: 3,
    imgSrc: "/icons/learning.svg",
    imgClass: "w-[140px] h-[140px] sm:h-[150px] sm:w-[150px]",
    title: "We are Learners",
    description:
      " We're a team of relentless problem-solvers with a hunger to learn, inspire, and drive value.",
    descriptionClass: "text-[16px]",
  },
  {
    id: 4,
    imgSrc: "/icons/love.svg",
    imgClass: "w-[140px] h-[140px] sm:h-[150px] sm:w-[150px]",
    title: "We Love What We Do",
    description:
      " We are data people. We love to present our facts in a way that is clear, concise, and easy to understand.",
    descriptionClass: "text-[16px]",
  },
];

function Culture({ className }) {
  return (
    <div className={`flex flex-col gap-[20px] lg:gap-[50px] ${className}`}>
      {/* heading */}
      <div
        className={`m-auto lg:w-[80%] xl:w-[70%] flex flex-col gap-[10px] items-center`}
      >
        <span className="componentTitle">OUR VALUES</span>
        <span className="bigText text-center">
          High Growth Company with
          <br />
          People-First Culture
        </span>
      </div>
      {/*  */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-[30px] 2xl:gap-[50px] p-[10px]">
        {cultureData.map((service) => {
          return (
            <Card
              className="bg-[#FFFFFF] min-w-[280px] max-w-[350px] boxShadowSkyBlue rounded-lg"
              key={service.id}
              imgSrc={service.imgSrc}
              imgClass={service.imgClass}
              title={service.title}
              description={service.description}
              descriptionClass={service.descriptionClass}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Culture;
