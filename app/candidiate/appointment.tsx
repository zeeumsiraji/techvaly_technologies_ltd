'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { generateAppointmentLetterHTML, AppointmentFormData } from './appointmentLetterUtils'

type ApplicationData = {
  name: string
  number: string
  email: string
  address: string
  fileName: string
  fileSize: string
  fileType: string
  date: string
}

interface AppointmentModalProps {
  isOpen: boolean
  onClose: () => void
  applicationData: ApplicationData | null
}

export default function AppointmentModal({ isOpen, onClose, applicationData }: AppointmentModalProps) {
  const router = useRouter()
  const [generatingPdf, setGeneratingPdf] = useState(false)
  const [sendingEmail, setSendingEmail] = useState(false)
  const [appointmentData, setAppointmentData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    appointmentDate: new Date().toISOString().split('T')[0],
    appointmentTime: '10:00 AM',
    doctorName: 'Dr. Sarah Johnson',
    purpose: 'General Checkup',
    location: 'Main Medical Center, Room 204'
  })

  // Update form when application data changes
  useEffect(() => {
    if (applicationData) {
      setAppointmentData(prev => ({
        ...prev,
        name: applicationData.name || '',
        phone: applicationData.number || '',
        email: applicationData.email || '',
        address: applicationData.address || '',
      }))
    }
  }, [applicationData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setAppointmentData(prev => ({ ...prev, [name]: value }))
  }

  // Navigate to PDF editor with appointment data
  const openPDFEditor = () => {
    // Save data to localStorage to pass to the PDF editor
    const dataToPass = {
      name: appointmentData.name,
      phone: appointmentData.phone,
      email: appointmentData.email,
      address: appointmentData.address,
      appointmentDate: appointmentData.appointmentDate,
      appointmentTime: appointmentData.appointmentTime,
      doctorName: appointmentData.doctorName,
      purpose: appointmentData.purpose,
      location: appointmentData.location
    }
    
    localStorage.setItem('appointmentDataForPDF', JSON.stringify(dataToPass))
    router.push('/candidiate/pdf-editor')
  }

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'Not specified'
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return dateString
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return dateString
    }
  }

  const sendEmail = async () => {
    if (!appointmentData.email) {
      alert('Please enter an email address')
      return
    }

    setSendingEmail(true)
    
    const emailContent = `
      Dear ${appointmentData.name},
      
      Your appointment has been scheduled.
      
      Appointment Details:
      --------------------
      Date: ${formatDate(appointmentData.appointmentDate)}
      Time: ${appointmentData.appointmentTime}
      Doctor: ${appointmentData.doctorName}
      Purpose: ${appointmentData.purpose}
      Location: ${appointmentData.location}
      
      Important Instructions:
      - Please arrive 15 minutes before your scheduled appointment time.
      - Bring any relevant medical records or identification.
      - If you need to reschedule, please contact us at least 24 hours in advance.
      
      Thank you for choosing our healthcare services.
      
      This is an automated message, please do not reply directly to this email.
    `

    try {
      const mailtoLink = `mailto:${appointmentData.email}?subject=Appointment Confirmation - ${formatDate(appointmentData.appointmentDate)}&body=${encodeURIComponent(emailContent)}`
      window.location.href = mailtoLink
      alert('Email client opened. Please send the email to confirm the appointment.')
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to open email client. Please check your email settings.')
    } finally {
      setSendingEmail(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="bg-white text-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Appointment Letter Generator</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-sm text-gray-600 mb-4">
            Fill in the appointment details below. The form is pre-filled with the selected applicant&apos;s information.
          </p>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={appointmentData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={appointmentData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={appointmentData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Residential Address</label>
                <input
                  type="text"
                  name="address"
                  value={appointmentData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Date *</label>
                <input
                  type="date"
                  name="appointmentDate"
                  value={appointmentData.appointmentDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Time *</label>
                <input
                  type="text"
                  name="appointmentTime"
                  value={appointmentData.appointmentTime}
                  onChange={handleInputChange}
                  placeholder="e.g., 10:00 AM"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Doctor&apos;s Name</label>
                <input
                  type="text"
                  name="doctorName"
                  value={appointmentData.doctorName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Visit</label>
                <input
                  type="text"
                  name="purpose"
                  value={appointmentData.purpose}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location / Department</label>
              <input
                type="text"
                name="location"
                value={appointmentData.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="flex justify-end space-x-3 pt-4 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={sendEmail}
                disabled={sendingEmail}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {sendingEmail ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Email
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={openPDFEditor}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Create Appointment Letter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}