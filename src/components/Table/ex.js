import React, { useState } from 'react';
import addnotes from "../../assets/addnotes.svg"; // Ensure the correct path and extension
import { FiX } from 'react-icons/fi';

const UpcomingAppointments = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  const [selectedClient, setSelectedClient] = useState(null);

  const handleAddNotesClick = (event, client) => {
    const rect = event.target.getBoundingClientRect();
   
    setSelectedClient(client);
    setShowPopup(true);
  };

  const clients = [
    { name: "Kapil Verma", project: "Project Arisyas", date: "26 June | 5:33 PM", timeLeft: "05 : 00 : 00 : 00 : 00" },
    { name: "Existing", project: "Project Arisyas", date: "26 June | 5:33 PM", timeLeft: "05 : 00 : 00 : 00 : 00" },
    { name: "New Client", project: "Project Arisyas", date: "26 June | 5:33 PM", timeLeft: "05 : 00 : 00 : 00 : 00" },
  ];



  return (
    <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Upcoming Appointments</h2>
      <table style={{ width: '100%', backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderRadius: '0.5rem', overflow: 'hidden' }}>
        <thead style={{ backgroundColor: '#f7fafc' }}>
          <tr>
            <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Date</th>
            <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Client</th>
            <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Project Name</th>
            <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Time Left</th>
            <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Start Time</th>
            <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>End Time</th>
            <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Notes</th>
            <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td style={{ padding: '0.5rem 1rem' }}>{client.date}</td>
              <td style={{ padding: '0.5rem 1rem' }}>
                <span style={{ backgroundColor: '#c6f6d5', color: '#22543d', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>{client.name}</span>
              </td>
              <td style={{ padding: '0.5rem 1rem' }}>{client.project}</td>
              <td style={{ padding: '0.5rem 1rem' }}>{client.timeLeft}</td>
              <td style={{ padding: '0.5rem 1rem' }}>-</td>
              <td style={{ padding: '0.5rem 1rem' }}>-</td>
              <td style={{ padding: '0.5rem 1rem' }}>
                <img
                  style={{ width: '1.5rem', height: '1.5rem', color: '#cbd5e0', fill: 'none', stroke: 'currentColor', cursor: 'pointer' }}
                  src={addnotes}
                  alt="addnotes"
                  onClick={(event) => handleAddNotesClick(event, client)}
                />
              </td>
              <td style={{ padding: '0.5rem 1rem' }}>
                <button style={{ color: '#48bb78', marginRight: '0.5rem' }}>✓</button>
                <button style={{ color: '#f56565' }}>✕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && selectedClient && (
        <div 
          style={{
            position: 'absolute',
          
            width: '281px',
            height: '230px',
            backgroundColor: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            borderRadius: '0.5rem',
            padding: '1rem',
            zIndex: 1000,
          }}
        >
          <h3 style={{ marginBottom: '0.5rem' }}>{selectedClient.name}</h3>
       
          <div style={{ marginTop: '0.5rem', textAlign: 'right' }}>
            <button 
              onClick={() => setShowPopup(false)}
              style={{
                backgroundColor: '#48bb78',
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ClientHistory = () => (
  <div>
    <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Client's History</h2>
    <table style={{ width: '100%', backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <thead style={{ backgroundColor: '#f7fafc' }}>
        <tr>
          <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Name</th>
          <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Email</th>
          <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Phone No.</th>
          <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Property Interest</th>
          <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Schedule Meeting</th>
          <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Meeting Status</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(6)].map((_, index) => (
          <tr key={index}>
            <td style={{ padding: '0.5rem 1rem' }}>Anand Jaiswal</td>
            <td style={{ padding: '0.5rem 1rem' }}>Anandjaiswal@gmail.com</td>
            <td style={{ padding: '0.5rem 1rem' }}>9854567524</td>
            <td style={{ padding: '0.5rem 1rem' }}>ROF Aalayas</td>
            <td style={{ padding: '0.5rem 1rem' }}>26 June | 5:33 PM</td>
            <td style={{ padding: '0.5rem 1rem' }}>
              <span style={{ backgroundColor: '#c6f6d5', color: '#22543d', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>Completed</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Client = () => (
  <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f7f7f7' }}>
    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <main style={{ flex: '1', overflowX: 'hidden', overflowY: 'auto', padding: '1.5rem', backgroundColor: '#F7F3E8' }}>
        <UpcomingAppointments />

        {/* searchbar */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <input type="text" placeholder="Search" style={{ width: '619px', height: '48px', padding: '0.5rem', border: '1px solid #e2e8f0', borderRadius: '9999px' }} />
        </div>

        <ClientHistory />
      </main>
    </div>
  </div>
);

export default Client;