'use client'

import { useState, FormEvent, ChangeEvent, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Upload, X, FileText } from 'lucide-react'

interface FormData {
  name: string
  number: string
  email: string
  address: string
  file: File | null
}

interface ContactInfo {
  icon: React.ReactNode
  title: string
  details: string[]
}

type SubmitStatus = 'success' | 'error' | null

// IMPORTANT: Replace this with your actual Google Apps Script URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4ZfiLt1h2MsEjVazm6pUNnOzeSqJ8cDB_Xk0RZRMwWN9wxO8jYJoPuWZyZIE8q90XuA/exec"

// Maximum file size: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024
// Allowed file types
const ALLOWED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    number: '',
    email: '',
    address: '',
    file: null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [fileError, setFileError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = e.target

    if (type === 'file') {
      const file = files?.[0] || null
      
      setFileError('')
      
      if (file) {
        if (file.size > MAX_FILE_SIZE) {
          setFileError(`File size must be less than ${MAX_FILE_SIZE / (1024 * 1024)}MB`)
          if (fileInputRef.current) fileInputRef.current.value = ''
          return
        }
        
        if (!ALLOWED_FILE_TYPES.includes(file.type)) {
          setFileError('Only PDF, DOC, or DOCX files are allowed')
          if (fileInputRef.current) fileInputRef.current.value = ''
          return
        }
      }
      
      setFormData((prev) => ({
        ...prev,
        file: file
      }))
      return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (formData.file && formData.file.size > MAX_FILE_SIZE) {
      setFileError(`File size must be less than ${MAX_FILE_SIZE / (1024 * 1024)}MB`)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')
    setFileError('')

    try {
      const postData = {
        name: formData.name,
        number: formData.number,
        email: formData.email,
        address: formData.address,
        fileName: formData.file?.name || '',
        fileSize: formData.file ? `${(formData.file.size / 1024).toFixed(2)} KB` : '',
        fileType: formData.file?.type || '',
        timestamp: new Date().toISOString()
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
      })

      setSubmitStatus('success')
      
      setFormData({
        name: '',
        number: '',
        email: '',
        address: '',
        file: null
      })
      
      if (fileInputRef.current) fileInputRef.current.value = ''
      
      setTimeout(() => setSubmitStatus(null), 5000)
      
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
      
      setTimeout(() => {
        setSubmitStatus(null)
        setErrorMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, file: null }))
    if (fileInputRef.current) fileInputRef.current.value = ''
    setFileError('')
  }

  // ✅ Colorful icons – using solid colors (visible)
  const colorfulIcons = [
    <MapPin key="map" className="w-6 h-6 text-amber-400" />,
    <Phone key="phone" className="w-6 h-6 text-emerald-400" />,
    <Mail key="mail" className="w-6 h-6 text-violet-400" />,
    <Clock key="clock" className="w-6 h-6 text-blue-400" />
  ]

  const contactInfo: ContactInfo[] = [
    {
      icon: colorfulIcons[0],
      title: 'Visit Us',
      details: [' Word No-61, Adarsha Sarak, South Dania', 'Dhaka -1236', 'Bangladesh']
    },
    {
      icon: colorfulIcons[1],
      title: 'Call Us',
      details: ['+8801977173707', '+8801410453566']
    },
    {
      icon: colorfulIcons[2],
      title: 'Email Us',
      details: ['info@bdsoft.org', 'support@bdsoft.org']
    },
    {
      icon: colorfulIcons[3],
      title: 'Working Hours',
      details: ['Sun - thu: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Fri: Closed']
    }
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative">
      {/* Background image */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/contactbg.jpg')" }}
      />
      {/* Lighter overlay – reduced to 10% opacity */}
      <div className="fixed inset-0 -z-10 bg-black/10" />
      {/* Subtle gradients for depth */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact <span className="text-tiger-orange">Us</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you. Submit your information and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
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
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-tiger-orange/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-white/60 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-2">
                Submit Your Information
              </h2>
              <p className="text-white/60 mb-6">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                >
                  ✓ Thank you! Your form has been submitted successfully. We&apos;ll contact you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                >
                  ✗ {errorMessage || 'Something went wrong. Please try again.'}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-tiger-orange/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="number"
                    required
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-tiger-orange/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-tiger-orange/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, City, Country"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-tiger-orange/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">
                    Attach File <span className="text-white/40 text-xs">(PDF, DOC, DOCX • max 5MB)</span>
                  </label>
                  <div className="relative">
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="file"
                      onChange={handleChange}
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/60 flex items-center justify-between transition-all duration-300 hover:bg-white/10 hover:border-tiger-orange/30">
                      <span className="flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        {formData.file ? formData.file.name : 'Choose a file...'}
                      </span>
                      {formData.file && (
                        <button
                          type="button"
                          onClick={removeFile}
                          className="text-red-400 hover:text-red-300 transition-colors z-20 relative"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                  {fileError && (
                    <p className="text-red-400 text-sm mt-1">{fileError}</p>
                  )}
                  {formData.file && !fileError && (
                    <p className="text-emerald-400 text-sm mt-1 flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {(formData.file.size / 1024).toFixed(2)} KB — ready to upload
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-tiger-orange hover:bg-tiger-orange/80 text-white font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}