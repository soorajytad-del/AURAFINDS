/**
 * AuraFinds - Admin Dashboard Controller
 * Manages CRUD operations, database synchronization, metrics, and JSON backups.
 */

// Synchronize localStorage with static products.js database
let localProducts = JSON.parse(localStorage.getItem("aurafinds_products")) || [];
const dummyIds = ["aurasound-max", "novalight-beam", "ergodesk-flow", "chronos-fit", "keyquest-pro", "hydrostream-go"];

// Clean-slate override: if static products list is explicitly empty, wipe everything
if (window.products && window.products.length === 0) {
  localStorage.removeItem("aurafinds_products");
  localStorage.removeItem("aurafinds_deal_of_the_day");
  localProducts = [];
}

// 1. Remove dummy products if they are no longer present in window.products
const activeStaticIds = (window.products || []).map(p => p.id);
localProducts = localProducts.filter(p => {
  if (dummyIds.includes(p.id) && !activeStaticIds.includes(p.id)) {
    return false;
  }
  return true;
});

// 2. Add new products from window.products if they don't exist in localProducts
const activeLocalIds = localProducts.map(p => p.id);
(window.products || []).forEach(p => {
  if (!activeLocalIds.includes(p.id)) {
    localProducts.push(p);
  }
});

// 3. Validate and clean active Deal of the Day
const activeDealId = localStorage.getItem("aurafinds_deal_of_the_day");
if (activeDealId && !localProducts.some(p => p.id === activeDealId)) {
  if (localProducts.length > 0) {
    localStorage.setItem("aurafinds_deal_of_the_day", localProducts[0].id);
  } else {
    localStorage.removeItem("aurafinds_deal_of_the_day");
  }
} else if (!activeDealId && localProducts.length > 0) {
  localStorage.setItem("aurafinds_deal_of_the_day", localProducts[0].id);
}

// 4. Save the synced state back to localStorage
localStorage.setItem("aurafinds_products", JSON.stringify(localProducts));

// Application State
const state = {
  products: localProducts,
  theme: localStorage.getItem("aurafinds_theme") || "dark",
  filters: {
    search: "",
    category: "all"
  },
  editingId: null,
  deletingId: null
};

// DOM Cache
const dom = {
  // Theme & Layout
  html: document.documentElement,
  themeToggle: document.getElementById("theme-toggle"),
  
  // Dashboard Metrics
  statTotalProducts: document.getElementById("stat-total-products"),
  statCategories: document.getElementById("stat-categories"),
  statAvgPrice: document.getElementById("stat-avg-price"),
  statTotalReviews: document.getElementById("stat-total-reviews"),
  
  // Controls
  adminSearch: document.getElementById("admin-search"),
  adminClearSearch: document.getElementById("admin-clear-search"),
  filterCategory: document.getElementById("filter-category"),
  btnAddProduct: document.getElementById("btn-add-product"),
  adminTableBody: document.getElementById("admin-table-body"),
  
  // Backup controls
  btnExportJson: document.getElementById("btn-export-json"),
  fileImportJson: document.getElementById("file-import-json"),
  btnResetDb: document.getElementById("btn-reset-db"),
  
  // Product Form Modal
  productModal: document.getElementById("product-modal"),
  modalTitle: document.getElementById("modal-title"),
  productForm: document.getElementById("product-form"),
  formProductId: document.getElementById("form-product-id"),
  formTitle: document.getElementById("form-title"),
  formTagline: document.getElementById("form-tagline"),
  formCategory: document.getElementById("form-category"),
  formRating: document.getElementById("form-rating"),
  formPrice: document.getElementById("form-price"),
  formOriginalPrice: document.getElementById("form-original-price"),
  formImage: document.getElementById("form-image"),
  formAmazonUrl: document.getElementById("form-amazon-url"),
  formDescription: document.getElementById("form-description"),
  formFeatures: document.getElementById("form-features"),
  formSpecs: document.getElementById("form-specs"),
  formDealOfTheDay: document.getElementById("form-deal-of-the-day"),
  formHasVariants: document.getElementById("form-has-variants"),
  variantsSection: document.getElementById("variants-section"),
  variantsList: document.getElementById("variants-list"),
  btnAddVariant: document.getElementById("btn-add-variant"),
  btnCancelModal: document.getElementById("btn-cancel-modal"),
  btnCloseModal: document.getElementById("btn-close-modal"),
  
  // Confirm Delete Modal
  confirmModal: document.getElementById("confirm-modal"),
  btnConfirmDelete: document.getElementById("btn-confirm-delete"),
  btnCancelDelete: document.getElementById("btn-cancel-delete")
};

