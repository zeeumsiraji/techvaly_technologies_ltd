'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  ArrowLeftRight,
  Zap,
  GitBranch,
  Users,
  Brain,
  Table,
  Database,
  FileText,
  MessageSquare,
  Sparkles,
} from 'lucide-react'

const nodeData = [
  {
    id: 'salesforce',
    label: 'Lead Alerts',
    icon: Users,
    color: '#00A1E0',
    size: 54,
  },
  {
    id: 'zapier',
    label: null,
    icon: GitBranch,
    color: '#FF4F4F',
    size: 48,
  },
  {
    id: 'sheets',
    label: 'Campaign Data',
    icon: Table,
    color: '#34A853',
    size: 52,
  },
  {
    id: 'openai',
    label: 'Campaign Data',
    icon: Brain,
    color: '#10A37F',
    size: 52,
  },
  {
    id: 'hubspot',
    label: null,
    icon: Zap,
    color: '#FF7A45',
    size: 44,
  },
  {
    id: 'airtable',
    label: 'Content Calendar',
    icon: Database,
    color: '#FF6B6B',
    size: 54,
  },
  {
    id: 'notion',
    label: null,
    icon: FileText,
    color: '#000000',
    size: 48,
  },
  {
    id: 'slack',
    label: null,
    icon: MessageSquare,
    color: '#4A154B',
    size: 44,
  },
]

const positions = [
  { x: 12, y: 68 },
  { x: 20, y: 58 },
  { x: 29, y: 50 },
  { x: 38, y: 44 },
  { x: 56, y: 44 },
  { x: 65, y: 50 },
  { x: 74, y: 58 },
  { x: 82, y: 68 },
]

export default function Integrations() {
  const [rotationOffset, setRotationOffset] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen for responsive sizing
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Rotate nodes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationOffset(prev => (prev + 1) % 8)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const getNodePosition = (originalIndex: number) => {
    const rotatedIndex = (originalIndex + rotationOffset) % 8
    return positions[rotatedIndex]
  }

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200 mb-4 md:mb-6 shadow-sm">
            <ArrowLeftRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-xs font-medium text-slate-600">Integrations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3 md:mb-6">
            Connect your marketing stack
          </h2>

          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed px-4">
            Zite integrates deeply with the tools you use every day. Instantly turn
            form submissions into internal dashboards or sync data with your CRM.
          </p>
        </motion.div>

        {/* Visual Display */}
        <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] mt-8 md:mt-12 flex items-center justify-center select-none">
          {/* Arc SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF7A45" />
                <stop offset="20%" stopColor="#FF4F4F" />
                <stop offset="40%" stopColor="#00A1E0" />
                <stop offset="60%" stopColor="#10A37F" />
                <stop offset="80%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#4A154B" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.path
              d="M 10 75 Q 50 10 90 75"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="200"
              initial={{ strokeDashoffset: 200, opacity: 0.6 }}
              whileInView={{ strokeDashoffset: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              viewport={{ once: true }}
              filter="url(#glow)"
            />
            <motion.path
              d="M 10 75 Q 50 10 90 75"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="8 12"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              opacity={0.3}
            />
          </svg>

          {/* Central Badge – responsive sizing */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute z-30 bg-white rounded-full p-3 sm:p-4 shadow-[0_12px_40px_rgba(245,158,11,0.2)] border border-amber-100/50 flex items-center justify-center transform -translate-y-8 sm:-translate-y-12"
            style={{
              left: '50%',
              top: '40%',
              marginLeft: '-40px',
              marginTop: '-40px',
              width: isMobile ? '60px' : '80px',
              height: isMobile ? '60px' : '80px',
            }}
          >
            <div
              className="relative bg-amber-400 rounded-2xl flex items-center justify-center shadow-inner shadow-amber-500/20"
              style={{
                width: isMobile ? '36px' : '56px',
                height: isMobile ? '36px' : '56px',
              }}
            >
              <Sparkles
                className="text-white absolute animate-pulse"
                style={{
                  width: isMobile ? '20px' : '32px',
                  height: isMobile ? '20px' : '32px',
                }}
                strokeWidth={2}
              />
              <span
                className="text-white font-black tracking-tighter relative z-10 mix-blend-overlay"
                style={{ fontSize: isMobile ? '1.25rem' : '1.875rem' }}
              >
                Z
              </span>
            </div>
          </motion.div>

          {/* Nodes */}
          {nodeData.map((node, originalIndex) => {
            const Icon = node.icon
            const pos = getNodePosition(originalIndex)
            const rotatedIndex = (originalIndex + rotationOffset) % 8

            const ampX = 6 + (rotatedIndex % 3) * 2
            const ampY = 6 + ((rotatedIndex + 1) % 3) * 2
            const duration = 10 + (rotatedIndex % 5) * 1.2
            const phase = rotatedIndex * 0.4

            const size = isMobile ? node.size * 0.75 : node.size

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: originalIndex * 0.05 }}
                viewport={{ once: true }}
                className="absolute z-20 flex flex-col items-center group"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: 'translate(-50%, -50%)',
                  transition: 'left 1s cubic-bezier(0.4, 0, 0.2, 1), top 1s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <motion.div
                  className="flex flex-col items-center"
                  animate={{
                    x: [0, ampX, -ampX / 2, 0],
                    y: [0, -ampY / 2, ampY, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    x: { duration, repeat: Infinity, ease: 'easeInOut', delay: phase },
                    y: { duration, repeat: Infinity, ease: 'easeInOut', delay: phase },
                    scale: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: phase },
                  }}
                >
                  <div
                    className="bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100/80 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md cursor-pointer relative"
                    style={{
                      width: size,
                      height: size,
                    }}
                  >
                    <Icon
                      size={size * 0.45}
                      strokeWidth={1.8}
                      color={node.color}
                      fill={`${node.color}20`}
                    />
                  </div>

                  {node.label && (
                    <div className="mt-2 flex flex-col items-center">
                      <div className="w-1 h-1 rounded-full bg-slate-300 mb-1" />
                      <div className="bg-white/80 backdrop-blur-sm border border-slate-100 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm text-[10px] sm:text-[11px] font-medium text-slate-700 whitespace-nowrap transition-all group-hover:scale-105 group-hover:bg-white">
                        {node.label}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <button className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl hover:bg-slate-700 transition-all hover:scale-105 shadow-lg text-sm sm:text-base">
            Explore All Integrations
            <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}