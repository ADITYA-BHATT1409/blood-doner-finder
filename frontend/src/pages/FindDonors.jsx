import React from 'react';

const FindDonors = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    alert('Donor search functionality will be implemented here!');
  };

  return (
    <div style={{minHeight: '80vh', padding: '80px 20px'}}>
      <div className="container section-header" style={{textAlign: 'center'}}>
        <h2>Find Local Donors</h2>
        <p>Search our database of registered blood donors.</p>
      </div>
      
      <div className="search-container glass-panel" style={{marginTop: '40px'}}>
        <form className="search-grid" onSubmit={handleSearch}>
          <div className="input-group">
            <label>Blood Group</label>
            <select required>
              <option value="">Any Type</option>
              <option value="A+">A+</option><option value="A-">A-</option>
              <option value="O+">O+</option><option value="O-">O-</option>
              <option value="B+">B+</option><option value="B-">B-</option>
              <option value="AB+">AB+</option><option value="AB-">AB-</option>
            </select>
          </div>
          <div className="input-group">
            <label>Location / City</label>
            <input type="text" placeholder="Enter city..." required />
          </div>
          <div className="input-group search-btn-wrapper">
            <button type="submit" className="btn-primary search-btn">Search Donors</button>
          </div>
        </form>
      </div>

      <div className="container" style={{marginTop: '50px', textAlign: 'center', color: 'var(--color-text-light)'}}>
        <p>Results will appear here...</p>
      </div>
    </div>
  );
};

export default FindDonors;
