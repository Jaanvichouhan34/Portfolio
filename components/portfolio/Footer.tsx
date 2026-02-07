'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jaanvichouhan18805@gmail.com',
    href: 'mailto:jaanvichouhan18805@gmail.com',
    gradient: 'from-red-500 to-orange-500' // Keeping your original colors
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8349003311',
    href: 'tel:+918349003311',
    gradient: 'from-green-500 to-emerald-500' // Keeping your original colors
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Madhya Pradesh, India',
    href: '#',
    gradient: 'from-purple-500 to-pink-500' // Keeping your original colors
  }
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/Jaanvichouhan34',
    gradient: 'from-gray-700 to-gray-900'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/jaanvi-chouhan',
    gradient: 'from-blue-600 to-blue-800'
  }
];

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative py-32 border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Work Together
            </h2>
<p className="text-gray-400 text-md mb-8">
  Have a project in mind or want to collaborate? I&apos;d love to hear from you.
  <span className="block mt-1">Let&apos;s create something amazing together.</span>
</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info & Socials */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
                {/* NEW CONTENT ADDED BELOW */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                  I&apos;m always open to discussing new opportunities, creative projects, or just having a chat about technology and design. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative group flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
                    >
                      {/* HOVER GLOW EFFECT PRESERVED */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      
                      <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-r ${info.gradient} flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="relative flex-1">
                        <p className="text-gray-400 text-xs">{info.label}</p>
                        <p className="text-white font-semibold text-sm">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                      <div className="relative w-16 h-16 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 flex items-center justify-center hover:border-gray-700 transition-all duration-300">
                        <link.icon className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

{/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 md:p-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[80px] -z-10" />
                
                <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>


                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What is this about?"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Tell me about your project or idea..."
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 outline-none transition-all resize-none placeholder:text-gray-600"
                    />
                  </div>

<motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative group overflow-hidden"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>

                  {submitStatus === 'success' && (
                    <p className="text-green-400 text-xs font-bold text-center mt-4 uppercase tracking-widest animate-pulse">
                      Message Sent Successfully!
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}