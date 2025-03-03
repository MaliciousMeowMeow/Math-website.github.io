// Handle video fallback
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    if (video) {
        video.addEventListener('error', function() {
            video.style.display = 'none';
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
        });
    }
});

// Initialize game state if it doesn't exist
if (!localStorage.getItem('gameState')) {
    localStorage.setItem('gameState', JSON.stringify({
        xp: 0,
        level: 1,
        completedLevels: []
    }));
}

// Add card hover effects
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
}); 