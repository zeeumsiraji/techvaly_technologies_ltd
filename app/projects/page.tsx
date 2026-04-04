import React from 'react';

const Project = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>📱 Student Support APP - Project Overview</h1>
            
           

            {/* Project Idea Summary */}
            <div style={{ marginTop: '20px' }}>
                <h2>💡 Project Idea</h2>
                <p><strong>Student Support APP</strong> - A comprehensive school/college management system</p>
                
                <h3>📋 Key Features:</h3>
                <ul>
                    <li>✅ Student Admission & Admit Card Download</li>
                    <li>✅ Exam Updates (Routine, Semester, Results)</li>
                    <li>✅ Class Monitoring (Daily updates, Tests, Syllabus)</li>
                    <li>✅ Financial Updates (Fees, Stipend, Multiple Payment Gateways)</li>
                    <li>✅ Attendance Monitoring (Students, Teachers, Staff)</li>
                    <li>✅ Online Classes</li>
                    <li>✅ Parental Chat Box</li>
                    <li>✅ Homework Submit & Live Edit</li>
                </ul>

                <h3>💳 Payment Gateways Supported:</h3>
                <ul>
                    <li>Visa / Mastercard / Debit / Credit Card</li>
                    <li>NPSB / MFS</li>
                    <li>bKash / Rocket</li>
                </ul>
            </div>
             {/* PDF Viewer Section */}
            <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
                <h2>📄 Project Document (PDF Content)</h2>
                <iframe 
                    src="/Student Support APP-organogram-1.pdf" 
                    width="100%" 
                    height="500px" 
                    title="Student Support APP PDF"
                    style={{ border: '1px solid #ddd', borderRadius: '5px' }}
                >
                    This browser does not support PDF viewing. 
                    <a href="/Student Support APP-organogram-1.pdf">Download PDF instead</a>
                </iframe>
            </div>
        </div>
    );
}

export default Project;