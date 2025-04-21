document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('flashPreferenceModal');
    modal.style.display = 'block';
    
    const blinkies = document.querySelectorAll('.blinkie-gallery img');
    
    document.querySelectorAll('.pref-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const preference = this.dataset.pref;
            localStorage.setItem('flashPreference', preference);
            filterBlinkies(preference);
            modal.style.display = 'none';
        });
    });
    
    const savedPref = localStorage.getItem('flashPreference');
    if (savedPref) {
        filterBlinkies(savedPref);
        modal.style.display = 'none';
    }
    
    function filterBlinkies(preference) {
        blinkies.forEach(blinkie => {
            const isFlashing = blinkie.classList.contains('flashing');
            
            switch(preference) {
                case 'noflashing':
                    blinkie.style.display = isFlashing ? 'none' : 'block';
                    break;
                case 'both':
                    blinkie.style.display = 'block';
                    break;
                case 'onlyflashing':
                    blinkie.style.display = isFlashing ? 'block' : 'none';
                    break;
            }
        });
    }
    
    const toggleButton = document.querySelector('.toggle-button');
    const toggleContent = document.querySelector('.toggle-content');
    
    toggleContent.style.display = 'block';
    toggleButton.classList.remove('collapsed');
    
    document.querySelectorAll('.sub-toggle-content').forEach(content => {
        content.style.display = 'none';
    });
    
    document.querySelectorAll('.sub-toggle-button').forEach(button => {
        button.classList.add('sub-collapsed');
    });
    
    toggleButton.addEventListener('click', function() {
        const isHidden = toggleContent.style.display === 'none';
        toggleContent.style.display = isHidden ? 'block' : 'none';
        this.classList.toggle('collapsed');
    });
    
    // Sub-toggle buttons - modified to close other sections
    document.querySelectorAll('.sub-toggle-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const content = this.nextElementSibling;
            const isHidden = content.style.display === 'none';
            
            // Close all other sub-sections
            document.querySelectorAll('.sub-toggle-content').forEach(otherContent => {
                if (otherContent !== content) {
                    otherContent.style.display = 'none';
                    otherContent.previousElementSibling.classList.add('sub-collapsed');
                }
            });
            
            content.style.display = isHidden ? 'block' : 'none';
            this.classList.toggle('sub-collapsed', !isHidden);
        });
    });
});