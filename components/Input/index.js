function Input({
  label,
  multiline,
  type,
  error,
  value,
  onChange,
  onBlur,
  placeholder,
  required,
}) {
  return (
    <div className="w-full">
      <label className="block text-gray-400 sm:text-[16px] xl:text-[20px] font-bold mb-1">
        {label}
        {required && <span className="text-[20px] text-[#FA665B]">*</span>}
      </label>
      {multiline ? (
        <textarea
          className=" block w-full  text-gray-700 border  rounded-md py-3 px-4 mb-1 leading-tight focus:outline-none focus:ring focus:ring-powderblue-100"
          type={type || "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <input
          className=" block w-full  text-gray-700 border rounded-md py-3 px-4 mb-1 leading-tight focus:outline-none focus:ring focus:ring-powderblue-100"
          type={type || "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
      <p className="text-red-500  text-md">{error}</p>
    </div>
  );
}

export default Input;
