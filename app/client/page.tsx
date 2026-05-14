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
  fileUrl?: string
  date: string
}

export default function ApplicationsPage() {
  const [data, setData] = useState<ApplicationData[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

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
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Client Information</h1>
          <p className="text-white/60 mt-2">
            View submitted client details and CV files.
          </p>
        </div>

        {loading ? (
          <p className="text-white/60">Loading client information...</p>
        ) : data.length === 0 ? (
          <p className="text-white/60">No client information found.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
            <table className="w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Number</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Address</th>
                  <th className="p-4 text-left">CV</th>
                  <th className="p-4 text-left">Size</th>
                  <th className="p-4 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-white/10 hover:bg-white/5"
                  >
                    <td className="p-4 font-medium">{item.name}</td>
                    <td className="p-4">{item.number}</td>
                    <td className="p-4">{item.email}</td>
                    <td className="p-4">{item.address}</td>

                    <td className="p-4">
                      {item.fileUrl ? (
                        <button
                          onClick={() => setSelectedPdf(item.fileUrl!)}
                          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition"
                        >
                          View CV PDF
                        </button>
                      ) : (
                        <span className="text-white/40">
                          {item.fileName || 'No CV'}
                        </span>
                      )}
                    </td>

                    <td className="p-4">{item.fileSize}</td>
                    <td className="p-4">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selectedPdf && (
        <div className="fixed inset-0 z-50 bg-black/80 p-6">
          <div className="mx-auto h-full max-w-5xl rounded-2xl bg-white overflow-hidden">
            <div className="flex items-center justify-between bg-slate-900 px-5 py-4">
              <h2 className="font-semibold text-white">CV Preview</h2>

              <button
                onClick={() => setSelectedPdf(null)}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
              >
                Close
              </button>
            </div>

            <iframe
              src={selectedPdf}
              className="h-[calc(100%-64px)] w-full"
              title="CV PDF Preview"
            />
          </div>
        </div>
      )}
    </div>
  )
}