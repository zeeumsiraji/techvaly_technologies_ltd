'use client'

import { useEffect, useState } from 'react'

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

  useEffect(() => {
    const getData = async () => {
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

    getData()
  }, [])

  return (
    <div className="min-h-screen px-6 py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Application Data
        </h1>

        {loading ? (
          <p className="text-white/60">Loading data...</p>
        ) : data.length === 0 ? (
          <p className="text-white/60">No data found.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Number</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Address</th>
                  <th className="p-3 text-left">File</th>
                  <th className="p-3 text-left">Size</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-white/10 hover:bg-white/5"
                  >
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.number}</td>
                    <td className="p-3">{item.email}</td>
                    <td className="p-3">{item.address}</td>
                    <td className="p-3">{item.fileName}</td>
                    <td className="p-3">{item.fileSize}</td>
                    <td className="p-3">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}