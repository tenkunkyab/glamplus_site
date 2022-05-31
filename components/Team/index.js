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
    <div
      className={`w-[100%] flex flex-col items-center p-[20px] rounded-lg gap-[25px] ${className}`}
    >
      <div
        className={`w-[200px] h-[200px] bg-[#EBF1F8] rounded-full flex flex-row justify-center items-center`}
      >
        <Image
          className="rounded-full"
          src={imgSrc}
          width={200}
          height={200}
          alt="Instagram icon"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <h1 className={`font-[500] text-[24px] text-[#263741]`}>{name}</h1>
        <h3 className={`font-[400] text-[20px] text-[#8B8B8B]`}>{role}</h3>
      </div>
    </div>
  );
}

function Team({ className }) {
  return (
    <div className={`flex flex-col gap-[50px] ${className}`}>
      {/* heading */}
      <div className={`m-auto flex justify-center`}>
        <span className="bigText">Our Team</span>
      </div>
      {/*  */}
      <div className="m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] xl:gap-[50px]  mx-auto">
        {teamData.map((member) => {
          return (
            <MemberView
              className="min-w-[250px] max-w-[320px] "
              key={member.id}
              imgSrc={member.imgSrc}
              name={member.name}
              role={member.role}
            />
          );
        })}
        {/* Join our Team */}
        <div
          className={`m-auto min-w-[250px] max-w-[320px]  flex flex-row justify-center items-center`}
        >
          <div
            className={`w-[100%] flex flex-col items-center p-[20px] rounded-lg gap-[25px]`}
          >
            <div
              className={`w-[200px] h-[200px] circularImg boxShadowSkyBlue cursor-pointer`}
            >
              <Image
                className="rounded-full w-[180px] h-[180px]"
                src={"/icons/plus.svg"}
                width={"80%"}
                height={"80%"}
                alt="Instagram icon"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className={`font-[500] text-[24px] text-[#0BACF0]`}>
                Join Our <br />
                Team
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
