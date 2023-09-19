import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here, you can use a service or library (e.g., Axios) to send the email.
    // Replace the following code with your email sending logic.

    try {
      // Replace with your email sending logic
      const response = await fetch('/your-email-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        alert('Email sent successfully!');
      } else {
        alert('Email could not be sent. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <div className='mt-16 pt-4 pb-32 w-full px-4 mx-auto sm:max-w-[75rem] bg-gray-100 rounded-sm'>
      <h2 className="text-2xl font-bold  mb-12  text-blue-500">Contact Us</h2>
    <div id='contact' className=" max-w-2xl mx-auto p-4 bg-white rounded shadow-lg">
      
      <form onSubmit={handleSubmit} className=" bg-gray-100">
        <div className="mb-4 ">
          <label className="block text-gray-600">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Send
        </button>
      </form>
      </div>
      </div>
  );
}

export default ContactForm;
