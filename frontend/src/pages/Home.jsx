import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [requests, setRequests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    patient_name: '', blood_group: '', hospital_location: '',
    urgency: 'high', units_required: 1, contact_number: '', additional_notes: ''
  });

  const API_URL = 'http://localhost:5000/api/requests';

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (Array.isArray(data)) setRequests(data);
      else setRequests([]); 
    } catch (error) {
      setRequests([]);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsModalOpen(false);
        setFormData({
          patient_name: '', blood_group: '', hospital_location: '',
          urgency: 'high', units_required: 1, contact_number: '', additional_notes: ''
        });
        fetchRequests();
        alert('Emergency Request Posted!');
      }
    } catch (error) {
      alert('Failed to post request.');
    }
  };

  const renderUrgencyClass = (urgency) => {
    if(urgency === 'critical') return 'urgency-critical';
    if(urgency === 'high') return 'urgency-high';
    return 'urgency-normal';
  };

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <div className="badge">Critical Lifeline Network</div>
          <h1>Every Drop <span>Counts</span>.<br/>Be a Hero Today.</h1>
          <p>Connect instantly with real-time blood emergencies in your area. Your prompt response can be the difference between life and death.</p>
          <div className="hero-buttons">
            <button className="btn-primary btn-large" onClick={() => setIsModalOpen(true)}>Post Emergency Request</button>
            <Link to="/register-donor">
              <button className="btn-secondary btn-large">Register to Donate</button>
            </Link>
          </div>
        </div>
      </header>

      <section className="requests-section" id="requests">
        <div className="container section-header" style={{textAlign: 'center'}}>
          <h2>Active Emergency Requests</h2>
          <p>People in your area who need immediate assistance.</p>
        </div>
        <div className="container cards-grid">
          {requests.map(req => (
            <div className="request-card" key={req.id}>
              <div className="card-header">
                <div className="blood-group-badge">{req.blood_group}</div>
                <div className={`urgency-badge ${renderUrgencyClass(req.urgency)}`}>{req.urgency}</div>
              </div>
              <div className="card-body">
                <h4>{req.patient_name}</h4>
                <div className="card-info">
                  <span><i className="fa-solid fa-hospital"></i> {req.hospital_location}</span>
                  <span><i className="fa-solid fa-droplet"></i> Needs {req.units_required} Unit(s)</span>
                  <span><i className="fa-solid fa-phone"></i> {req.contact_number}</span>
                </div>
              </div>
            </div>
          ))}
          {requests.length === 0 && <p style={{color: 'var(--color-text-light)', gridColumn: '1 / -1', textAlign: 'center'}}>No active requests available right now.</p>}
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay active">
          <div className="modal-content glass-panel">
            <div className="modal-header">
              <h3>Post an Emergency Request</h3>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <form className="emergency-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <label>Patient Name</label>
                  <input type="text" value={formData.patient_name} onChange={e=>setFormData({...formData, patient_name: e.target.value})} required/>
                </div>
                <div className="input-group">
                  <label>Blood Group</label>
                  <select value={formData.blood_group} onChange={e=>setFormData({...formData, blood_group: e.target.value})} required>
                    <option value="">Select</option>
                    <option value="A+">A+</option><option value="A-">A-</option>
                    <option value="O+">O+</option><option value="O-">O-</option>
                    <option value="B+">B+</option><option value="B-">B-</option>
                    <option value="AB+">AB+</option><option value="AB-">AB-</option>
                  </select>
                </div>
              </div>
              <div className="input-group">
                  <label>Hospital/Location</label>
                  <input type="text" value={formData.hospital_location} onChange={e=>setFormData({...formData, hospital_location: e.target.value})} required/>
              </div>
              <div className="form-row">
                  <div className="input-group">
                      <label>Urgency</label>
                      <select value={formData.urgency} onChange={e=>setFormData({...formData, urgency: e.target.value})}>
                          <option value="critical">Critical</option><option value="high">High</option><option value="normal">Normal</option>
                      </select>
                  </div>
                  <div className="input-group">
                      <label>Units</label>
                      <input type="number" value={formData.units_required} onChange={e=>setFormData({...formData, units_required: e.target.value})} required min="1"/>
                  </div>
              </div>
              <div className="input-group">
                  <label>Contact Number</label>
                  <input type="text" value={formData.contact_number} onChange={e=>setFormData({...formData, contact_number: e.target.value})} required/>
              </div>
              <button type="submit" className="btn-primary w-100 mt-3">Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
