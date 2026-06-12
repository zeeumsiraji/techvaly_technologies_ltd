'use client'

import { useEffect, useState } from 'react'
import AppointmentModal from './appointment'

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyZ6YZ6hftRHFfdrzE8YX_A7KuF4cFWGrNMTKEtuvJlscuYzs7tfavTCxg2RtZao62ANA/exec'

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

export default function ApplicationsPage() {
  const [data, setData] = useState<ApplicationData[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedApplication, setSelectedApplication] = useState<ApplicationData | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Set your admin password here
  const ADMIN_PASSWORD = 'admin123' // Change this to your desired password

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError('')
      setPassword('')
      // Fetch data after authentication
      fetchData()
    } else {
      setError('Invalid password. Please try again.')
      setPassword('')
    }
  }

  const fetchData = async () => {
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL)
      const result = await res.json()
      setData(result)
    } catch (error) {
      console.error('Failed to load data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Don't fetch data until authenticated
    if (isAuthenticated) {
      fetchData()
    }
  }, [isAuthenticated])

  const handleNameOrEmailClick = (application: ApplicationData) => {
    setSelectedApplication(application)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedApplication(null)
  }

  // Show password prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Admin Access Required</h2>
            <p className="text-white/60">Please enter the password to view applications</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-tiger-orange/50"
                autoFocus
              />
            </div>
            
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}
            
            <button
              type="submit"
              className="w-full px-4 py-3 bg-tiger-orange hover:bg-tiger-orange/80 text-white font-semibold rounded-lg transition-all"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Application Data</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <p className="text-white/60">Loading data...</p>
        ) : data.length === 0 ? (
          <p className="text-white/60">No data found.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-3 text-left">Typr</th>

                  <th className="p-3 text-left">Date</th>
                  
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Number</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Address</th>
                  <th className="p-3 text-left">File</th>
                  <th className="p-3 text-left">Size</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-t border-white/10 hover:bg-white/5">
                    <td className="p-3">{item.date}</td>
                    <td 
                      className="p-3 cursor-pointer text-blue-400 hover:text-blue-300 hover:underline"
                      onClick={() => handleNameOrEmailClick(item)}
                    >
                      {item.name}
                    </td>
                    <td className="p-3">{item.number}</td>
                    <td 
                      className="p-3 cursor-pointer text-blue-400 hover:text-blue-300 hover:underline"
                      onClick={() => handleNameOrEmailClick(item)}
                    >
                      {item.email}
                    </td>
                    <td className="p-3">{item.address}</td>
                    <td className="p-3">{item.fileName}</td>
                    <td className="p-3">{item.fileSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AppointmentModal 
        isOpen={showModal}
        onClose={closeModal}
        applicationData={selectedApplication}
      />
    </div>
  )
}