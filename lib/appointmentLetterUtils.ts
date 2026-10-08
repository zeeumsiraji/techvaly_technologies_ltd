export interface AppointmentFormData {
  name: string
  phone: string
  email: string
  address: string
  appointmentDate: string
  appointmentTime: string
  doctorName: string
  purpose: string
  location: string
}

// Helper function to escape HTML
export const escapeHtml = (str: unknown): string => {
  const strVal = String(str ?? '')
  return strVal
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Helper function to format date
export const formatDate = (dateString: unknown): string => {
  if (!dateString) return 'Not specified'
  try {
    const date = new Date(String(dateString))
    if (isNaN(date.getTime())) return String(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return String(dateString)
  }
}

export const generateAppointmentLetterHTML = (appointmentData: AppointmentFormData) => {
  // Page 1 HTML
  const page1HTML = `
    <div class="page1">
      <div class="page">
        <div class="content">
          <div class="header">
            <div class="logo">
              <span>🏥</span>
            </div>
            <h1>Appointment Confirmation</h1>
            <p>Official Medical Appointment Schedule</p>
          </div>
          
          <div class="section patient-info">
            <h2>
              <span>👤</span>
              Patient Information
            </h2>
            <div class="info-row">
              <div class="info-label">Full Name:</div>
              <div class="info-value">${escapeHtml(appointmentData.name)}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Phone Number:</div>
              <div class="info-value">${escapeHtml(appointmentData.phone)}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Email Address:</div>
              <div class="info-value">${escapeHtml(appointmentData.email)}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Residential Address:</div>
              <div class="info-value">${escapeHtml(appointmentData.address)}</div>
            </div>
          </div>
          
          <div class="section appointment-details">
            <h2>
              <span>📅</span>
              Appointment Details
            </h2>
            <div class="info-row">
              <div class="info-label">Appointment Date:</div>
              <div class="info-value">${formatDate(appointmentData.appointmentDate)}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Appointment Time:</div>
              <div class="info-value">${escapeHtml(appointmentData.appointmentTime)}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Doctor's Name:</div>
              <div class="info-value">${escapeHtml(appointmentData.doctorName)}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Purpose of Visit:</div>
              <div class="info-value">${escapeHtml(appointmentData.purpose)}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Location/Department:</div>
              <div class="info-value">${escapeHtml(appointmentData.location)}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This is a computer-generated appointment letter. Please bring this letter on your visit.</p>
          </div>
        </div>
        <div class="page-number">Page 1 of 2</div>
      </div>
    </div>
  `

  // Page 2 HTML
  const page2HTML = `
    <div class="page2">
      <div class="page">
        <div class="content">
          <div class="header">
            <div class="logo">
              <span>📋</span>
            </div>
            <h1>Important Information</h1>
            <p>Please read carefully before your visit</p>
          </div>
          
          <div class="section instructions">
            <h2>
              <span>📌</span>
              Important Instructions
            </h2>
            <ul>
              <li>Please arrive <strong>15 minutes before</strong> your scheduled appointment time.</li>
              <li>Bring any relevant <strong>medical records, reports, or identification</strong>.</li>
              <li>If you need to reschedule, please contact us at least <strong>24 hours in advance</strong>.</li>
              <li>Bring this appointment letter with you on the day of visit.</li>
              <li>Wear a mask and maintain social distancing at the facility.</li>
              <li>Inform us if you have any <strong>allergies or medical conditions</strong> before treatment.</li>
            </ul>
          </div>
          
          <div class="section guidelines">
            <h2>
              <span>💊</span>
              Pre-Visit Guidelines
            </h2>
            <ul>
              <li>If you are taking any medications, bring the list or actual medicines.</li>
              <li>For blood tests, please come <strong>fasting for 8-10 hours</strong> if required.</li>
              <li>Carry your <strong>health insurance card</strong> (if applicable).</li>
              <li>Arrive with a <strong>valid ID proof</strong> (Passport, Driver's License, or National ID).</li>
              <li>If you have fever, cough, or cold, please inform us before coming.</li>
            </ul>
          </div>
          
          <div class="section emergency">
            <h2>
              <span>🚨</span>
              Emergency Contact
            </h2>
            <div class="info-box">
              <div class="contact-row">
                <div class="contact-label">Emergency Helpline:</div>
                <div><strong>+8801977173707</strong></div>
              </div>
              <div class="contact-row">
                <div class="contact-label">Ambulance:</div>
                <div><strong>+8801410453566</strong></div>
              </div>
              <div class="contact-row">
                <div class="contact-label">24/7 Support:</div>
                <div><strong>info@bdsoft.org</strong></div>
              </div>
            </div>
          </div>
          
          <div class="signature">
            <div class="signature-line">
              <div class="signature-item">
                <div class="signature-line-text">Patient's Signature</div>
              </div>
              <div class="signature-item">
                <div class="signature-line-text">Doctor's Signature</div>
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p>Thank you for choosing our healthcare services. We look forward to serving you!</p>
            <p>© ${new Date().getFullYear()} Healthcare Services | All Rights Reserved</p>
          </div>
        </div>
        <div class="page-number">Page 2 of 2</div>
      </div>
    </div>
  `

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Appointment Letter - ${escapeHtml(appointmentData.name)}</title>
      <meta charset="UTF-8">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Arial, sans-serif;
          width: 210mm;
          min-height: 297mm;
          margin: 0;
          padding: 20px;
          background-image: url('/candidiate/background.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          color: #1f2937;
        }
        
        @media print {
          body {
            width: 210mm;
            min-height: 297mm;
            margin: 0;
            padding: 20px;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .page-break {
            page-break-after: always;
          }
        }
        
        .page {
          width: 100%;
          min-height: 277mm;
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }
        
        .content {
          background-color: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          flex: 1;
        }
        
        .header {
          text-align: center;
          border-bottom: 3px solid #3b82f6;
          padding-bottom: 20px;
          margin-bottom: 25px;
        }
        
        .page2 .header {
          border-bottom-color: #f59e0b;
        }
        
        .header h1 {
          color: #1e3a8a;
          font-size: 28px;
          margin: 0 0 10px 0;
        }
        
        .page2 .header h1 {
          color: #92400e;
        }
        
        .header p {
          color: #4b5563;
          font-size: 14px;
        }
        
        .logo {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #3b82f6, #1e3a8a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          color: white;
          font-size: 28px;
          font-weight: bold;
        }
        
        .page2 .logo {
          background: linear-gradient(135deg, #f59e0b, #92400e);
        }
        
        .section {
          margin-bottom: 20px;
          padding: 15px;
          border-radius: 12px;
        }
        
        .patient-info {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-left: 4px solid #3b82f6;
        }
        
        .appointment-details {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border-left: 4px solid #10b981;
        }
        
        .instructions {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-left: 4px solid #f59e0b;
        }
        
        .guidelines {
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          border-left: 4px solid #10b981;
        }
        
        .emergency {
          background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
          border-left: 4px solid #ef4444;
        }
        
        .section h2 {
          color: #1e40af;
          font-size: 18px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .instructions h2 {
          color: #92400e;
        }
        
        .guidelines h2 {
          color: #065f46;
        }
        
        .emergency h2 {
          color: #991b1b;
        }
        
        .info-row {
          display: flex;
          margin-bottom: 10px;
          padding: 6px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        
        .info-label {
          font-weight: 600;
          width: 130px;
          color: #374151;
          font-size: 13px;
        }
        
        .info-value {
          flex: 1;
          color: #1f2937;
          font-size: 13px;
        }
        
        ul {
          margin-left: 20px;
          line-height: 1.8;
        }
        
        li {
          margin-bottom: 8px;
          font-size: 13px;
        }
        
        .info-box {
          background: white;
          padding: 15px;
          border-radius: 8px;
          margin-top: 15px;
        }
        
        .contact-row {
          display: flex;
          margin-bottom: 8px;
          padding: 5px;
        }
        
        .contact-label {
          font-weight: 600;
          width: 100px;
          color: #374151;
        }
        
        .footer {
          text-align: center;
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #e5e7eb;
          font-size: 11px;
          color: #6b7280;
        }
        
        .page-number {
          text-align: center;
          font-size: 11px;
          color: #6b7280;
          margin-top: 10px;
        }
        
        .signature {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px dashed #d1d5db;
        }
        
        .signature-line {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
        }
        
        .signature-item {
          text-align: center;
        }
        
        .signature-line-text {
          width: 200px;
          border-top: 1px solid #000;
          margin-top: 30px;
          padding-top: 5px;
        }
        
        .page-break {
          page-break-after: always;
        }
      </style>
    </head>
    <body>
      ${page1HTML}
      <div class="page-break"></div>
      ${page2HTML}
      <script>
        window.onload = () => {
          setTimeout(() => {
            window.print();
          }, 500);
        };
      </script>
    </body>
    </html>
  `
}