import React, { useState } from "react";
import { motion } from "framer-motion";
import LayeredTitle from "../../Components/LayeredTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const RequestAQuote = () => {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    shipment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Quote Request from ${formData.company}`;
    const body = `Company Name: ${formData.company}\nContact Person: ${formData.contact}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nShipment Details:\n${formData.shipment}`;

    // Gmail compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@transcofreight.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open Gmail compose in same browser tab
    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="w-full bg-white px-6 md:px-12 py-10">
      {/* Title Section */}
      <LayeredTitle title="REQUEST A QUOTE" />

      {/* Quote Form */}
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto space-y-6"
        id="request-form"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
            placeholder="Your company name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contact Person
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
            placeholder="Full name"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
              placeholder="123-456-7890"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Shipment Details
          </label>
          <textarea
            name="shipment"
            value={formData.shipment}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
            placeholder="Describe your shipment..."
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Attach File
          </label>
          <input
            type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700"
            disabled
          />
          <p className="text-xs text-gray-500 mt-1">
            (Note: File attachments cannot be auto‑sent via Gmail link. Please attach manually in Gmail.)
          </p>
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition"
        >
          Submit Quote Request
        </button>
      </motion.form>
    </section>
  );
};

export default RequestAQuote;
