import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

const ContactForm = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const templateParams = {
      name: values.firstname + " " + values.lastname,
      email: values.email,
      message: values.message,
    };
    emailjs
      .send(
        "service_email", // replace with your EmailJS service ID
        "template_email", // replace with your EmailJS template ID
        templateParams,
        "3iaFryReSvB_ano1-" // replace with your EmailJS user ID (public key)
      )
      .then(
        (result) => {
          toast.success("🚀 Message sent! Check your inbox.", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            icon: "✅",
          });
          resetForm();
          setSubmitting(false);
        },
        (error) => {
          toast.error("❌ Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            icon: "⚠️",
          });
          setSubmitting(false);
        }
      );
  };

  return (
    <div className="contact-form-content">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="name-container">
              <Field type="text" name="firstname" placeholder="First Name" />
              <ErrorMessage
                name="firstname"
                component="div"
                className="error-msg"
              />
              <Field type="text" name="lastname" placeholder="Last Name" />
              <ErrorMessage
                name="lastname"
                component="div"
                className="error-msg"
              />
            </div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error-msg" />
            <Field as="textarea" name="message" placeholder="Message" />
            <ErrorMessage name="message" component="div" className="error-msg" />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
