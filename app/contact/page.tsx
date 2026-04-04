'use client'
import { useState, FormEvent, ChangeEvent } from 'react'
import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

// Define types for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Define type for contact info - FIXED: Changed JSX.Element to React.ReactNode
interface ContactInfo {
  icon: React.ReactNode;  // ← THIS IS THE FIX
  title: string;
  details: string[];
}

// Define type for submit status
type SubmitStatus = 'success' | null;

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)

  // Fixed: Added proper type for event parameter
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Fixed: Added proper type for event parameter
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['123 Tiger Street', 'Tech Valley, SV 90210', 'United States']
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@tigerit.com', 'support@tigerit.com']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Sun: Closed']
    }
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      {/* Background with water/mirror effect */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-teal-400/10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact <span className="text-tiger-orange">Us</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch with our team today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-cyan-500/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-tiger-orange/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-tiger-orange bg-tiger-orange/10 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-white/60 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-cyan-500/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-tiger-orange transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-tiger-orange transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-tiger-orange transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-tiger-orange transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-tiger-orange transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-tiger-orange hover:bg-tiger-orange/80 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-cyan-500/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-semibold text-xl mb-4">Find Us Here</h3>
            <div className="rounded-xl overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb6b7cf%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1644262073847!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-300"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div> 
    </div>
  )
}