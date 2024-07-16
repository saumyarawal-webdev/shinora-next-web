"use client";
import { useEffect, useRef } from 'react';

const ContactUsScript = () => {
  const formRef = useRef(null);
  const submitButtonRef = useRef(null);

  useEffect(() => {
    const form = document.querySelector("#contact_form");
    const submitButton = document.querySelector("#submit");
    const scriptURL = "https://script.google.com/macros/s/AKfycbwsXy8n41d_0QQjad_dx7FIWfgkGDEsa3M3DDBXmY0dY5XAWkctvT6_NaXx0BPzX2ra/exec";

    const handleSubmit = (e) => {
      submitButton.disabled = true;
      e.preventDefault();
      let requestBody = new FormData(form);
      fetch(scriptURL, { method: "POST", body: requestBody })
        .then((response) => {
          alert("Thanks! Our team will contact you soon.");
          form.reset();
          submitButton.disabled = false;
        })
        .catch((error) => {
          alert("Error!", error.message);
          submitButton.disabled = false;
        });
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null; // This component renders nothing
};

export default ContactUsScript;
