
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
            
          
            document.querySelectorAll('.sub-toggle-button').forEach(button => {
                button.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    content.style.display = content.style.display === 'none' ? 'block' : 'none';
                });
            });
        });
     


   
        document.addEventListener('DOMContentLoaded', function() {
     
            const toggleButton = document.querySelector('.toggle-button');
            const toggleContent = document.querySelector('.toggle-content');
            
            toggleButton.addEventListener('click', function() {
                toggleContent.style.display = toggleContent.style.display === 'none' ? 'block' : 'none';
                toggleButton.classList.toggle('collapsed');
            });
            

            const subToggles = document.querySelectorAll('.sub-toggle-button');
            
            subToggles.forEach(button => {
                const content = button.nextElementSibling;
                
                button.addEventListener('click', function() {
                    content.style.display = content.style.display === 'none' ? 'block' : 'none';
                    button.classList.toggle('sub-collapsed');
                });
                
            
            });
        });
    
    