import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  // -----------------------------
  // State Management
  // -----------------------------
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot field
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // Handle Input Change
  // -----------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -----------------------------
  // Validation Logic
  // -----------------------------
  const validate = (data) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!emailRegex.test(data.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // -----------------------------
  // Handle Submit
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    // Honeypot protection (bot detection)
    if (form.website) return;

    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    const validationErrors = validate(trimmedForm);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: trimmedForm.name,
          from_email: trimmedForm.email,
          message: trimmedForm.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS Success:", response);

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
        website: "",
      });

      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(error.text || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-6 text-white">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-8 rounded-xl"
        >
          {/* Honeypot Field */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 rounded outline-none"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 rounded outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 rounded outline-none"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
