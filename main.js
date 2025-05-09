// main.js - Client side functionality for Library Management System

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
    // Set minimum date for due date input in issue book form
    const dueDateInput = document.querySelector('input[type="date"]');
    if (dueDateInput) {
        const today = new Date();
        let tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        // Format date as YYYY-MM-DD
        let month = tomorrow.getMonth() + 1;
        let day = tomorrow.getDate();
        const year = tomorrow.getFullYear();
        
        // Add leading zeros if needed
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        
        dueDateInput.min = `${year}-${month}-${day}`;
        dueDateInput.value = `${year}-${month}-${day}`;
    }
    
    // Auto-dismiss alerts after 5 seconds
    setTimeout(function() {
        const alerts = document.querySelectorAll('.alert');
        alerts.forEach(function(alert) {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        });
    }, 5000);
    
    // Add event listener for search form submission
    const searchForm = document.querySelector('form[action*="search"]');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const searchInput = this.querySelector('input[type="text"]');
            if (searchInput && searchInput.value.trim() === '') {
                e.preventDefault();
                searchInput.focus();
            }
        });
    }
});
