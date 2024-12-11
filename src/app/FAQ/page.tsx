'use client'; // If using Next.js 13 or later with app directory

import React from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "What types of chairs do you offer?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?"
    },
    {
      question: "Do your chairs come with a warranty?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?"
    },
    {
      question: "Can I try a chair before purchasing?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?"
    },
    {
      question: "How can we get in touch with you?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?"
    },
    {
      question: "What will be delivered? And When?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?"
    },
    {
      question: "How do I clean and maintain my Comforty chair?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?"
    },
  ];

  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </div>

      {/* FAQ Items */}
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap xl:flex-row xl:flex-wrap">
        {faqData.map((faq, index) => (
          <div
            key={index} // Use index as the key
            className="bg-gray-100 p-6 rounded-lg shadow w-full md:w-5/12 xl:w-5/12"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
