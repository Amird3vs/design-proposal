const searchBar = document.querySelector(".search-bar");

// Updated phrases related to billing and business, including "Search", "Find", "Locate"
const phrases = [
  "Search for invoices, payments, or billing details...",
  "Find purchase orders, payment history, or service requests...",
  "Locate transaction records, shipment details, or account balances...",
];

let phraseIndex = 0;
let typingSpeed = 100; // Speed of typing in ms

function typePhrase(newPhrase) {
  let i = 0;

  const typeInterval = setInterval(() => {
    // Type each character in the phrase
    searchBar.setAttribute("placeholder", newPhrase.slice(0, i + 1)); // Set the placeholder dynamically

    i++;
    if (i >= newPhrase.length) {
      clearInterval(typeInterval); // Stop typing once all characters are added

      // Set a pause before typing the next phrase
      setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typePhrase(phrases[phraseIndex]); // Start typing the next phrase
      }, 1500); // Pause before typing the next phrase
    }
  }, typingSpeed);
}

// Initial placeholder type
typePhrase(phrases[phraseIndex]);

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".all-cards-modal");
  const modalTitle = document.querySelector(".modal-section-title");
  const closeModal = document.querySelector(".close-btn");

  // Data for each section (can be fetched dynamically)
  const sections = {
    "Customer Management": [
      { title: "Claim", imgSrc: "assets/imgs/printer.png" },
      { title: "Prospect Activity", imgSrc: "assets/imgs/printer.png" },
      { title: "Forecast", imgSrc: "assets/imgs/printer.png" },
      { title: "Sales Update", imgSrc: "assets/imgs/printer.png" },
    ],
    Requests: [
      { title: "Preventive Maintenance", imgSrc: "assets/imgs/printer.png" },
      { title: "Printer - DU", imgSrc: "assets/imgs/printer.png" },
      { title: "Printer - LM", imgSrc: "assets/imgs/printer.png" },
      { title: "Printer - RD", imgSrc: "assets/imgs/printer.png" },
      { title: "Printer - OP", imgSrc: "assets/imgs/printer.png" },
      { title: "Pull out", imgSrc: "assets/imgs/printer.png" },
      { title: "Service Request", imgSrc: "assets/imgs/printer.png" },
      { title: "Stocks Adjustment", imgSrc: "assets/imgs/printer.png" },
      { title: "Accounting Ticketing", imgSrc: "assets/imgs/printer.png" },
    ],
    Billings: [
      { title: "Billing Records", imgSrc: "assets/imgs/printer.png" },
      { title: "Customer Extraction", imgSrc: "assets/imgs/printer.png" },
    ],
    Reports: [
      { title: "Pullout Report", imgSrc: "assets/imgs/printer.png" },
      { title: "Service Request Report", imgSrc: "assets/imgs/printer.png" },
    ],
    "Master Lists": [
      { title: "Billing Report", imgSrc: "assets/imgs/printer.png" },
    ],
    Logistics: [
      { title: "Reports", imgSrc: "assets/imgs/printer.png" },
    ],
  };

  // Function to open modal with dynamic content
  function openModal(section) {
    modalTitle.innerText = section;
    modalContent.innerHTML = ""; // Clear any previous content

    sections[section].forEach((card) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("image-wrapper");

      const img = document.createElement("img");
      img.classList.add("card-image");
      img.src = card.imgSrc;
      img.alt = card.title;

      const titleSpan = document.createElement("span");
      titleSpan.classList.add("card-title");
      titleSpan.textContent = card.title;

      imageWrapper.appendChild(img);
      cardDiv.appendChild(imageWrapper);
      cardDiv.appendChild(titleSpan);

      modalContent.appendChild(cardDiv);
    });

    modal.style.display = "block";
  }

  document.querySelectorAll(".more-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionTitle = btn
        .closest(".service-section")
        .querySelector(".section-title").innerText;
      openModal(sectionTitle);
    });
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside of modal content
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
