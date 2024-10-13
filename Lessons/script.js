// Select the modal backdrop and close button
const modalBackdrop = document.getElementById('modalBackdrop');
const closeModalButton = document.getElementById('closeModalButton');
const openModalButton = document.getElementById('openModalButton');

// Function to open the modal
function openModal() {
    modalBackdrop.classList.remove('is-hidden');
}

// Function to close the modal
function closeModal() {
    modalBackdrop.classList.add('is-hidden');
}

// Event listener for the open button
openModalButton.addEventListener('click', openModal);

// Event listener for the close button
closeModalButton.addEventListener('click', closeModal);
submitButton.addEventListener('click', closeModal);

// Close the modal when clicking outside of it (on the backdrop)
modalBackdrop.addEventListener('click', (event) => {
    if (event.target === modalBackdrop) {
        closeModal();
    }
});
