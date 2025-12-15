import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      title: "General Questions",
      icon: "❓",
      faqs: [
        {
          question: "What is makhana?",
          answer: "Makhana, also known as fox nuts or lotus seeds, are aquatic seeds harvested from the lotus flower. They are a traditional Indian snack known for their nutritional benefits and crunchy texture."
        },
        {
          question: "Where do you source your makhana from?",
          answer: "We source our makhana directly from local farmers in Bihar, particularly from regions like Darbhanga, Madhubani, and Saharsa. We maintain direct partnerships with over 50 farmers to ensure quality and fair pricing."
        },
        {
          question: "Are your products organic?",
          answer: "Yes, all our makhana products are 100% organic. We work with certified organic farmers and our products are tested to ensure they meet organic standards."
        },
        {
          question: "What makes Magadh Makhana special?",
          answer: "Our makhana are sourced directly from Bihar farmers, processed using traditional methods, and guaranteed to be fresh and high-quality. We support local farming communities while bringing you authentic taste."
        }
      ]
    },
    {
      title: "Ordering & Shipping",
      icon: "🚚",
      faqs: [
        {
          question: "How long does delivery take?",
          answer: "We deliver within 3-5 business days across India. For major cities, we offer express delivery within 1-2 days. You'll receive tracking information once your order is shipped."
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently, we only ship within India. We're working on international shipping options and will announce them soon."
        },
        {
          question: "What are your shipping charges?",
          answer: "Shipping is FREE for orders above ₹500. For orders below ₹500, we charge ₹50 for standard delivery and ₹100 for express delivery."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, once your order is shipped, you'll receive a tracking number via SMS and email. You can track your package in real-time."
        },
        {
          question: "What if my order is damaged during shipping?",
          answer: "We take great care in packaging our products. If your order arrives damaged, please contact us immediately with photos, and we'll arrange for a replacement or refund."
        }
      ]
    },
    {
      title: "Product Information",
      icon: "🥜",
      faqs: [
        {
          question: "How should I store makhana?",
          answer: "Store makhana in an airtight container in a cool, dry place away from direct sunlight. They can be stored for up to 6 months from the manufacturing date."
        },
        {
          question: "What is the shelf life of your products?",
          answer: "Our makhana products have a shelf life of 6 months from the manufacturing date when stored properly. The manufacturing date is clearly mentioned on each package."
        },
        {
          question: "Are your products suitable for diabetics?",
          answer: "Yes, makhana have a low glycemic index and are suitable for diabetics. However, we recommend consulting with your doctor before making any dietary changes."
        },
        {
          question: "Do you offer different sizes?",
          answer: "Yes, we offer various sizes ranging from 100g to 1kg. You can choose the size that best fits your needs and budget."
        },
        {
          question: "Are your products gluten-free?",
          answer: "Yes, all our makhana products are naturally gluten-free and suitable for people with gluten sensitivities."
        }
      ]
    },
    {
      title: "Returns & Refunds",
      icon: "↩️",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer a 7-day return policy for unopened products in their original packaging. Returns must be initiated within 7 days of delivery."
        },
        {
          question: "How do I return a product?",
          answer: "Contact our customer support team with your order number and reason for return. We'll provide you with return instructions and arrange for pickup if needed."
        },
        {
          question: "How long does it take to process a refund?",
          answer: "Once we receive your returned product and verify its condition, we process refunds within 3-5 business days. The refund will reflect in your account within 7-10 business days."
        },
        {
          question: "Do you provide return shipping labels?",
          answer: "Yes, for valid returns, we provide prepaid return shipping labels. You can use these to send back the product at no cost to you."
        }
      ]
    },
    {
      title: "Payment & Billing",
      icon: "💳",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards, UPI, net banking, and digital wallets like Paytm, PhonePe, and Google Pay. We also accept cash on delivery."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We don't store your payment details on our servers."
        },
        {
          question: "Can I pay with cash on delivery?",
          answer: "Yes, we offer cash on delivery (COD) for orders above ₹200. Please note that COD charges may apply for some locations."
        },
        {
          question: "Do you offer any discounts or coupons?",
          answer: "Yes, we regularly offer discounts and promotional codes. Subscribe to our newsletter to stay updated on the latest offers and deals."
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our products, shipping, and services</p>
        </div>
      </div>

      <div className="faq-content">
        <div className="container">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h2>{category.title}</h2>
              </div>
              
              <div className="faq-items">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.has(globalIndex);
                  
                  return (
                    <div key={faqIndex} className="faq-item">
                      <button
                        className={`faq-question ${isOpen ? 'open' : ''}`}
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <span className="question-text">{faq.question}</span>
                        <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
                      </button>
                      
                      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                        <div className="answer-content">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="faq-contact">
            <div className="contact-card">
              <h3>Still have questions?</h3>
              <p>If you couldn't find the answer you're looking for, our customer support team is here to help.</p>
              <div className="contact-options">
                <a href="/contact" className="btn btn-primary">
                  Contact Us
                </a>
                <a href="mailto:support@magadhmakhana.com" className="btn btn-secondary">
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

