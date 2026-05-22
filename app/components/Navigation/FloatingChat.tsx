'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { MessageCircle, X, Send, MoreHorizontal } from 'lucide-react'

const demoMessages = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  text: `This is demo message #${index + 1}`,
}))

export default function FloatingChat() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 p-4 text-black shadow-2xl transition-all duration-300 hover:bg-red-400"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[calc(100vh-120px)] max-h-[720px] w-[370px] flex-col overflow-hidden rounded-[35px] border border-gray-700 bg-white shadow-2xl">
          <div className="flex shrink-0 items-center justify-between border-b bg-white px-5 py-4">
            <div className="flex items-center gap-3">
              <Image
                src="/masud.png"
                alt="Masud"
                width={48}
                height={48}
                className="rounded-full object-cover"
                priority
              />

              <div>
                <h2 className="text-[28px] font-semibold leading-none text-black">
                  Masud
                </h2>
                <p className="mt-1 text-sm text-gray-500">Active 4h ago</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-500">
              <MoreHorizontal size={24} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-[#f5f5f5] p-5">
            <div>
              <div className="max-w-[300px] rounded-3xl bg-[#e9e9e9] p-5">
                <p className="text-[18px] leading-relaxed text-black">
                  If you have any questions about Softvaly, I’m here to help 🙂
                </p>
                <p className="mt-5 text-[18px] text-black">Masud</p>
              </div>

              <p className="mt-2 text-sm text-gray-500">Masud • 1h</p>
            </div>

            {demoMessages.map((message) => (
              <div key={message.id}>
                <div className="max-w-[260px] rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-gray-800">{message.text}</p>
                </div>

                <p className="mt-1 text-xs text-gray-400">Masud • now</p>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="shrink-0 border-t bg-white p-4 text-gray-500"
          >
            <div className="rounded-3xl border p-4">
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border-b pb-4 text-lg outline-none"
              />

              <div className="flex items-center justify-between pt-5">
                <input
                  type="text"
                  placeholder="Message..."
                  className="min-w-0 flex-1 text-lg outline-none"
                />

                <button
                  type="submit"
                  aria-label="Send message"
                  className="rounded-full bg-gray-200 p-3 transition-all hover:bg-blue-600 hover:text-white"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>

            <div className="mt-5 text-center text-sm text-gray-500">
              Powered by Fin
            </div>
          </form>
        </div>
      )}
    </>
  )
}