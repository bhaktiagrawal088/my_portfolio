import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.form-group',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.contact-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');

    // Button animation
    gsap.to(submitBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    setIsLoading(true);

    const formData = new FormData(form);
    formData.append("access_key", "e55a579f-5c7d-48f7-bec4-b7a0861c37cf"); // your Web3Forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setIsLoading(false);

      if (data.success) {
        setIsSubmitted(true);

        // GSAP success animation
        gsap.fromTo('.success-message',
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
        );

        form.reset();
      } else {
        alert("Something went wrong: " + data.message);
      }
    } catch (error) {
      setIsLoading(false);
      alert("Error submitting form: " + error.message);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'bhaktiagrawal088@gmail.com'
    },
   
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'India'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold text-center text-white mb-16"
        >
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            {!isSubmitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <FormField label="Name" type="text" placeholder="Your full name" required />
                <FormField label="Email" type="email" placeholder="your.email@example.com" required />
                <FormField label="Subject" type="text" placeholder="What's this about?" required />
                <FormField label="Message" type="textarea" placeholder="Tell me about your project..." required />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="submit-btn group w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="success-message text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon!</p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ready to bring your ideas to life? Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <ContactItem key={index} item={item} />
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <SocialButton href="https://github.com/bhaktiagrawal088" label="GitHub" />
                <SocialButton href="https://www.linkedin.com/in/bhakti-agrawal-a88b51214/" label="LinkedIn" />
                <SocialButton href="https://www.instagram.com/bhakti__agrawal06/?next=%2F" label="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({ label, type, placeholder, required }) => {
  const fieldRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      const handleFocus = () => {
        gsap.to(fieldRef.current, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleBlur = () => {
        gsap.to(fieldRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);

      return () => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      };
    }
  }, []);

  const InputComponent = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div ref={fieldRef} className="form-group">
      <label className="block text-white font-medium mb-2">
        {label} {required && <span className="text-purple-400">*</span>}
      </label>
      <InputComponent
        ref={inputRef}
        type={type !== 'textarea' ? type : undefined}
        placeholder={placeholder}
        required={required}
        rows={type === 'textarea' ? 4 : undefined}
        className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
      />
    </div>
  );
};

const ContactItem = ({ item }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const element = itemRef.current;
    if (element) {
      const handleMouseEnter = () => {
        gsap.to(element, { x: 10, duration: 0.3 });
      };
      const handleMouseLeave = () => {
        gsap.to(element, { x: 0, duration: 0.3 });
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div ref={itemRef} className="contact-item flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors duration-300">
      <div className="text-purple-400">
        {item.icon}
      </div>
      <div>
        <div className="text-sm text-gray-400">{item.label}</div>
        <div className="text-white font-medium">{item.value}</div>
      </div>
    </div>
  );
};

const SocialButton = ({ href, label }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.1, duration: 0.3 });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3 });
      });
    }
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 bg-gray-800/50 text-white rounded-full hover:bg-purple-600/50 transition-colors duration-300"
    >
      {label}
    </a>
  );
};

export default Contact;
