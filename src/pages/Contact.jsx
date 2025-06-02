import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_xtw1c1l",
        "template_ad5nlbn",
        formData,
        "s5ILYxXb3SiLnNIv4"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={formData.user_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          value={formData.user_email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded h-32"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
    </section>
  );
};

export default Contact;
