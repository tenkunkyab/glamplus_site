import React, { useState } from "react";
import { useFormik } from "formik";
import validateForm from "./validateForm";
import Input from "../Input";
import useWindowSize from "../../utils/useWindowSize";

function ContactForm({ className }) {
  const { width } = useWindowSize();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      businessName: "",
      note: "",
    },
    validate: validateForm,
    onSubmit: (values, { resetForm }) => {
      let body = "Hello,\nKindly reach out to the below details\n";
      body += Object.entries(values).map((item) => `\n${item[0]} : ${item[1]}`);
      window
        .open(
          "mailto:cx@glamplus.in?subject=" +
            encodeURIComponent("New Client interested") +
            "&body=" +
            encodeURIComponent(body),
          "_blank"
        )
        .focus();
      resetForm();
    },
  });

  return (
    <div className={`w-full flex flex-col gap-[20px] lg:gap-[50px] ${className}`}>
      {/* heading */}
      <div className={`m-auto flex justify-center`}>
        <span className="bigText text-center">Still have more questions?</span>
      </div>
      {/* form */}
      <div className={`w-full flex flex-col lg:flex-row rounded-lg boxShadow `}>
        <div
          className="w-[100%] lg:w-[30%] bg-black text-white p-[30px]"
          style={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: width >= 1100 ? "10px" : "0px",
            borderTopRightRadius: width < 1100 ? "10px" : "0px",
          }}
        >
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[60px] font-[500] mb-4">
            Contact Us
          </h1>
          <span className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
            Just write to us if you have any questions or remarks.
          </span>
        </div>
        <div className="w-[100%] lg:w-[70%] bg-white py-[20px] px-[20px] md:px-[50px] rounded-b-lg lg:rounded-r-lg">
          <div className="py-[20px] grid gap-[20px] md:gap-[50px] grid-cols-1 md:grid-cols-2  mx-auto  text-gray-900">
            <Input
              type="text"
              label="First Name"
              required={true}
              placeholder="Enter your first name"
              value={formik.values.firstName}
              onChange={formik.handleChange("firstName")}
              onBlur={formik.handleBlur("firstName")}
              error={formik.touched.firstName && formik.errors.firstName}
            />
            <Input
              type="text"
              label="Last Name"
              required={true}
              placeholder="Enter your last name"
              value={formik.values.lastName}
              onChange={formik.handleChange("lastName")}
              onBlur={formik.handleBlur("lastName")}
              error={formik.touched.lastName && formik.errors.lastName}
            />
            <Input
              type="email"
              label="Email"
              required={true}
              placeholder="Enter your email address"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              error={formik.touched.email && formik.errors.email}
            />
            <Input
              type="number"
              label="Mobile Number"
              required={true}
              placeholder="Enter your mobile number"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange("mobileNumber")}
              onBlur={formik.handleBlur("mobileNumber")}
              error={formik.touched.mobileNumber && formik.errors.mobileNumber}
            />
            <Input
              type="text"
              label="Business Name"
              required={true}
              placeholder="Enter your business name"
              value={formik.values.businessName}
              onChange={formik.handleChange("businessName")}
              onBlur={formik.handleBlur("businessName")}
              error={formik.touched.businessName && formik.errors.businessName}
            />
            <Input
              multiline
              type="text"
              label="Leave a note"
              placeholder="Feel free to add details that will help us respond better"
              value={formik.values.note}
              onChange={formik.handleChange("note")}
            />
          </div>
          <div className="w-[100%] flex flex-row justify-items-center mt-[50px] mb-[30px]">
            <button type="submit" className="button mx-auto  w-full" onClick={formik.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
