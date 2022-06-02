import Image from "next/image";

function Card({
  className,
  imgSrc,
  imgClass,
  title,
  titleClass,
  subtitle,
  subtitleClass,
  description,
  descriptionClass,
}) {
  return (
    <div
      className={`w-[100%] flex flex-col items-center  px-[15px] py-[20px] rounded-lg gap-[25px] ${className}`}
    >
      {/* image */}
      <div
        className={`circularImg w-[200px] h-[200px] bg-[#EBF1F8] ${imgClass}`}
      >
        <Image src={imgSrc} width={"80%"} height={"80%"} alt={title} />
      </div>
      {/* text */}
      <div className="flex flex-col items-center text-center gap-[15px]">
        {title && (
          <h1
            className={`font-[500] text-[16px] lg:text-[22px] xl:text-[24px] ${titleClass}`}
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <h1 className={`font-[500] lg:leading-7 ${subtitleClass}`}>
            {subtitle}
          </h1>
        )}
        {description && (
          <span
            className={`font-[400] text-[12px] lg:text-[16px] ${descriptionClass}`}
          >
            {description}
          </span>
        )}
      </div>
    </div>
  );
}

export default Card;
