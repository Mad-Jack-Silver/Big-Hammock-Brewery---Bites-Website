/**
 * Big Hammock Brewery & Bites - Interactive JavaScript
 */

document.addEventListener("DOMContentLoaded", function () {
  initHoursStatus();
  initMobileNav();
  initModals();
  initMenuFilters();
  initLightbox();
  initReservationForm();
});

/* -------------------------------------------------------------
   1. Live Hours & Status Check (Ocala, FL / Eastern Time)
------------------------------------------------------------- */
function initHoursStatus() {
  const schedule = {
    0: { name: "Sunday", open: null, close: null },          // Closed
    1: { name: "Monday", open: null, close: null },          // Closed
    2: { name: "Tuesday", open: 11, close: 21 },             // 11am - 9pm
    3: { name: "Wednesday", open: 11, close: 21 },           // 11am - 9pm
    4: { name: "Thursday", open: 11, close: 21 },            // 11am - 9pm
    5: { name: "Friday", open: 11, close: 22 },              // 11am - 10pm
    6: { name: "Saturday", open: 11, close: 22 }             // 11am - 10pm
  };

  // Get current time in US Eastern Time
  const now = new Date();
  const options = { timeZone: "America/New_York" };
  const formatter = new Intl.DateTimeFormat("en-US", {
    ...options,
    weekday: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  });

  const parts = formatter.formatToParts(now);
  const hourPart = parseInt(parts.find(p => p.type === "hour").value, 10);
  const minutePart = parseInt(parts.find(p => p.type === "minute").value, 10);
  const dayIndex = now.getDay(); // Sunday = 0 ... Saturday = 6

  const currentDecHour = hourPart + (minutePart / 60);
  const todaySched = schedule[dayIndex];

  let isOpen = false;
  let statusText = "Closed Now";

  if (todaySched.open !== null && todaySched.close !== null) {
    if (currentDecHour >= todaySched.open && currentDecHour < todaySched.close) {
      isOpen = true;
      statusText = `Open Now • Closes at ${formatHour(todaySched.close)}`;
    } else if (currentDecHour < todaySched.open) {
      statusText = `Closed Now • Opens at ${formatHour(todaySched.open)}`;
    } else {
      statusText = "Closed for the evening";
    }
  } else {
    statusText = "Closed Today • Opens Tuesday 11 AM";
  }

  // Update DOM Pills
  const statusPills = document.querySelectorAll(".status-pill");
  statusPills.forEach(pill => {
    pill.className = `status-pill ${isOpen ? 'open' : 'closed'}`;
    pill.innerHTML = `<span class="status-indicator-dot"></span> ${statusText}`;
  });

  // Highlight today in hours table
  const rows = document.querySelectorAll(".hours-table tr");
  rows.forEach((row, idx) => {
    // Note: If table starts Monday (idx 0), dayIndex 1 = Monday
    const tableDayIdx = row.getAttribute("data-day");
    if (tableDayIdx && parseInt(tableDayIdx, 10) === dayIndex) {
      row.classList.add("today");
    }
  });
}

function formatHour(hour24) {
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 || 12;
  return `${hour12}:00 ${period}`;
}

/* -------------------------------------------------------------
   2. Mobile Drawer Navigation
------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const closeBtn = document.querySelector(".drawer-close-btn");
  const drawer = document.querySelector(".mobile-nav-drawer");
  const backdrop = document.querySelector(".drawer-backdrop");

  if (!drawer) return;

  function openDrawer() {
    drawer.classList.add("active");
    if (backdrop) backdrop.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("active");
    if (backdrop) backdrop.style.display = "none";
    document.body.style.overflow = "";
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);
}

/* -------------------------------------------------------------
   3. Modals (Delivery Hub & Quick Order)
------------------------------------------------------------- */
function initModals() {
  const openButtons = document.querySelectorAll("[data-open-modal]");
  const closeButtons = document.querySelectorAll(".modal-close, [data-close-modal]");

  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute("data-open-modal");
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const parentModal = btn.closest(".modal-backdrop");
      if (parentModal) {
        parentModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // Close when clicking outside box
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      e.target.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

/* -------------------------------------------------------------
   4. Menu Filters & Dynamic Render
------------------------------------------------------------- */
function initMenuFilters() {
  const filterContainer = document.querySelector(".category-filter-nav");
  const menuContainer = document.querySelector("#menu-items-grid");

  if (!filterContainer || !menuContainer) return;

  // Render items
  function renderItems(filterCategory) {
    if (typeof MENU_DATA === "undefined") return;

    let items = MENU_DATA.items;
    if (filterCategory && filterCategory !== "all") {
      items = items.filter(i => i.category === filterCategory);
    }

    menuContainer.innerHTML = items.map(item => {
      const isBeer = item.category === "draft-beers";
      const beerBadges = isBeer ? `
        <div class="beer-specs">
          ${item.abv ? `<span class="spec-badge">${item.abv}</span>` : ''}
          ${item.ibu ? `<span class="spec-badge">${item.ibu}</span>` : ''}
        </div>
      ` : `<span class="menu-item-calories">${item.calories || ''}</span>`;

      const tagsHtml = (item.tags || []).map(t =>
        `<span class="tag-badge ${t.includes('Special') || t.includes('Flagship') || t.includes('Best') ? 'special' : ''}">${t}</span>`
      ).join('');

      return `
        <article class="menu-item-card" data-category="${item.category}">
          <div class="menu-item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            <span class="menu-item-price-badge">${item.price}</span>
          </div>
          <div class="menu-item-body">
            <div class="menu-item-tags">${tagsHtml}</div>
            <h3 class="menu-item-title">${item.name}</h3>
            <p class="menu-item-desc">${item.description}</p>
            <div class="menu-item-footer">
              ${beerBadges}
              <button class="btn btn-outline btn-sm order-item-btn" data-open-modal="orderModal" data-item-name="${item.name}">
                Order
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Re-attach modal trigger for newly rendered buttons
    initModals();
  }

  // Initial render
  renderItems("all");

  // Event Listeners for Filter Buttons
  filterContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.getAttribute("data-filter");
    renderItems(cat);
  });
}

/* -------------------------------------------------------------
   5. Photo Lightbox
------------------------------------------------------------- */
function initLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item, .show-gallery");
  const lightboxModal = document.getElementById("lightboxModal");
  if (!lightboxModal) return;

  const lightboxImg = lightboxModal.querySelector(".lightbox-img");
  const lightboxCaption = lightboxModal.querySelector(".lightbox-caption");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img") || item;
      if (img && img.src) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.textContent = img.getAttribute("alt") || "Big Hammock Brewery & Bites";
        }
        lightboxModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });
}

/* -------------------------------------------------------------
   6. Reservation & Inquiries Form
------------------------------------------------------------- */
function initReservationForm() {
  const form = document.querySelector("#reservation-form");
  const successMsg = document.querySelector("#form-success-alert");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Processing Request...";

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      if (successMsg) {
        successMsg.style.display = "block";
        setTimeout(() => {
          successMsg.style.display = "none";
        }, 6000);
      } else {
        alert("Thank you! Your table or event inquiry has been sent to Big Hammock Brewery. We will call or email to confirm!");
      }
    }, 900);
  });
}
