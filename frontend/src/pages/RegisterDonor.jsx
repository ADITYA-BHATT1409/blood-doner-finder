import React, { useState } from 'react';

const RegisterDonor = () => {
  const [formData, setFormData] = useState({
    donor_name: '',
    blood_group: '',
    city: '',
    contact_number: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Donor Registration Submitted! (Backend API connection pending)');
    setFormData({donor_name: '', blood_group: '', city: '', contact_number: ''});
  };

  return (
    <div style={{minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px'}}>
      <div className="visual-card" style={{maxWidth: '500px', width: '100%', textAlign: 'left', padding: '40px', backgroundColor: 'var(--color-surface)'}}>
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
          <i className="fa-solid fa-hand-holding-droplet visual-icon" style={{fontSize: '40px'}}></i>
          <h2 style={{color: 'white', marginTop: '10px'}}>Register to Donate</h2>
          <p style={{color: 'var(--color-text-light)', fontSize: '14px'}}>Join the network and save lives in your city.</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{marginBottom: '20px'}}>
            <label>Full Name</label>
            <input type="text" value={formData.donor_name} onChange={e=>setFormData({...formData, donor_name: e.target.value})} required />
          </div>
          <div className="input-group" style={{marginBottom: '20px'}}>
            <label>Blood Group</label>
            <select value={formData.blood_group} onChange={e=>setFormData({...formData, blood_group: e.target.value})} required>
              <option value="">Select</option>
              <option value="A+">A+</option><option value="A-">A-</option>
              <option value="O+">O+</option><option value="O-">O-</option>
              <option value="B+">B+</option><option value="B-">B-</option>
              <option value="AB+">AB+</option><option value="AB-">AB-</option>
            </select>
          </div>
          <div className="input-group" style={{marginBottom: '20px'}}>
            <label>City</label>
            <input type="text" value={formData.city} onChange={e=>setFormData({...formData, city: e.target.value})} required />
          </div>
          <div className="input-group" style={{marginBottom: '30px'}}>
            <label>Contact Number</label>
            <input type="text" value={formData.contact_number} onChange={e=>setFormData({...formData, contact_number: e.target.value})} required />
          </div>
          <button type="submit" className="btn-primary w-100" style={{padding: '14px'}}>Become a Donor</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterDonor;
