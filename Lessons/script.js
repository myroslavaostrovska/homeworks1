document.addEventListener('DOMContentLoaded', () => {
    const modalBackdrop = document.getElementById('modalBackdrop');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');

    openModalButton.addEventListener('click', () => {
        modalBackdrop.style.display = 'flex';
    });

    closeModalButton.addEventListener('click', () => {
        modalBackdrop.style.display = 'none';
    });

    // Close modal when clicking outside the modal
    modalBackdrop.addEventListener('click', (event) => {
        if (event.target === modalBackdrop) {
            modalBackdrop.style.display = 'none';
        }
    });
});
