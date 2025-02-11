function showPopup(popupClass) {
    const popup = document.querySelector(popupClass);
    popup.style.display = 'flex';
    popup.setAttribute('aria-hidden', 'false');
    popup.classList.add('fade-in');
}

function hidePopup(popupClass) {
    const popup = document.querySelector(popupClass);
    popup.classList.remove('fade-in');
    popup.classList.add('fade-out');
    popup.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
        popup.style.display = 'none';
        popup.classList.remove('fade-out');
    }, 300);
}
