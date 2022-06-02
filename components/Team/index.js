import Image from "next/image";

const teamData = [
  {
    id: 1,
    imgSrc: "/images/member1.jpg",
    name: "Name",
    role: "Role",
  },
  {
    id: 2,
    imgSrc: "/images/member2.jpg",
    name: "Name",
    role: "Role",
  },
  {
    id: 3,
    imgSrc: "/images/member3.jpg",
    name: "Name",
    role: "Role",
  },
  {
    id: 4,
    imgSrc: "/images/member4.jpg",
    name: "Name",
    role: "Role",
  },
  {
    id: 5,
    imgSrc: "/images/member5.jpg",
    name: "Name",
    role: "Role",
  },
];

function MemberView({ className, imgSrc, name, role }) {
  return (
    <div className={`w-[100%] flex flex-col items-center p-[10px] rounded-lg gap-[20px] ${className}`}>
      <div
        className={`relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] xl:w-[200px] xl:h-[200px] bg-[#EBF1F8] rounded-full flex flex-row justify-center items-center`}
      >
        <Image className="rounded-full" src={imgSrc} layout="fill" alt={name} />
      </div>
      <div className="flex flex-col items-center text-center w-[100%]">
        <h1 className={`font-[500] text-[#263741] text-[18px] md:text-[24px] lg:text-[28px] xl:text-[32px] `}>
          {"Siddharth Guha"}
        </h1>
        <h3 className={`font-[500] text-[#8B8B8B] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] `}>
          {"Operations Manager"}
        </h3>
        <p className={`font-[400] text-[#8B8B8B] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px]  mt-[10px]`}>
          {"Former Cofounder of Opendoor. Early staff at Spotify and Clearbit"}
        </p>
      </div>
    </div>
  );
}

function Team({ className, cta }) {
  return (
    <div className={`flex flex-col gap-[20px] lg:gap-[50px] ${className}`}>
      {/* heading */}
      <div className={`m-auto flex justify-center`}>
        <span className="bigText">Our Team</span>
      </div>
      {/*  */}
      <div className="m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[50px] lg:gap-[100px] 2xl:gap-x-[150px] xl:gap-y-[122px] justify-items-center mx-auto">
        {teamData.map((member) => {
          return (
            <MemberView
              className="max-w-[280px] md:max-w-[320px] lg:max-w-[350px] xl:max-w-[380px]"
              key={member.id}
              imgSrc={member.imgSrc}
              name={member.name}
              role={member.role}
            />
          );
        })}
        {/* Join our Team */}
        <div
          className={`w-[100%] flex flex-col items-center p-[10px] rounded-lg gap-[20px] cursor-pointer`}
          onClick={cta}
        >
          <div
            className={`w-[150px] h-[150px] md:w-[180px] md:h-[180px] xl:w-[200px] xl:h-[200px] circularImg boxShadowSkyBlue`}
          >
            <Image className="rounded-full" src={"/icons/plus.svg"} width={"80%"} height={"80%"} alt="Instagram icon" />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-[8px] items-center text-center font-[500] text-[18px] md:text-[20px] xl:text-[24px] text-[#0BACF0]">
            <span>Join Our</span>
            <span>Team</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
