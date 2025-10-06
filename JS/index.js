document.getElementById('toggle-btn').addEventListener('click', function() {
    var moreText = document.getElementById('more-text');
    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        this.textContent = 'Свернуть';
    } else {
        moreText.style.display = 'none';
        this.textContent = 'Подробнее';
    }
}); 