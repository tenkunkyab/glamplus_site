function validateForm(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 3) {
    errors.firstName = "Minimum 3 characters";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 3) {
    errors.lastName = "Minimum 3 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.mobileNumber) {
    errors.mobileNumber = "Required";
  } else if (!(values.mobileNumber.toString().length === 10)) {
    errors.mobileNumber = "Invalid mobile number";
  }

  if (!values.businessName) {
    errors.businessName = "Required";
  } else if (values.businessName.length < 3) {
    errors.businessName = "Minimum 3 characters";
  }

  return errors;
}

export default validateForm;
