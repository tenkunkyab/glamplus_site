import Card from "../Card";

const servicesData = [
  {
    id: 1,
    imgSrc: "/icons/employee.svg",
    imgClass: "h-[200px] w-[200px]",
    title: "Employee Management",
    description:
      "Create schedules, handle payroll & manage your employees stress free",
  },
  {
    id: 2,
    imgSrc: "/icons/appointments.svg",
    imgClass: "h-[200px] w-[200px]",
    title: "Appointments",
    description:
      "Effortless client booking software that functions 24X7. Now, modify, cancel and reschedule bookings super easily",
  },
  {
    id: 3,
    imgSrc: "/icons/inventory.svg",
    imgClass: "h-[200px] w-[200px]",
    title: "Inventory",
    description: "Budgeting, restocking & tracking of inventory now made easy",
  },
  {
    id: 4,
    imgSrc: "/icons/expenses.svg",
    imgClass: "h-[200px] w-[200px]",
    title: "Expenses",
    description: "Track daily & weekly expenses seamlessly",
  },
  {
    id: 5,
    imgSrc: "/icons/analytics.svg",
    imgClass: "h-[200px] w-[200px]",
    title: "Analytics",
    description:
      "User friendly interface to monitor your revenue & take better business decisions",
  },
  {
    id: 6,
    imgSrc: "/icons/campaign.svg",
    imgClass: "h-[200px] w-[200px]",
    title: "Campaign",
    description:
      "Run exclusive offers and discounts for clients to increase client loyalty",
  },
];

function Services({ className }) {
  return (
    <div className={`flex flex-col lg:gap-[30px] ${className}`}>
      {/* heading */}
      <div
        className={`m-auto lg:w-[70%] xl:w-[50%] flex justify-center`}
      >
        <span className="bigText text-center">And more....</span>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] md:gap-[30px] xl:gap-[50px] justify-items-center mx-auto p-[10px]">
        {servicesData.map((service) => {
          return (
            <Card
              className="min-w-[250px] max-w-[350px] py-[20px]"
              key={service.id}
              imgSrc={service.imgSrc}
              imgClass={service.imgClass}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
