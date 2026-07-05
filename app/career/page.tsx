'use client'

import { useState, FormEvent, ChangeEvent, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Upload, X, FileText, Briefcase } from 'lucide-react'

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

export default function CareerPage() {
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
        timestamp: new Date().toISOString(),
        name: formData.name,
        number: formData.number,
        email: formData.email,
        address: formData.address,
        fileName: formData.file?.name || '',
        fileSize: formData.file ? `${(formData.file.size / 1024).toFixed(2)} KB` : '',
        fileType: formData.file?.type || '',
        source: 'Career Page'
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

  // ✅ Solid colors – icons are now visible and colorful
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
      details: ['careers@bdsoft.org', 'hr@bdsoft.org']
    },
    {
      icon: colorfulIcons[3],
      title: 'Working Hours',
      details: ['Sun - thu: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Fri: Closed']
    }
  ]

  const jobOpenings = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh',
      description: 'Build scalable web applications with React, Node.js, and cloud technologies.'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh',
      description: 'Design beautiful, user‑centric interfaces for our products and clients.'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      type: 'Part-time',
      location: 'Remote',
      description: 'Drive growth through SEO, content marketing, and social media strategies.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh',
      description: 'Automate and manage cloud infrastructure on AWS and Azure.'
    }
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative">
      {/* Background image with 10% overlay */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/contactbg.jpg')" }}
      />
      <div className="fixed inset-0 -z-10 bg-black/10" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Join Our <span className="text-tiger-orange">Team</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We&apos;re looking for passionate people to help us build amazing products. Explore our open positions and apply today.
          </p>
        </motion.div>

        {/* Job Openings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-tiger-orange" />
            Open Positions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-tiger-orange/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-tiger-orange transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">{job.department}</p>
                  </div>
                  <span className="px-3 py-1 bg-tiger-orange/20 text-tiger-orange text-xs font-medium rounded-full">
                    {job.type}
                  </span>
                </div>
                <p className="text-white/50 text-sm mt-3 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {job.location}
                </p>
                <p className="text-white/60 text-sm mt-2">{job.description}</p>
                <button
                  onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-4 text-tiger-orange hover:text-tiger-orange/80 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  Apply Now <Send className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info & Application Form */}
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
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
            id="application-form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-2">
                Submit Your Application
              </h2>
              <p className="text-white/60 mb-6">
                Fill out the form below and upload your CV. We&apos;ll get back to you within 48 hours.
              </p>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                >
                  ✓ Thank you! Your application has been submitted successfully. We&apos;ll contact you soon.
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
                    Upload Your CV *
                  </label>
                  <p className="text-white/40 text-xs mb-3">
                    Upload PDF, DOC, or DOCX. Max {MAX_FILE_SIZE / (1024 * 1024)} MB.
                  </p>
                  
                  {!formData.file ? (
                    <div className="relative">
                      <input
                        ref={fileInputRef}
                        type="file"
                        name="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/5 border-2 border-dashed border-white/20 rounded-lg text-white/60 hover:border-tiger-orange/50 hover:bg-white/10 cursor-pointer transition-all duration-300"
                      >
                        <Upload className="w-5 h-5" />
                        <span>Click to upload or drag and drop</span>
                      </label>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-3 bg-tiger-orange/10 border border-tiger-orange/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-tiger-orange" />
                        <div>
                          <p className="text-white text-sm font-medium">{formData.file.name}</p>
                          <p className="text-white/40 text-xs">
                            {(formData.file.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-white/60 hover:text-red-400" />
                      </button>
                    </div>
                  )}
                  
                  {fileError && (
                    <p className="text-red-400 text-xs mt-2">{fileError}</p>
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