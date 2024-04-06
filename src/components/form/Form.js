import React from "react";

function Form({ label, type, formik, name }) {
  return (
    <form>
      <div className="flex flex-col">
        <label htmlFor="">{label}</label>
        <input
          className={`border rounded-xl py-1 px-3 focus:outline-none w-full ${
            formik.touched[name] && formik.errors[name] ? "border-red-500" : ""
          }`}
          type={type}
          name={name}
          id={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
    </form>
  );
}

export default Form;
