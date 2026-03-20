// Mock Data for Active Requests
const mockRequests = [
    {
        id: 1,
        patientName: "Sarah Jenkins",
        bloodGroup: "O-",
        location: "City General Hospital",
        urgency: "critical",
        units: 2,
        timePosted: "15 mins ago"
    },
    {
        id: 2,
        patientName: "Michael Chang",
        bloodGroup: "A+",
        location: "Metro Medical Center",
        urgency: "high",
        units: 1,
        timePosted: "1 hr ago"
    },
    {
        id: 3,
        patientName: "Elena Rodriguez",
        bloodGroup: "B+",
        location: "Westside Clinic",
        urgency: "normal",
        units: 3,
        timePosted: "3 hrs ago"
    },
    {
        id: 4,
        patientName: "David Smith",
        bloodGroup: "AB-",
        location: "Hope Heart Institute",
        urgency: "critical",
        units: 2,
        timePosted: "Just now"
    },
    {
        id: 5,
        patientName: "James Wilson",
        bloodGroup: "O+",
        location: "General Hospital",
        urgency: "high",
        units: 1,
        timePosted: "5 hrs ago"
    },
    {
        id: 6,
        patientName: "Anita P.",
        bloodGroup: "A-",
        location: "County Medical",
        urgency: "normal",
        units: 2,
        timePosted: "1 day ago"
    }
];

// DOM Elements
const requestsContainer = document.getElementById('requests-container');
const btnRequestBlood = document.getElementById('btn-request-blood');
const btnHeroFind = document.getElementById('btn-hero-find');
const modalOverlay = document.getElementById('emergency-modal');
const closeModalBtn = document.getElementById('close-modal');
const emergencyForm = document.getElementById('emergency-form');
const searchForm = document.getElementById('search-donors-form');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderRequests(mockRequests);
    setupEventListeners();
});

// Render Requests to DOM
function renderRequests(data) {
    requestsContainer.innerHTML = '';
    
    if (data.length === 0) {
        requestsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-light);">No active requests found matching your criteria.</p>`;
        return;
    }

    data.forEach(req => {
        const card = document.createElement('div');
        card.className = 'request-card';
        
        let urgencyText = 'Normal';
        if (req.urgency === 'critical') urgencyText = 'Critical';
        if (req.urgency === 'high') urgencyText = 'High';

        card.innerHTML = `
            <div class="card-header">
                <div class="blood-group-badge">${req.bloodGroup}</div>
                <div class="urgency-badge urgency-${req.urgency}">${urgencyText}</div>
            </div>
            <div class="card-body">
                <h4>${req.patientName}</h4>
                <div class="card-info">
                    <span><i class="fa-solid fa-hospital"></i> ${req.location}</span>
                    <span><i class="fa-solid fa-droplet"></i> Needs ${req.units} Unit(s)</span>
                </div>
            </div>
            <div class="card-footer">
                <span class="posted-time"><i class="fa-regular fa-clock"></i> ${req.timePosted}</span>
                <button class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="alert('Contacting recipient for ${req.patientName} (Mock Action)')">Donate Info</button>
            </div>
        `;
        requestsContainer.appendChild(card);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Modal Interactions
    btnRequestBlood.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    
    // Close modal on outside click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Smooth scroll for hero button
    btnHeroFind.addEventListener('click', () => {
        document.getElementById('find-donors').scrollIntoView({ behavior: 'smooth' });
    });

    // Handle Form Submissions
    emergencyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Mock Add Request
        const newReq = {
            id: Date.now(),
            patientName: document.getElementById('patient-name').value,
            bloodGroup: document.getElementById('req-blood-group').value,
            location: document.getElementById('hospital-location').value,
            urgency: "critical", // Default to critical for new requests
            units: document.getElementById('units-required').value,
            timePosted: "Just now"
        };

        mockRequests.unshift(newReq);
        renderRequests(mockRequests.slice(0, 6)); // showing top 6
        
        closeModal();
        emergencyForm.reset();
        
        alert("Emergency request posted successfully!");
        document.getElementById('requests').scrollIntoView({ behavior: 'smooth' });
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const typeFilter = document.getElementById('blood-group-filter').value;
        const locationFilter = document.getElementById('location-filter').value.toLowerCase();
        const urgencyFilter = document.getElementById('urgency-filter').value;

        // Filter mock requests based on inputs
        const filtered = mockRequests.filter(req => {
            const matchType = !typeFilter || req.bloodGroup === typeFilter;
            const matchLoc = !locationFilter || req.location.toLowerCase().includes(locationFilter);
            const matchUrgency = !urgencyFilter || req.urgency === urgencyFilter;
            
            return matchType && matchLoc && matchUrgency;
        });

        document.getElementById('requests').scrollIntoView({ behavior: 'smooth' });
        renderRequests(filtered);
    });
}

function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}
