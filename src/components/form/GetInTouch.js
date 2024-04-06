import React from "react";
import Form from "./Form";
import { useFormik } from "formik";
import * as yup from "yup";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Loaction from "./Loaction";
function GetInTouch() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Full name is required"),
      email: yup
        .string()
        .email("invalid email address")
        .required("email address is required"),
      subject: yup.string().required("subject is required"),
    }),
  });
  return (
    <div className="shadow-inner space-y-10 my-10 p-5 border rounded-xl border-[#efefef]">
      <h3 className="font-bold text-2xl border-b-4 border-red-400 w-fit">
        Get in Touch
      </h3>
      <div className="w-10/12 mx-auto space-y-5 md:flex md:justify-around md:space-y-0">
        <Loaction
          logo={<MdOutlineEmail />}
          label="Email address"
          title="ali.sheikhali1998@gmail.com"
        />
        <Loaction
          logo={<IoLocationOutline />}
          label="Location"
          title="Tehran, Iran"
        />
      </div>
      <div className="flex flex-col space-y-7 w-10/12 mx-auto">
        <div className="flex flex-col w-full md:flex-row justify-start gap-5">
          <div className="relative w-6/12">
            <Form label="Your Name:" type="text" formik={formik} name="name" />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-[12px] absolute">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
          <div className="w-6/12">
            <Form
              label="Email address:"
              type="email"
              formik={formik}
              name="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-[12px] absolute">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        </div>
        <div>
          <Form label="subject:" type="text" formik={formik} name="subject" />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="text-red-500 text-[12px] absolute">
              {formik.errors.subject}
            </div>
          ) : null}
        </div>
        <textarea
          className="textarea textarea-bordered h-32"
          placeholder="Message"
        ></textarea>
      </div>
    </div>
  );
}

export default GetInTouch;
