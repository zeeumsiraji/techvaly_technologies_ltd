'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  Type, 
  Image as ImageIcon, 
  Trash2, 
  Save, 
  Upload,
  Download,
  Undo,
  Redo,
  X,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline
} from 'lucide-react'

type ElementType = {
  id: string
  type: 'text' | 'image'
  x: number
  y: number
  width: number
  height: number
  content: string
  fontSize?: number
  color?: string
  fontFamily?: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  align?: 'left' | 'center' | 'right'
  src?: string
  rotation?: number
  opacity?: number
}

type BackgroundType = {
  type: 'color' | 'image'
  value: string
}

export default function PDFEditorPage() {
  const [elements, setElements] = useState<ElementType[]>([])
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [background, setBackground] = useState<BackgroundType>({ type: 'color', value: '#ffffff' })
  const [zoom, setZoom] = useState(1)
  const [history, setHistory] = useState<ElementType[][]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [editingText, setEditingText] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')
  const canvasRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const bgImageInputRef = useRef<HTMLInputElement>(null)

  // Save to history
  const saveToHistory = (newElements: ElementType[]) => {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(JSON.parse(JSON.stringify(newElements)))
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  // Load appointment data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('appointmentDataForPDF')
    if (savedData) {
      const appointmentData = JSON.parse(savedData)
      
      const newElements: ElementType[] = [
        {
          id: Date.now().toString(),
          type: 'text',
          x: 50,
          y: 50,
          width: 400,
          height: 40,
          content: `PATIENT APPOINTMENT LETTER`,
          fontSize: 24,
          color: '#1e3a8a',
          fontFamily: 'Arial',
          bold: true,
          italic: false,
          underline: true,
          align: 'center',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 1).toString(),
          type: 'text',
          x: 50,
          y: 120,
          width: 300,
          height: 30,
          content: `Patient Information`,
          fontSize: 18,
          color: '#3b82f6',
          fontFamily: 'Arial',
          bold: true,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 2).toString(),
          type: 'text',
          x: 50,
          y: 165,
          width: 300,
          height: 25,
          content: `Full Name: ${appointmentData.name}`,
          fontSize: 13,
          color: '#000000',
          fontFamily: 'Arial',
          bold: false,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 3).toString(),
          type: 'text',
          x: 50,
          y: 200,
          width: 300,
          height: 25,
          content: `Phone Number: ${appointmentData.phone}`,
          fontSize: 13,
          color: '#000000',
          fontFamily: 'Arial',
          bold: false,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 4).toString(),
          type: 'text',
          x: 50,
          y: 235,
          width: 400,
          height: 25,
          content: `Email Address: ${appointmentData.email}`,
          fontSize: 13,
          color: '#000000',
          fontFamily: 'Arial',
          bold: false,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 5).toString(),
          type: 'text',
          x: 50,
          y: 270,
          width: 400,
          height: 25,
          content: `Residential Address: ${appointmentData.address}`,
          fontSize: 13,
          color: '#000000',
          fontFamily: 'Arial',
          bold: false,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 6).toString(),
          type: 'text',
          x: 50,
          y: 330,
          width: 350,
          height: 30,
          content: `Appointment Details`,
          fontSize: 18,
          color: '#10b981',
          fontFamily: 'Arial',
          bold: true,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 7).toString(),
          type: 'text',
          x: 50,
          y: 375,
          width: 300,
          height: 25,
          content: `Date: ${new Date(appointmentData.appointmentDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
          fontSize: 13,
          color: '#000000',
          fontFamily: 'Arial',
          bold: false,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 8).toString(),
          type: 'text',
          x: 50,
          y: 410,
          width: 300,
          height: 25,
          content: `Time: ${appointmentData.appointmentTime}`,
          fontSize: 13,
          color: '#000000',
          fontFamily: 'Arial',
          bold: false,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 9).toString(),
          type: 'text',
          x: 50,
          y: 445,
          width: 300,
          height: 25,
          content: `Doctor: ${appointmentData.doctorName}`,
          fontSize: 13,
          color: '#000000',
          fontFamily: 'Arial',
          bold: false,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 10).toString(),
          type: 'text',
          x: 50,
          y: 480,
          width: 300,
          height: 25,
          content: `Purpose: ${appointmentData.purpose}`,
          fontSize: 13,
          color: '#000000',
          fontFamily: 'Arial',
          bold: false,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 11).toString(),
          type: 'text',
          x: 50,
          y: 515,
          width: 400,
          height: 25,
          content: `Location: ${appointmentData.location}`,
          fontSize: 13,
          color: '#000000',
          fontFamily: 'Arial',
          bold: false,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 12).toString(),
          type: 'text',
          x: 50,
          y: 580,
          width: 500,
          height: 30,
          content: `Important Instructions`,
          fontSize: 16,
          color: '#f59e0b',
          fontFamily: 'Arial',
          bold: true,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        },
        {
          id: (Date.now() + 13).toString(),
          type: 'text',
          x: 50,
          y: 625,
          width: 500,
          height: 100,
          content: `• Please arrive 15 minutes before your scheduled appointment time.\n• Bring any relevant medical records or identification.\n• If you need to reschedule, please contact us at least 24 hours in advance.\n• For any emergencies, please call our emergency hotline: +8801977173707`,
          fontSize: 12,
          color: '#000000',
          fontFamily: 'Arial',
          bold: false,
          italic: false,
          underline: false,
          align: 'left',
          rotation: 0,
          opacity: 1
        }
      ]
      
      setElements(newElements)
      saveToHistory(newElements)
      localStorage.removeItem('appointmentDataForPDF')
      
      setTimeout(() => {
        alert('✓ Appointment data loaded! You can now edit, add images, change background, and customize the letter.')
      }, 500)
    }
  }, [])

  // Undo/Redo
  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setElements(JSON.parse(JSON.stringify(history[historyIndex - 1])))
    }
  }

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      setElements(JSON.parse(JSON.stringify(history[historyIndex + 1])))
    }
  }

  // Add new element
  const addTextElement = () => {
    const newElement: ElementType = {
      id: Date.now().toString(),
      type: 'text',
      x: 100,
      y: 100,
      width: 200,
      height: 50,
      content: 'Double click to edit text',
      fontSize: 16,
      color: '#000000',
      fontFamily: 'Arial',
      bold: false,
      italic: false,
      underline: false,
      align: 'left',
      rotation: 0,
      opacity: 1
    }
    const newElements = [...elements, newElement]
    setElements(newElements)
    saveToHistory(newElements)
    setSelectedElement(newElement.id)
  }

  const addImageElement = () => {
    fileInputRef.current?.click()
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const newElement: ElementType = {
          id: Date.now().toString(),
          type: 'image',
          x: 100,
          y: 100,
          width: 200,
          height: 200,
          content: event.target?.result as string,
          src: event.target?.result as string,
          rotation: 0,
          opacity: 1
        }
        const newElements = [...elements, newElement]
        setElements(newElements)
        saveToHistory(newElements)
        setSelectedElement(newElement.id)
      }
      reader.readAsDataURL(file)
    }
  }

  // Update element
  const updateElement = (id: string, updates: Partial<ElementType>) => {
    const newElements = elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    )
    setElements(newElements)
    saveToHistory(newElements)
  }

  // Delete element
  const deleteElement = () => {
    if (selectedElement) {
      const newElements = elements.filter(el => el.id !== selectedElement)
      setElements(newElements)
      saveToHistory(newElements)
      setSelectedElement(null)
    }
  }

  // Handle mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    const element = elements.find(el => el.id === id)
    if (element) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - element.x,
        y: e.clientY - element.y
      })
      setSelectedElement(id)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && selectedElement) {
      const newX = e.clientX - dragStart.x
      const newY = e.clientY - dragStart.y
      updateElement(selectedElement, { x: newX, y: newY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Handle resize
  const handleResize = (id: string, direction: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const startX = e.clientX
    const startY = e.clientY
    const element = elements.find(el => el.id === id)
    if (!element) return

    const startWidth = element.width
    const startHeight = element.height

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX
      const deltaY = moveEvent.clientY - startY

      let newWidth = startWidth
      let newHeight = startHeight

      if (direction.includes('e')) newWidth = Math.max(50, startWidth + deltaX)
      if (direction.includes('w')) newWidth = Math.max(50, startWidth - deltaX)
      if (direction.includes('s')) newHeight = Math.max(50, startHeight + deltaY)
      if (direction.includes('n')) newHeight = Math.max(50, startHeight - deltaY)

      updateElement(id, { width: newWidth, height: newHeight })
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  // Handle double click to edit text
  const handleDoubleClick = (element: ElementType) => {
    if (element.type === 'text') {
      setEditingText(element.id)
      setEditValue(element.content)
    }
  }

  const saveTextEdit = () => {
    if (editingText) {
      updateElement(editingText, { content: editValue })
      setEditingText(null)
      setEditValue('')
    }
  }

  // Change background
  const changeBackgroundColor = (color: string) => {
    setBackground({ type: 'color', value: color })
  }

  const changeBackgroundImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setBackground({ type: 'image', value: event.target?.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  // Export as PDF
  const exportToPDF = () => {
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      alert('Please allow pop-ups to export the PDF')
      return
    }

    const html = generatePDFHTML()
    printWindow.document.write(html)
    printWindow.document.close()
    setTimeout(() => {
      printWindow.print()
    }, 500)
  }

  const generatePDFHTML = () => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Appointment Letter</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: Arial, sans-serif;
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            padding: 20px;
            background: ${background.type === 'color' ? background.value : 'transparent'};
            position: relative;
          }
          ${background.type === 'image' ? `
            body::before {
              content: '';
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: url('${background.value}');
              background-size: cover;
              background-position: center;
              opacity: 0.5;
              z-index: -1;
            }
          ` : ''}
          .page { width: 100%; min-height: 257mm; position: relative; }
          .element { position: absolute; }
          .text-element { word-wrap: break-word; overflow: hidden; }
          .image-element { object-fit: contain; }
          @media print {
            body {
              width: 210mm;
              min-height: 297mm;
              margin: 0;
              padding: 20px;
              print-color-adjust: exact;
              -webkit-print-color-adjust: exact;
            }
          }
        </style>
      </head>
      <body>
        <div class="page">
          ${elements.map(el => {
            if (el.type === 'text') {
              return `
                <div class="element text-element" style="
                  left: ${el.x}px; top: ${el.y}px;
                  width: ${el.width}px; min-height: ${el.height}px;
                  font-size: ${el.fontSize}px; color: ${el.color};
                  font-family: ${el.fontFamily};
                  font-weight: ${el.bold ? 'bold' : 'normal'};
                  font-style: ${el.italic ? 'italic' : 'normal'};
                  text-decoration: ${el.underline ? 'underline' : 'none'};
                  text-align: ${el.align};
                  transform: rotate(${el.rotation || 0}deg);
                  opacity: ${el.opacity};
                  white-space: pre-wrap;
                ">
                  ${el.content.replace(/\n/g, '<br>')}
                </div>
              `
            } else {
              return `
                <img class="element image-element" src="${el.src}" style="
                  left: ${el.x}px; top: ${el.y}px;
                  width: ${el.width}px; height: ${el.height}px;
                  transform: rotate(${el.rotation || 0}deg);
                  opacity: ${el.opacity};
                " />
              `
            }
          }).join('')}
        </div>
        <script>
          window.onload = () => { setTimeout(() => { window.print(); }, 500); };
        </script>
      </body>
      </html>
    `
  }

  const saveTemplate = () => {
    const template = {
      elements,
      background,
      createdAt: new Date().toISOString(),
      name: prompt('Enter template name:')
    }
    if (template.name) {
      localStorage.setItem(`pdf_template_${template.name}`, JSON.stringify(template))
      alert('Template saved successfully!')
    }
  }

  const loadTemplate = () => {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('pdf_template_'))
    if (keys.length === 0) {
      alert('No saved templates found')
      return
    }
    const templateName = prompt(`Available templates:\n${keys.map(k => k.replace('pdf_template_', '')).join('\n')}\n\nEnter template name to load:`)
    if (templateName) {
      const template = localStorage.getItem(`pdf_template_${templateName}`)
      if (template) {
        const parsed = JSON.parse(template)
        setElements(parsed.elements)
        setBackground(parsed.background)
        saveToHistory(parsed.elements)
        alert('Template loaded!')
      }
    }
  }

  const selected = elements.find(el => el.id === selectedElement)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toolbar */}
      <div className="fixed top-16 left-0 right-0 bg-white shadow-lg z-20 px-4 py-2">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-gray-800">Dynamic PDF Editor</h1>
            <span className="text-xs text-gray-500">Drag & Drop Editor</span>
          </div>
          
          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={undo} disabled={historyIndex <= 0} className="p-2 hover:bg-gray-100 rounded disabled:opacity-50">
              <Undo className="w-5 h-5" />
            </button>
            <button onClick={redo} disabled={historyIndex >= history.length - 1} className="p-2 hover:bg-gray-100 rounded disabled:opacity-50">
              <Redo className="w-5 h-5" />
            </button>
            <div className="w-px h-8 bg-gray-300 mx-2" />
            <button onClick={addTextElement} className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2">
              <Type className="w-4 h-4" /> Add Text
            </button>
            <button onClick={addImageElement} className="px-3 py-1.5 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-2">
              <ImageIcon className="w-4 h-4" /> Add Image
            </button>
            <div className="w-px h-8 bg-gray-300 mx-2" />
            <button onClick={saveTemplate} className="px-3 py-1.5 bg-purple-500 text-white rounded hover:bg-purple-600 flex items-center gap-2">
              <Save className="w-4 h-4" /> Save Template
            </button>
            <button onClick={loadTemplate} className="px-3 py-1.5 bg-indigo-500 text-white rounded hover:bg-indigo-600 flex items-center gap-2">
              <Upload className="w-4 h-4" /> Load Template
            </button>
            <button onClick={exportToPDF} className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 flex items-center gap-2">
              <Download className="w-4 h-4" /> Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* Property Panel */}
      {selected && (
        <div className="fixed right-4 top-24 w-80 bg-white rounded-lg shadow-lg z-20 p-4 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="flex justify-between items-center mb-4 sticky top-0 bg-white">
            <h3 className="font-semibold">Properties</h3>
            <button onClick={() => setSelectedElement(null)} className="text-gray-500">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600 block mb-1">Position X</label>
              <input type="number" value={selected.x} onChange={(e) => updateElement(selected.id, { x: parseInt(e.target.value) })} className="w-full px-2 py-1 border rounded" />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">Position Y</label>
              <input type="number" value={selected.y} onChange={(e) => updateElement(selected.id, { y: parseInt(e.target.value) })} className="w-full px-2 py-1 border rounded" />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">Width</label>
              <input type="number" value={selected.width} onChange={(e) => updateElement(selected.id, { width: parseInt(e.target.value) })} className="w-full px-2 py-1 border rounded" />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">Height</label>
              <input type="number" value={selected.height} onChange={(e) => updateElement(selected.id, { height: parseInt(e.target.value) })} className="w-full px-2 py-1 border rounded" />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">Rotation</label>
              <input type="range" min="0" max="360" value={selected.rotation || 0} onChange={(e) => updateElement(selected.id, { rotation: parseInt(e.target.value) })} className="w-full" />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">Opacity</label>
              <input type="range" min="0" max="1" step="0.1" value={selected.opacity || 1} onChange={(e) => updateElement(selected.id, { opacity: parseFloat(e.target.value) })} className="w-full" />
            </div>
            
            {selected.type === 'text' && (
              <>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Font Size</label>
                  <input type="number" value={selected.fontSize} onChange={(e) => updateElement(selected.id, { fontSize: parseInt(e.target.value) })} className="w-full px-2 py-1 border rounded" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Color</label>
                  <input type="color" value={selected.color} onChange={(e) => updateElement(selected.id, { color: e.target.value })} className="w-full h-10 border rounded" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Font Family</label>
                  <select value={selected.fontFamily} onChange={(e) => updateElement(selected.id, { fontFamily: e.target.value })} className="w-full px-2 py-1 border rounded">
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Verdana">Verdana</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => updateElement(selected.id, { bold: !selected.bold })} className={`p-2 border rounded ${selected.bold ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                    <Bold className="w-4 h-4" />
                  </button>
                  <button onClick={() => updateElement(selected.id, { italic: !selected.italic })} className={`p-2 border rounded ${selected.italic ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                    <Italic className="w-4 h-4" />
                  </button>
                  <button onClick={() => updateElement(selected.id, { underline: !selected.underline })} className={`p-2 border rounded ${selected.underline ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                    <Underline className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => updateElement(selected.id, { align: 'left' })} className={`p-2 border rounded flex-1 ${selected.align === 'left' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                    <AlignLeft className="w-4 h-4 mx-auto" />
                  </button>
                  <button onClick={() => updateElement(selected.id, { align: 'center' })} className={`p-2 border rounded flex-1 ${selected.align === 'center' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                    <AlignCenter className="w-4 h-4 mx-auto" />
                  </button>
                  <button onClick={() => updateElement(selected.id, { align: 'right' })} className={`p-2 border rounded flex-1 ${selected.align === 'right' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                    <AlignRight className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </>
            )}
            
            <button onClick={deleteElement} className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center gap-2 mt-4">
              <Trash2 className="w-4 h-4" /> Delete Element
            </button>
          </div>
        </div>
      )}

      {/* Background Panel */}
      <div className="fixed left-4 top-24 w-72 bg-white rounded-lg shadow-lg z-20 p-4">
        <h3 className="font-semibold mb-3">Background Settings</h3>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-600 block mb-1">Background Color</label>
            <input type="color" value={background.type === 'color' ? background.value : '#ffffff'} onChange={(e) => changeBackgroundColor(e.target.value)} className="w-full h-10 border rounded" />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">Background Image</label>
            <button onClick={() => bgImageInputRef.current?.click()} className="w-full py-2 border-2 border-dashed rounded hover:bg-gray-50 flex items-center justify-center gap-2">
              <Upload className="w-4 h-4" /> Upload Image
            </button>
            {background.type === 'image' && (
              <div className="mt-2">
                <img src={background.value} alt="Background" className="w-full h-32 object-cover rounded" />
                <button onClick={() => setBackground({ type: 'color', value: '#ffffff' })} className="text-xs text-red-500 mt-1">Remove Background Image</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div ref={canvasRef} className="pt-24 pb-8 px-4" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <div className="mx-auto shadow-2xl relative overflow-hidden" style={{
          width: `${800 * zoom}px`,
          minHeight: `${1131 * zoom}px`,
          backgroundColor: background.type === 'color' ? background.value : 'transparent',
          backgroundImage: background.type === 'image' ? `url(${background.value})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `scale(${zoom})`,
          transformOrigin: 'top center',
          margin: '0 auto'
        }}>
          {elements.map((element) => (
            <div key={element.id} className={`absolute cursor-move ${selectedElement === element.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`} style={{
              left: element.x * zoom,
              top: element.y * zoom,
              width: element.width * zoom,
              height: element.height * zoom,
              transform: `rotate(${element.rotation || 0}deg)`,
              opacity: element.opacity
            }} onMouseDown={(e) => handleMouseDown(e, element.id)} onDoubleClick={() => handleDoubleClick(element)}>
              {element.type === 'text' ? (
                editingText === element.id ? (
                  <textarea value={editValue} onChange={(e) => setEditValue(e.target.value)} onBlur={saveTextEdit} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); saveTextEdit(); } }} className="absolute inset-0 w-full h-full p-2 border-2 border-blue-500 bg-white z-10" style={{ fontSize: element.fontSize, fontFamily: element.fontFamily, fontWeight: element.bold ? 'bold' : 'normal', fontStyle: element.italic ? 'italic' : 'normal', textDecoration: element.underline ? 'underline' : 'none', textAlign: element.align, color: element.color }} autoFocus />
                ) : (
                  <div className="w-full h-full overflow-auto" style={{ fontSize: element.fontSize, fontFamily: element.fontFamily, fontWeight: element.bold ? 'bold' : 'normal', fontStyle: element.italic ? 'italic' : 'normal', textDecoration: element.underline ? 'underline' : 'none', textAlign: element.align, color: element.color, whiteSpace: 'pre-wrap' }}>
                    {element.content}
                  </div>
                )
              ) : (
                <img src={element.src} alt="Element" className="w-full h-full object-contain" draggable={false} />
              )}
              
              {/* Resize handles */}
              {selectedElement === element.id && !editingText && (
                <>
                  {['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se'].map((dir) => (
                    <div key={dir} className="absolute w-3 h-3 bg-blue-500 border-2 border-white rounded-full" style={{
                      ...(dir.includes('n') && { top: -6 }),
                      ...(dir.includes('s') && { bottom: -6 }),
                      ...(dir.includes('w') && { left: -6 }),
                      ...(dir.includes('e') && { right: -6 }),
                      cursor: `${dir}-resize`,
                      ...((dir === 'n' || dir === 's') && { left: '50%', transform: 'translateX(-50%)' }),
                      ...((dir === 'w' || dir === 'e') && { top: '50%', transform: 'translateY(-50%)' })
                    }} onMouseDown={(e) => handleResize(element.id, dir, e)} />
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-2 flex gap-2 z-20">
        <button onClick={() => setZoom(Math.max(0.5, zoom - 0.1))} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
        <span className="px-3 py-1">{Math.round(zoom * 100)}%</span>
        <button onClick={() => setZoom(Math.min(2, zoom + 0.1))} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
        <button onClick={() => setZoom(1)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Reset</button>
      </div>

      {/* Hidden file inputs */}
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
      <input ref={bgImageInputRef} type="file" accept="image/*" onChange={changeBackgroundImage} className="hidden" />
    </div>
  )
}