/* ==========================================================================
   VARIANT HELPERS
   ========================================================================== */

function createVariantRow(variant = {}) {
  const row = document.createElement("div");
  row.className = "variant-row";
  row.style.cssText = "display:grid;grid-template-columns:1.5fr 1fr 1fr 1.8fr auto;gap:8px;align-items:end;background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:10px;padding:12px;";
  row.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:4px;">
      <label style="font-size:0.75rem;font-weight:600;color:var(--text-secondary);text-transform:uppercase;">Variant Name</label>
      <input type="text" class="v-name" placeholder="e.g. 8GB + 128GB" value="${variant.name || ""}" style="font-size:0.85rem;">
    </div>
    <div style="display:flex;flex-direction:column;gap:4px;">
      <label style="font-size:0.75rem;font-weight:600;color:var(--text-secondary);text-transform:uppercase;">Price (₹)</label>
      <input type="number" class="v-price" placeholder="e.g. 24999" min="1" step="1" value="${variant.price || ""}" style="font-size:0.85rem;">
    </div>
    <div style="display:flex;flex-direction:column;gap:4px;">
      <label style="font-size:0.75rem;font-weight:600;color:var(--text-secondary);text-transform:uppercase;">Original Price (₹)</label>
      <input type="number" class="v-original-price" placeholder="e.g. 27999" min="1" step="1" value="${variant.originalPrice || ""}" style="font-size:0.85rem;">
    </div>
    <div style="display:flex;flex-direction:column;gap:4px;">
      <label style="font-size:0.75rem;font-weight:600;color:var(--text-secondary);text-transform:uppercase;">Amazon Link</label>
      <input type="url" class="v-amazon-url" placeholder="https://..." value="${variant.amazonUrl || ""}" style="font-size:0.85rem;">
    </div>
    <button type="button" class="btn btn-outline btn-remove-variant" title="Remove variant" style="padding:8px;border-color:var(--discount-color);color:var(--discount-color);">
      <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
    </button>
  `;
  row.querySelector(".btn-remove-variant").addEventListener("click", () => {
    row.remove();
    if (window.lucide) window.lucide.createIcons();
  });
  if (window.lucide) window.lucide.createIcons();
  return row;
}

function toggleVariantsSection(show) {
  dom.variantsSection.style.display = show ? "flex" : "none";
  dom.formHasVariants.checked = show;
}

function clearVariants() {
  dom.variantsList.innerHTML = "";
  toggleVariantsSection(false);
}

function collectVariants() {
  const rows = dom.variantsList.querySelectorAll(".variant-row");
  const variants = [];
  rows.forEach(row => {
    const name = row.querySelector(".v-name").value.trim();
    const price = parseFloat(row.querySelector(".v-price").value);
    const opVal = row.querySelector(".v-original-price").value.trim();
    const originalPrice = opVal ? parseFloat(opVal) : null;
    const amazonUrl = row.querySelector(".v-amazon-url").value.trim();
    if (name && price) {
      variants.push({ name, price, originalPrice, amazonUrl });
    }
  });
  return variants;
}

/* ==========================================================================
   BOOTSTRAP & INITIALIZATION & AUTH
   ========================================================================== */
const AUTH = {
  username: "zoorajvs",
  password: "secure@994"
};

function init() {
  applyTheme(state.theme);
  
  // Theme Toggle (always active)
  dom.themeToggle.addEventListener("click", () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    state.theme = newTheme;
    applyTheme(newTheme);
  });
  
  // Sign Out Toggle (always active)
  const btnSignOut = document.getElementById("btn-sign-out");
  if (btnSignOut) {
    btnSignOut.addEventListener("click", () => {
      sessionStorage.removeItem("aurafinds_authenticated");
      window.location.reload();
    });
  }

  // Check Authentication state
  const isAuthenticated = sessionStorage.getItem("aurafinds_authenticated") === "true";
  
  if (isAuthenticated) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("dashboard-content").style.display = "block";
    if (btnSignOut) btnSignOut.style.display = "block";
    
    // Initialize dashboard components
    updateStats();
    renderTable();
    setupDashboardEventListeners();
  } else {
    document.getElementById("login-container").style.display = "flex";
    document.getElementById("dashboard-content").style.display = "none";
    if (btnSignOut) btnSignOut.style.display = "none";
    
    setupLoginEventListener();
  }
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setupLoginEventListener() {
  const loginForm = document.getElementById("login-form");
  const loginError = document.getElementById("login-error");
  const loginUsernameInput = document.getElementById("login-username");
  const loginPasswordInput = document.getElementById("login-password");
  
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userVal = loginUsernameInput.value.trim();
      const passVal = loginPasswordInput.value;
      
      if (userVal === AUTH.username && passVal === AUTH.password) {
        sessionStorage.setItem("aurafinds_authenticated", "true");
        loginError.style.display = "none";
        window.location.reload(); // Reload to boot authenticated dashboard view
      } else {
        loginError.style.display = "flex";
        loginPasswordInput.value = "";
        loginPasswordInput.focus();
      }
    });
  }
}

/* ==========================================================================
   METRIC STATS CALCULATOR
   ========================================================================== */
function updateStats() {
  const total = state.products.length;
  
  // Unique categories
  const categories = new Set(state.products.map(p => p.category));
  
  // Average Price
  const avgPrice = total > 0 
    ? state.products.reduce((acc, p) => acc + p.price, 0) / total 
    : 0;
    
  // Total Review ratings
  const totalReviews = state.products.reduce((acc, p) => acc + p.reviewCount, 0);

  // Update DOM
  dom.statTotalProducts.textContent = total;
  dom.statCategories.textContent = categories.size;
  dom.statAvgPrice.textContent = `₹${avgPrice.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  dom.statTotalReviews.textContent = totalReviews.toLocaleString();
}

/* ==========================================================================
   TABLE RENDERER
   ========================================================================== */
function renderTable() {
  const filtered = state.products.filter(product => {
    // Category Filter
    const matchesCategory = state.filters.category === "all" || product.category === state.filters.category;
    
    // Keyword Search
    const query = state.filters.search.toLowerCase().trim();
    const matchesSearch = !query || 
      product.title.toLowerCase().includes(query) ||
      product.tagline.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);
      
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    dom.adminTableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 40px; color: var(--text-secondary);">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
            <i data-lucide="package-search" style="width: 36px; height: 36px; opacity: 0.5;"></i>
            <p>No products found matching filters.</p>
          </div>
        </td>
      </tr>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  const dealOfTheDayId = localStorage.getItem("aurafinds_deal_of_the_day") || "aurasound-max";

  dom.adminTableBody.innerHTML = filtered.map(product => `
    <tr>
      <td>
        <div class="table-product-cell">
          <img src="${product.image}" alt="${product.title}" onerror="this.src='https://placehold.co/100?text=No+Image'">
          <div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              <span>${product.title}</span>
              ${product.id === dealOfTheDayId ? `<span style="font-size: 0.7rem; font-weight: 700; color: #ffffff; background-color: var(--discount-color); padding: 2px 6px; border-radius: var(--radius-sm); display: inline-flex; align-items: center; gap: 3px; box-shadow: 0 2px 5px rgba(244,63,94,0.25);"><i data-lucide="sparkles" style="width: 10px; height: 10px; fill: currentColor;"></i> Deal of the Day</span>` : ""}
            </div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">${product.tagline}</div>
          </div>
        </div>
      </td>
      <td>
        <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary);">${product.category}</span>
      </td>
      <td>
        <div class="table-price">₹${product.price.toLocaleString('en-IN')}</div>
        ${product.originalPrice ? `<div style="font-size: 0.8rem; text-decoration: line-through; color: var(--text-secondary);">₹${product.originalPrice.toLocaleString('en-IN')}</div>` : ""}
      </td>
      <td>
        <div class="table-rating">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>${product.rating.toFixed(1)}</span>
          <span style="color: var(--text-secondary); font-size: 0.8rem;">(${product.reviewCount.toLocaleString()})</span>
        </div>
      </td>
      <td>
        <div class="table-actions">
          <button class="icon-btn action-btn-edit" onclick="openEditModal('${product.id}')" title="Edit product">
            <svg class="lucide lucide-edit" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
          </button>
          <button class="icon-btn action-btn-delete" onclick="openDeleteConfirm('${product.id}')" title="Delete product">
            <svg class="lucide lucide-trash-2" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   CRUD ACTION HANDLERS
   ========================================================================== */
function openAddModal() {
  state.editingId = null;
  dom.modalTitle.innerHTML = `<svg class="lucide lucide-plus-circle" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg> Add New Product`;
  
  // Clear forms
  dom.productForm.reset();
  dom.formProductId.value = "";
  
  // Defaults
  dom.formRating.value = "4.5";
  dom.formDealOfTheDay.checked = false;
  clearVariants();
  
  dom.productModal.classList.add("open");
  dom.formTitle.focus();
  
  if (window.lucide) window.lucide.createIcons();
}

// Exposed globally for onclick triggers in string templates
window.openEditModal = function(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.editingId = productId;
  dom.modalTitle.innerHTML = `<svg class="lucide lucide-edit" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg> Edit Product: <span style="color: var(--accent-light); font-weight: 600;">${product.title}</span>`;
  
  // Populate form
  dom.formProductId.value = product.id;
  dom.formTitle.value = product.title;
  dom.formTagline.value = product.tagline;
  dom.formCategory.value = product.category;
  dom.formRating.value = product.rating;
  dom.formPrice.value = product.price;
  dom.formOriginalPrice.value = product.originalPrice || "";
  dom.formImage.value = product.image;
  dom.formAmazonUrl.value = product.amazonUrl;
  dom.formDescription.value = product.description;
  
  // Features (array to newline)
  dom.formFeatures.value = product.features.join("\n");
  
  // Specs (key-value to newline formatted)
  dom.formSpecs.value = Object.entries(product.specifications)
    .map(([key, val]) => `${key}: ${val}`)
    .join("\n");
    
  // Deal of the day state
  const dealOfTheDayId = localStorage.getItem("aurafinds_deal_of_the_day") || "aurasound-max";
  dom.formDealOfTheDay.checked = dealOfTheDayId === productId;
  
  // Variants
  clearVariants();
  if (product.variants && product.variants.length > 0) {
    toggleVariantsSection(true);
    product.variants.forEach(v => {
      dom.variantsList.appendChild(createVariantRow(v));
    });
  }
  
  dom.productModal.classList.add("open");
  
  if (window.lucide) window.lucide.createIcons();
};

function handleFormSubmit(e) {
  e.preventDefault();
  
  const id = dom.formProductId.value.trim();
  const title = dom.formTitle.value.trim();
  const tagline = dom.formTagline.value.trim();
  const category = dom.formCategory.value;
  const rating = parseFloat(dom.formRating.value);
  const price = parseFloat(dom.formPrice.value);
  const originalPriceVal = dom.formOriginalPrice.value.trim();
  const originalPrice = originalPriceVal ? parseFloat(originalPriceVal) : null;
  const image = dom.formImage.value.trim();
  const amazonUrl = dom.formAmazonUrl.value.trim();
  const description = dom.formDescription.value.trim();
  
  // Parse Features
  const features = dom.formFeatures.value
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);
    
  // Parse Specs
  const specifications = {};
  dom.formSpecs.value
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .forEach(line => {
      const parts = line.split(":");
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const val = parts.slice(1).join(":").trim();
        if (key && val) {
          specifications[key] = val;
        }
      }
    });

  // Basic validations
  if (originalPrice && originalPrice < price) {
    alert("Warning: Original list price should be higher than selling price.");
  }

  // Generate ID if new
  let productID = id;
  if (!productID) {
    // Generate clean slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    
    // Ensure slug uniqueness
    let counter = 0;
    productID = slug;
    while (state.products.some(p => p.id === productID)) {
      counter++;
      productID = `${slug}-${counter}`;
    }
  }

  // Collect variants
  const variants = dom.formHasVariants.checked ? collectVariants() : [];

  // Construct object
  const newProduct = {
    id: productID,
    title,
    tagline,
    category,
    price,
    originalPrice,
    rating,
    reviewCount: id ? (state.products.find(p => p.id === id)?.reviewCount || 100) : 100, // keep reviews count if editing
    image,
    amazonUrl,
    features,
    specifications,
    description,
    ...(variants.length > 0 ? { variants } : {})
  };

  if (id) {
    // Edit action
    const index = state.products.findIndex(p => p.id === id);
    if (index !== -1) {
      state.products[index] = newProduct;
    }
  } else {
    // Create action
    state.products.push(newProduct);
  }

  // Save Deal of the Day state
  if (dom.formDealOfTheDay.checked) {
    localStorage.setItem("aurafinds_deal_of_the_day", productID);
  } else if (localStorage.getItem("aurafinds_deal_of_the_day") === productID) {
    localStorage.setItem("aurafinds_deal_of_the_day", "aurasound-max");
  }

  // Save State
  saveDatabaseState();
  closeProductModal();
  
  renderTable();
  updateStats();
}

window.openDeleteConfirm = function(productId) {
  state.deletingId = productId;
  const product = state.products.find(p => p.id === productId);
  if (!product) return;
  
  document.getElementById("confirm-title").innerHTML = `Delete <span style="color: var(--discount-color);">${product.title}</span>?`;
  dom.confirmModal.classList.add("open");
};

function confirmDeleteProduct() {
  if (!state.deletingId) return;
  
  state.products = state.products.filter(p => p.id !== state.deletingId);
  saveDatabaseState();
  
  dom.confirmModal.classList.remove("open");
  state.deletingId = null;
  
  renderTable();
  updateStats();
}

/* ==========================================================================
   BACKUP & RESET FUNCTIONS (JSON IMPORT/EXPORT)
   ========================================================================== */
function exportDatabase() {
  const jsonString = JSON.stringify(state.products, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.href = url;
  a.download = "products.json";
  document.body.appendChild(a);
  a.click();
  
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importDatabase(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      
      // Basic JSON structure check
      if (!Array.isArray(data)) {
        throw new Error("File content is not a valid JSON array of products.");
      }
      
      const isValid = data.every(p => 
        p.id && p.title && p.tagline && p.category && typeof p.price === "number" && p.image && p.amazonUrl
      );
      
      if (!isValid) {
        throw new Error("Some products in the array are missing mandatory fields (id, title, tagline, category, price, image, amazonUrl).");
      }
      
      if (confirm(`Are you sure you want to load ${data.length} products? This will overwrite the current active browser storage.`)) {
        state.products = data;
        saveDatabaseState();
        renderTable();
        updateStats();
        alert("Database successfully imported!");
      }
    } catch (err) {
      alert("Error parsing JSON: " + err.message);
    }
    
    // Reset file input value
    dom.fileImportJson.value = "";
  };
  
  reader.readAsText(file);
}

function resetDatabase() {
  if (confirm("Warning: This will clear all your dashboard changes and restore the 6 original default products. Do you want to proceed?")) {
    localStorage.removeItem("aurafinds_products");
    
    // Reload original database
    state.products = window.products || [];
    renderTable();
    updateStats();
    
    alert("Database restored to defaults!");
    window.location.reload();
  }
}

/* ==========================================================================
   SUPPORT & HELPERS
   ========================================================================== */
function saveDatabaseState() {
  localStorage.setItem("aurafinds_products", JSON.stringify(state.products));
}

function closeProductModal() {
  dom.productModal.classList.remove("open");
  state.editingId = null;
}

function applyTheme(theme) {
  dom.html.setAttribute("data-theme", theme);
  localStorage.setItem("aurafinds_theme", theme);
}

/* ==========================================================================
   DASHBOARD EVENT LISTENERS SETUP
   ========================================================================== */
function setupDashboardEventListeners() {
  // Modal Open/Close triggers
  dom.btnAddProduct.addEventListener("click", openAddModal);
  dom.btnCloseModal.addEventListener("click", closeProductModal);
  dom.btnCancelModal.addEventListener("click", closeProductModal);
  
  // Close modal when clicking on black background overlay
  dom.productModal.addEventListener("click", (e) => {
    if (e.target === dom.productModal) closeProductModal();
  });

  // Form submission
  dom.productForm.addEventListener("submit", handleFormSubmit);

  // Variants: toggle section visibility
  dom.formHasVariants.addEventListener("change", () => {
    dom.variantsSection.style.display = dom.formHasVariants.checked ? "flex" : "none";
    if (dom.formHasVariants.checked && dom.variantsList.children.length === 0) {
      dom.variantsList.appendChild(createVariantRow());
    }
  });

  // Variants: add new row
  dom.btnAddVariant.addEventListener("click", () => {
    dom.variantsList.appendChild(createVariantRow());
    if (window.lucide) window.lucide.createIcons();
  });

  // Delete modal buttons
  dom.btnConfirmDelete.addEventListener("click", confirmDeleteProduct);
  dom.btnCancelDelete.addEventListener("click", () => {
    dom.confirmModal.classList.remove("open");
    state.deletingId = null;
  });
  dom.confirmModal.addEventListener("click", (e) => {
    if (e.target === dom.confirmModal) {
      dom.confirmModal.classList.remove("open");
      state.deletingId = null;
    }
  });

  // Search filter
  dom.adminSearch.addEventListener("input", (e) => {
    const val = e.target.value;
    state.filters.search = val;
    dom.adminClearSearch.style.display = val ? "block" : "none";
    renderTable();
  });

  dom.adminClearSearch.addEventListener("click", () => {
    dom.adminSearch.value = "";
    state.filters.search = "";
    dom.adminClearSearch.style.display = "none";
    renderTable();
  });

  // Category filter
  dom.filterCategory.addEventListener("change", (e) => {
    state.filters.category = e.target.value;
    renderTable();
  });

  // JSON actions
  dom.btnExportJson.addEventListener("click", exportDatabase);
  dom.fileImportJson.addEventListener("change", importDatabase);
  dom.btnResetDb.addEventListener("click", resetDatabase);
}

// Run on boot
document.addEventListener("DOMContentLoaded", init);
