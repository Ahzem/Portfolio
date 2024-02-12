
    document.addEventListener('DOMContentLoaded', function() {
        var shareIcons = document.querySelectorAll('.share-icon');
        
        shareIcons.forEach(function(icon) {
            icon.addEventListener('click', function() {
                var link = this.getAttribute('data-link');
                
                if (navigator.share) {
                    navigator.share({
                        title: document.title,
                        text: 'Check out this portfolio item:',
                        url: link
                    })
                    .then(() => console.log('Shared successfully'))
                    .catch((error) => console.error('Error sharing:', error));
                } else {
                    alert('Your browser does not support the native share feature.');
                }
            });
        });
    });

