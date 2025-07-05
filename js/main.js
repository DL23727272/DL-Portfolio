

    function openModal(src) {
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImage');
      modal.style.display = "block";
      modalImg.src = src;
    }

    function closeModal() {
      document.getElementById('imageModal').style.display = "none";
    }

    // Optional: Close modal when clicking outside image
    window.onclick = function(event) {
      const modal = document.getElementById('imageModal');
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }