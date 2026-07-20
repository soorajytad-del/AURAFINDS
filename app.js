/**
 * AuraFinds - Client-side SPA Application Controller
 * Handles routing, filtering, search, sorting, wishlist, and theme toggling.
 */

// Synchronize localStorage with static products.js database
let localProducts = JSON.parse(localStorage.getItem("aurafinds_products")) || [];
const dummyIds = ["aurasound-max", "novalight-beam", "ergodesk-flow", "chronos-fit", "keyquest-pro", "hydrostream-go"];

// Auto-purge cache if legacy string IDs exist to synchronize new 4-digit IDs
if (localProducts.some(p => p.id === "iqoo-z11x" || p.id === "lenovo-ideapad-slim3")) {
  localStorage.removeItem("aurafinds_products");
  localStorage.removeItem("aurafinds_deal_of_the_day");
  localProducts = [];
}

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

// 2b. Always sync image, variants, colors, price & key fields from products.js
//     so edits to the source file are reflected without clearing cache manually
(window.products || []).forEach(staticProduct => {
  const idx = localProducts.findIndex(p => p.id === staticProduct.id);
  if (idx !== -1) {
    const cached = localProducts[idx];
    localProducts[idx] = {
      ...cached,                          // keep admin edits (title, description etc.)
      image:         staticProduct.image,
      price:         staticProduct.price,
      originalPrice: staticProduct.originalPrice,
      amazonUrl:     staticProduct.amazonUrl,
      variants:      staticProduct.variants,
      colors:        staticProduct.colors,
      features:      staticProduct.features,
      specifications: staticProduct.specifications
    };
  }
});

// 3. Validate and clean active Deal of the Day (Hardcode Lenovo Laptop '1004' as default)
localStorage.setItem("aurafinds_deal_of_the_day", "1004");
const activeDealId = "1004";

// 4. Save the synced state back to localStorage
localStorage.setItem("aurafinds_products", JSON.stringify(localProducts));

// Application State
const state = {
  products: localProducts,
  filters: {
    category: "all",
    search: "",
    sort: "popular"
  },
  wishlist: JSON.parse(localStorage.getItem("aurafinds_wishlist")) || [],
  theme: localStorage.getItem("aurafinds_theme") || "dark"
};

// DOM Cache
const dom = {
  // Theme & Navigation
  html: document.documentElement,
  themeToggle: document.getElementById("theme-toggle"),
  logoLink: document.getElementById("logo-link"),
  
  // Search Controls
  searchInput: document.getElementById("search-input"),
  clearSearch: document.getElementById("clear-search"),
  mobileSearchInput: document.getElementById("mobile-search-input"),
  mobileClearSearch: document.getElementById("mobile-clear-search"),
  
  // Filtering & Sorting
  categoryChips: document.querySelectorAll(".category-chip"),
  sortSelect: document.getElementById("sort-select"),
  resultsMeta: document.getElementById("results-meta"),
  resultsCountText: document.getElementById("results-count-text"),
  resetFiltersBtn: document.getElementById("reset-filters-btn"),
  
  // Pages / Views
  heroBanner: document.getElementById("hero-banner"),
  productsShowcase: document.getElementById("products-showcase"),
  productsGrid: document.getElementById("products-grid"),
  productDetailView: document.getElementById("product-detail-view"),
  privacyPolicyView: document.getElementById("privacy-policy-view"),
  privacyBackBtn: document.getElementById("privacy-back-btn"),
  
  // Deal of the Day Popup elements
  dealPopupOverlay: document.getElementById("deal-popup-overlay"),
  closeDealPopup: document.getElementById("close-deal-popup"),
  dealPopupImg: document.getElementById("deal-popup-img"),
  dealPopupTitle: document.getElementById("deal-popup-title"),
  dealPopupTagline: document.getElementById("deal-popup-tagline"),
  dealPopupPrice: document.getElementById("deal-popup-price"),
  dealPopupOldPrice: document.getElementById("deal-popup-old-price"),
  dealPopupSavings: document.getElementById("deal-popup-savings"),
  dealPopupLink: document.getElementById("deal-popup-link"),
  
  // Wishlist Elements
  wishlistBtn: document.getElementById("wishlist-btn"),
  wishlistCount: document.getElementById("wishlist-count"),
  wishlistOverlay: document.getElementById("wishlist-overlay"),
  closeWishlist: document.getElementById("close-wishlist"),
  wishlistDrawerContent: document.getElementById("wishlist-drawer-content"),
  
  // Detail Page DOM Elements
  detailBackBtn: document.getElementById("detail-back-btn"),
  detailCategory: document.getElementById("breadcrumb-category"),
  detailTitle: document.getElementById("breadcrumb-title"),
  detailCategoryLabel: document.getElementById("detail-category-label"),
  detailProductTitle: document.getElementById("detail-product-title"),
  detailProductTagline: document.getElementById("detail-product-tagline"),
  detailStars: document.getElementById("detail-stars"),
  detailRatingScore: document.getElementById("detail-rating-score"),
  detailReviewCount: document.getElementById("detail-review-count"),
  detailMainImage: document.getElementById("detail-main-image"),
  detailPrice: document.getElementById("detail-price"),
  detailOriginalPrice: document.getElementById("detail-original-price"),
  detailDiscountPercent: document.getElementById("detail-discount-percent"),
  detailAmazonLink: document.getElementById("detail-amazon-link"),
  detailWishlistBtn: document.getElementById("detail-wishlist-btn"),
  detailVariantsContainer: document.getElementById("detail-variants-container"),
  detailVariantsList: document.getElementById("detail-variants-list"),
  detailColorsContainer: document.getElementById("detail-colors-container"),
  detailColorsList: document.getElementById("detail-colors-list"),
  detailDescription: document.getElementById("detail-description"),
  detailFeatures: document.getElementById("detail-features"),
  detailSpecsBody: document.getElementById("detail-specs-body")
};

/* ==========================================================================
   INITIALIZATION & BOOTSTRAP
   ========================================================================== */
function init() {
  applyTheme(state.theme);
  updateHeroDeal();
  initDealPopup();
  updateWishlistUI();
  setupEventListeners();
  handleRouting(); // Parse initial URL hash
  
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateHeroDeal() {
  const dealId = localStorage.getItem("aurafinds_deal_of_the_day") || "1004";
  const dealProduct = state.products.find(p => p.id === dealId);
  const heroVisual = document.querySelector(".hero-visual");
  const heroContainer = document.querySelector(".hero-container");
  
  if (dealProduct) {
    if (heroVisual) heroVisual.style.display = "flex";
    if (heroContainer) heroContainer.style.gridTemplateColumns = "1.2fr 0.8fr";
    
    const featuredImg = document.getElementById("hero-featured-img");
    const dealTitle = document.getElementById("hero-deal-title");
    const dealPrice = document.getElementById("hero-deal-price");
    const dealOldPrice = document.getElementById("hero-deal-old-price");
    const dealLink = document.getElementById("hero-deal-link");
    
    if (featuredImg) {
      featuredImg.src = dealProduct.image;
      featuredImg.alt = dealProduct.title;
    }
    if (dealTitle) dealTitle.textContent = dealProduct.title;
    if (dealPrice) dealPrice.textContent = `₹${dealProduct.price.toLocaleString('en-IN')}`;
    
    if (dealOldPrice) {
      if (dealProduct.originalPrice) {
        dealOldPrice.textContent = `₹${dealProduct.originalPrice.toLocaleString('en-IN')}`;
        dealOldPrice.style.display = "inline";
      } else {
        dealOldPrice.style.display = "none";
      }
    }
    
    if (dealLink) dealLink.href = `#product/${dealProduct.id}`;
  } else {
    if (heroVisual) heroVisual.style.display = "none";
    if (heroContainer) heroContainer.style.gridTemplateColumns = "1fr";
  }
}

function initDealPopup() {
  const dealId = localStorage.getItem("aurafinds_deal_of_the_day") || "1004";
  const dealProduct = state.products.find(p => p.id === dealId);
  
  if (dealProduct && dom.dealPopupOverlay) {
    // Populate Popup elements
    if (dom.dealPopupImg) {
      dom.dealPopupImg.src = dealProduct.image;
      dom.dealPopupImg.alt = dealProduct.title;
    }
    if (dom.dealPopupTitle) dom.dealPopupTitle.textContent = dealProduct.title;
    if (dom.dealPopupTagline) dom.dealPopupTagline.textContent = dealProduct.tagline;
    if (dom.dealPopupPrice) dom.dealPopupPrice.textContent = `₹${dealProduct.price.toLocaleString('en-IN')}`;
    
    if (dom.dealPopupOldPrice) {
      if (dealProduct.originalPrice) {
        dom.dealPopupOldPrice.textContent = `₹${dealProduct.originalPrice.toLocaleString('en-IN')}`;
        dom.dealPopupOldPrice.style.display = "inline";
        
        // Calculate savings
        const savings = Math.round(((dealProduct.originalPrice - dealProduct.price) / dealProduct.originalPrice) * 100);
        if (dom.dealPopupSavings) {
          dom.dealPopupSavings.textContent = `-${savings}% OFF`;
          dom.dealPopupSavings.style.display = "inline-block";
        }
      } else {
        dom.dealPopupOldPrice.style.display = "none";
        if (dom.dealPopupSavings) dom.dealPopupSavings.style.display = "none";
      }
    }
    
    if (dom.dealPopupLink) {
      dom.dealPopupLink.href = `#product/${dealProduct.id}`;
      // When the link is clicked, close the popup
      dom.dealPopupLink.addEventListener("click", () => {
        dom.dealPopupOverlay.style.display = "none";
      });
    }
    
    // Close button listener
    if (dom.closeDealPopup) {
      dom.closeDealPopup.addEventListener("click", () => {
        dom.dealPopupOverlay.style.display = "none";
      });
    }
    
    // Click outside overlay to close
    dom.dealPopupOverlay.addEventListener("click", (e) => {
      if (e.target === dom.dealPopupOverlay) {
        dom.dealPopupOverlay.style.display = "none";
      }
    });

    // Trigger Popup after 10 seconds (10000 ms) - Disabled by request
    /*
    setTimeout(() => {
      // Only show if the user hasn't already navigated to a specific product or admin view, to preserve UX
      const currentHash = window.location.hash;
      if (!currentHash.startsWith("#product/") && currentHash !== "#privacy") {
        dom.dealPopupOverlay.style.display = "flex";
      }
    }, 10000);
    */
  }
}

/* ==========================================================================
   ROUTING ENGINE (SPA DESIGN)
   ========================================================================== */
function handleRouting() {
  const hash = window.location.hash;
  
  if (hash === "#privacy") {
    // Privacy Policy Page Route
    showPrivacyPolicyPage();
  } else if (hash.startsWith("#product/")) {
    // Detail View Route: #product/aurasound-max
    const productId = hash.replace("#product/", "");
    const product = state.products.find(p => p.id === productId);
    
    if (product) {
      showProductDetailsPage(product);
    } else {
      // Fallback if product not found
      window.location.hash = "";
    }
  } else {
    // Catalog View Route (Default)
    showCatalogPage();
  }
}

function showCatalogPage() {
  dom.productDetailView.style.display = "none";
  dom.privacyPolicyView.style.display = "none";
  dom.heroBanner.style.display = "block";
  dom.productsShowcase.style.display = "block";
  
  renderCatalog();
  
  const hash = window.location.hash;
  if (hash === "#products-showcase") {
    const el = document.getElementById("products-showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }
  
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showPrivacyPolicyPage() {
  dom.productDetailView.style.display = "none";
  dom.heroBanner.style.display = "none";
  dom.productsShowcase.style.display = "none";
  
  dom.privacyPolicyView.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showProductDetailsPage(product) {
  // Hide Home and Privacy view
  dom.heroBanner.style.display = "none";
  dom.productsShowcase.style.display = "none";
  dom.privacyPolicyView.style.display = "none";
  
  // Show detail view
  dom.productDetailView.style.display = "block";
  
  // Populate Detail elements
  dom.detailCategory.textContent = product.category;
  dom.detailCategory.setAttribute("href", `#products-showcase`);
  dom.detailTitle.textContent = product.title;
  dom.detailCategoryLabel.textContent = product.category;
  dom.detailProductTitle.textContent = product.title;
  dom.detailProductTagline.textContent = product.tagline;
  
  // Ratings
  dom.detailRatingScore.textContent = product.rating;
  dom.detailReviewCount.textContent = `(${product.reviewCount.toLocaleString()} reviews)`;
  dom.detailStars.innerHTML = generateStarsHTML(product.rating);
  
  // Image & Product Code
  dom.detailMainImage.src = product.image;
  dom.detailMainImage.alt = product.title;
  
  const detailCodeBadge = document.getElementById("detail-code-badge");
  if (detailCodeBadge) {
    detailCodeBadge.textContent = `ID: ${product.id}`;
  }
  
  const priceDisclaimerDate = document.getElementById("price-disclaimer-date");
  if (priceDisclaimerDate) {
    priceDisclaimerDate.textContent = getFormattedDisclaimerDate();
  }
  
  // Colors Selector
  if (product.colors && product.colors.length > 0) {
    dom.detailColorsContainer.style.display = "block";
    dom.detailColorsList.innerHTML = product.colors.map((c, idx) => `
      <div class="color-dot ${idx === 0 ? 'active' : ''}" style="background-color: ${c.hex};" onclick="selectColor(this, ${idx}, '${product.id}')" title="${c.name}"></div>
    `).join("");
  } else {
    dom.detailColorsContainer.style.display = "none";
    dom.detailColorsList.innerHTML = "";
  }
  
  // Pricing & Amazon Link (Adaptive to Variants)
  if (product.variants && product.variants.length > 0) {
    dom.detailVariantsContainer.style.display = "block";
    dom.detailVariantsList.innerHTML = product.variants.map((v, idx) => `
      <button class="variant-btn" onclick="selectVariant(this, ${idx}, '${product.id}')">
        ${v.name}
      </button>
    `).join("");
    // Initialize with first variant
    selectVariant(null, 0, product.id);
  } else {
    dom.detailVariantsContainer.style.display = "none";
    dom.detailVariantsList.innerHTML = "";
    
    dom.detailPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;
    if (product.originalPrice) {
      dom.detailOriginalPrice.textContent = `₹${product.originalPrice.toLocaleString('en-IN')}`;
      dom.detailOriginalPrice.style.display = "inline";
      const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
      dom.detailDiscountPercent.textContent = `-${discount}%`;
      dom.detailDiscountPercent.style.display = "inline";
    } else {
      dom.detailOriginalPrice.style.display = "none";
      dom.detailDiscountPercent.style.display = "none";
    }
    dom.detailAmazonLink.href = product.amazonUrl;
  }
  
  // Wishlist Action Button
  const isWishlisted = state.wishlist.includes(product.id);
  const wishlistBtnText = dom.detailWishlistBtn.querySelector(".wishlist-btn-text");
  const heartIcon = dom.detailWishlistBtn.querySelector("svg");
  
  if (isWishlisted) {
    dom.detailWishlistBtn.classList.add("active");
    wishlistBtnText.textContent = "Saved to Wishlist";
  } else {
    dom.detailWishlistBtn.classList.remove("active");
    wishlistBtnText.textContent = "Add to Wishlist";
  }
  dom.detailWishlistBtn.onclick = () => toggleWishlistItem(product.id);
  
  // Description & Features
  dom.detailDescription.textContent = product.description;
  
  dom.detailFeatures.innerHTML = product.features.map(feat => `
    <li>
      <svg class="lucide lucide-check-circle" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${feat}</span>
    </li>
  `).join("");
  
  // Specs Table
  dom.detailSpecsBody.innerHTML = Object.entries(product.specifications).map(([key, val]) => `
    <tr>
      <td>${key}</td>
      <td>${val}</td>
    </tr>
  `).join("");
  
  window.scrollTo({ top: 0, behavior: "smooth" });
  
  // Update icons if lucide is available
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.selectVariant = function(btn, idx, productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product || !product.variants || !product.variants[idx]) return;
  
  const variant = product.variants[idx];
  
  const detailPrice = document.getElementById("detail-price");
  const detailOriginalPrice = document.getElementById("detail-original-price");
  const detailDiscountPercent = document.getElementById("detail-discount-percent");
  const detailAmazonLink = document.getElementById("detail-amazon-link");
  
  if (detailPrice) detailPrice.textContent = `₹${variant.price.toLocaleString('en-IN')}`;
  
  if (detailOriginalPrice && detailDiscountPercent) {
    if (variant.originalPrice) {
      detailOriginalPrice.textContent = `₹${variant.originalPrice.toLocaleString('en-IN')}`;
      detailOriginalPrice.style.display = "inline";
      const discount = Math.round(((variant.originalPrice - variant.price) / variant.originalPrice) * 100);
      detailDiscountPercent.textContent = `-${discount}%`;
      detailDiscountPercent.style.display = "inline";
    } else {
      detailOriginalPrice.style.display = "none";
      detailDiscountPercent.style.display = "none";
    }
  }
  
  if (detailAmazonLink) detailAmazonLink.href = variant.amazonUrl;
  
  // Highlight active button
  if (btn) {
    const parent = btn.parentElement;
    if (parent) {
      parent.querySelectorAll(".variant-btn").forEach(b => b.classList.remove("active"));
    }
    btn.classList.add("active");
  } else {
    const list = document.getElementById("detail-variants-list");
    if (list) {
      const firstBtn = list.querySelector(".variant-btn");
      if (firstBtn) firstBtn.classList.add("active");
    }
  }
};

window.selectColor = function(dot, idx, productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product || !product.colors || !product.colors[idx]) return;
  
  const color = product.colors[idx];
  
  const detailMainImage = document.getElementById("detail-main-image");
  if (detailMainImage) {
    detailMainImage.src = color.image;
  }
  
  if (dot) {
    const parent = dot.parentElement;
    if (parent) {
      parent.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
    }
    dot.classList.add("active");
  }
};

/* ==========================================================================
   RENDERING ENGINE (CATALOG & GRID)
   ========================================================================== */
function renderCatalog() {
  const filtered = state.products.filter(product => {
    // 1. Category Filter
    const matchesCategory = state.filters.category === "all" || product.category === state.filters.category;
    
    // 2. Search Keyword Filter
    const query = state.filters.search.toLowerCase().trim();
    const matchesSearch = !query || 
      (product.title && product.title.toLowerCase().includes(query)) ||
      (product.tagline && product.tagline.toLowerCase().includes(query)) ||
      (product.category && product.category.toLowerCase().includes(query)) ||
      (Array.isArray(product.features) && product.features.some(f => f && f.toLowerCase().includes(query)));
      
    return matchesCategory && matchesSearch;
  });
  
  // 3. Sorting
  filtered.sort((a, b) => {
    switch (state.filters.sort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "popular":
      default:
        return b.reviewCount - a.reviewCount; // Use reviews count as popular indicator
    }
  });

  // Render Layout
  renderGrid(filtered);
  updateFiltersMeta(filtered.length);
}

function renderGrid(productsList) {
  if (productsList.length === 0) {
    dom.productsGrid.innerHTML = `
      <div class="empty-grid">
        <svg class="lucide lucide-search-x empty-grid-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
          <path d="m8 8 6 6"></path>
          <path d="m14 8-6 6"></path>
        </svg>
        <h3>No matches found</h3>
        <p>Try refining your search keyword or switching categories.</p>
        <button class="btn btn-primary btn-sm" id="empty-reset-btn">Reset All Filters</button>
      </div>
    `;
    
    document.getElementById("empty-reset-btn").addEventListener("click", resetAllFilters);
    return;
  }

  dom.productsGrid.innerHTML = productsList.map((product, index) => {
    const isWishlisted = state.wishlist.includes(product.id);
    const discountPercent = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    // Top 2 features for snippet view on the card
    const featureSnippets = product.features.slice(0, 2).map(feat => `
      <li>
        <svg class="lucide lucide-check" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${feat}</span>
      </li>
    `).join("");

    return `
      <article class="product-card" style="animation-delay: ${index * 0.05}s">
        <!-- Image Box -->
        <div class="card-image-box">
          <span class="card-code-badge">ID: ${product.id}</span>
          <span class="card-category-badge">${product.category}</span>
          <button class="wishlist-toggle ${isWishlisted ? "active" : ""}" 
                  onclick="event.stopPropagation(); toggleWishlistItem('${product.id}')" 
                  aria-label="Add to Wishlist" 
                  title="Add to Wishlist">
            <svg class="lucide lucide-heart" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>
          <a href="#product/${product.id}">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
          </a>
        </div>

        <!-- Card Body -->
        <div class="card-body">
          <div class="card-rating-row">
            <div class="rating-stars">
              ${generateStarsHTML(product.rating)}
            </div>
            <span>${product.rating} (${product.reviewCount.toLocaleString()})</span>
          </div>

          <h3><a href="#product/${product.id}">${product.title}</a></h3>
          <p class="card-tagline">${product.tagline}</p>
          
          <ul class="card-features-snippet">
            ${featureSnippets}
          </ul>

          <div class="card-price-section">
            <span class="price">₹${product.price.toLocaleString('en-IN')}</span>
            ${product.originalPrice ? `<span class="original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ""}
            ${discountPercent > 0 ? `<span class="discount">-${discountPercent}%</span>` : ""}
          </div>

          <div class="card-actions">
            <a href="#product/${product.id}" class="btn btn-outline btn-sm">Details</a>
            <a href="${product.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              Buy on Amazon <svg class="lucide lucide-external-link" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   WISH LIST ACTIONS
   ========================================================================== */
function toggleWishlistItem(productId) {
  const index = state.wishlist.indexOf(productId);
  if (index === -1) {
    state.wishlist.push(productId);
  } else {
    state.wishlist.splice(index, 1);
  }
  
  // Persist State
  localStorage.setItem("aurafinds_wishlist", JSON.stringify(state.wishlist));
  
  // Sync page UIs
  updateWishlistUI();
  
  // Update detail view wishlist button if active on this product
  const hash = window.location.hash;
  if (hash === `#product/${productId}`) {
    const isWishlisted = state.wishlist.includes(productId);
    const wishlistBtnText = dom.detailWishlistBtn.querySelector(".wishlist-btn-text");
    if (isWishlisted) {
      dom.detailWishlistBtn.classList.add("active");
      wishlistBtnText.textContent = "Saved to Wishlist";
    } else {
      dom.detailWishlistBtn.classList.remove("active");
      wishlistBtnText.textContent = "Add to Wishlist";
    }
  }

  // Rerender catalog to sync the grid item cards
  if (dom.productsShowcase.style.display !== "none") {
    renderCatalog();
  }
}

function updateWishlistUI() {
  // Update Nav Badge count
  const count = state.wishlist.length;
  dom.wishlistCount.textContent = count;
  dom.wishlistCount.style.display = count > 0 ? "flex" : "none";
  
  // Render Drawer Content
  if (count === 0) {
    dom.wishlistDrawerContent.innerHTML = `
      <div class="empty-wishlist">
        <svg class="lucide lucide-shopping-bag empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
          <path d="M3 6h18"></path>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p>Your wishlist is empty.</p>
        <button class="btn btn-sm btn-outline close-wishlist-trigger">Start Browsing</button>
      </div>
    `;
    
    dom.wishlistDrawerContent.querySelector(".close-wishlist-trigger").addEventListener("click", () => {
      dom.wishlistOverlay.classList.remove("open");
    });
  } else {
    const wishlistProducts = state.products.filter(p => state.wishlist.includes(p.id));
    
    dom.wishlistDrawerContent.innerHTML = wishlistProducts.map(product => `
      <div class="wishlist-item">
        <div class="wishlist-item-img">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="wishlist-item-details">
          <h4><a href="#product/${product.id}" class="wishlist-link-item">${product.title}</a></h4>
          <span class="price">₹${product.price.toLocaleString('en-IN')}</span>
        </div>
        <div class="wishlist-item-actions">
          <button class="wishlist-remove-btn" onclick="toggleWishlistItem('${product.id}')" title="Remove item">
            <svg class="lucide lucide-trash-2" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
          </button>
          <a href="${product.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn wishlist-buy-btn">
            Buy <svg class="lucide lucide-external-link" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></svg>
          </a>
        </div>
      </div>
    `).join("");

    // Wire up links to close the drawer upon click
    dom.wishlistDrawerContent.querySelectorAll(".wishlist-link-item").forEach(link => {
      link.addEventListener("click", () => {
        dom.wishlistOverlay.classList.remove("open");
      });
    });
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   EVENT HANDLERS & FILTERS
   ========================================================================== */
function setupEventListeners() {
  // SPA Routing Event
  window.addEventListener("hashchange", handleRouting);
  
  // Theme Toggle Event
  dom.themeToggle.addEventListener("click", () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    state.theme = newTheme;
    applyTheme(newTheme);
  });

  // Logo back home click
  dom.logoLink.addEventListener("click", (e) => {
    if (window.location.hash !== "") {
      e.preventDefault();
      window.location.hash = "";
    }
  });

  // Search input events (desktop)
  dom.searchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    state.filters.search = val;
    dom.mobileSearchInput.value = val; // Sync mobile input
    dom.clearSearch.style.display = val ? "block" : "none";
    dom.mobileClearSearch.style.display = val ? "block" : "none";
    
    // Redirect back to catalog showcase if typing search while in a details page
    if (window.location.hash.startsWith("#product/")) {
      window.location.hash = "";
    } else {
      renderCatalog();
    }
  });

  dom.clearSearch.addEventListener("click", () => {
    dom.searchInput.value = "";
    dom.mobileSearchInput.value = "";
    state.filters.search = "";
    dom.clearSearch.style.display = "none";
    dom.mobileClearSearch.style.display = "none";
    renderCatalog();
  });

  // Search input events (mobile)
  dom.mobileSearchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    state.filters.search = val;
    dom.searchInput.value = val; // Sync desktop input
    dom.mobileClearSearch.style.display = val ? "block" : "none";
    dom.clearSearch.style.display = val ? "block" : "none";
    
    // Redirect back to catalog showcase if typing search while in a details page
    if (window.location.hash.startsWith("#product/")) {
      window.location.hash = "";
    } else {
      renderCatalog();
    }
  });

  dom.mobileClearSearch.addEventListener("click", () => {
    dom.searchInput.value = "";
    dom.mobileSearchInput.value = "";
    state.filters.search = "";
    dom.clearSearch.style.display = "none";
    dom.mobileClearSearch.style.display = "none";
    renderCatalog();
  });

  // Category Filtering
  dom.categoryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      dom.categoryChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      
      state.filters.category = chip.getAttribute("data-category");
      renderCatalog();
    });
  });

  // Sorting
  dom.sortSelect.addEventListener("change", (e) => {
    state.filters.sort = e.target.value;
    renderCatalog();
  });

  // Reset Filters Button click
  dom.resetFiltersBtn.addEventListener("click", resetAllFilters);

  // Wishlist Drawer Toggles
  const triggers = document.querySelectorAll(".wishlist-trigger");
  triggers.forEach(t => {
    t.addEventListener("click", (e) => {
      e.preventDefault();
      dom.wishlistOverlay.classList.add("open");
    });
  });

  dom.closeWishlist.addEventListener("click", () => {
    dom.wishlistOverlay.classList.remove("open");
  });

  // Close wishlist by clicking on background overlay
  dom.wishlistOverlay.addEventListener("click", (e) => {
    if (e.target === dom.wishlistOverlay) {
      dom.wishlistOverlay.classList.remove("open");
    }
  });

  // Detail View back to catalog action
  dom.detailBackBtn.addEventListener("click", () => {
    window.location.hash = "";
  });

  // Privacy Policy back to catalog action
  dom.privacyBackBtn.addEventListener("click", () => {
    window.location.hash = "";
  });
}

/* ==========================================================================
   SUPPORT & HELPER FUNCTIONS
   ========================================================================== */
function applyTheme(theme) {
  dom.html.setAttribute("data-theme", theme);
  localStorage.setItem("aurafinds_theme", theme);
}

function getFormattedDisclaimerDate() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return `${dateStr} 12:00 PM IST`;
}

function resetAllFilters() {
  state.filters.category = "all";
  state.filters.search = "";
  state.filters.sort = "popular";
  
  // Sync UIs
  dom.searchInput.value = "";
  dom.mobileSearchInput.value = "";
  dom.clearSearch.style.display = "none";
  dom.mobileClearSearch.style.display = "none";
  dom.sortSelect.value = "popular";
  
  dom.categoryChips.forEach(c => {
    if (c.getAttribute("data-category") === "all") {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });
  
  renderCatalog();
}

function updateFiltersMeta(count) {
  const hasActiveFilters = state.filters.category !== "all" || state.filters.search !== "";
  
  if (hasActiveFilters) {
    dom.resultsMeta.style.display = "flex";
    dom.resultsCountText.textContent = `Found ${count} matching product${count === 1 ? "" : "s"}`;
  } else {
    dom.resultsMeta.style.display = "none";
  }
}

// Custom SVGs rendering for ratings stars without loading issues
function generateStarsHTML(rating) {
  let starsHTML = "";
  const floorRating = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= floorRating) {
      // Full Star
      starsHTML += `
        <svg class="lucide lucide-star filled" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `;
    } else if (i === floorRating + 1 && hasHalf) {
      // Half Star using linear gradients
      starsHTML += `
        <svg class="lucide lucide-star half" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
          <defs>
            <linearGradient id="half-star-gradient">
              <stop offset="50%" stop-color="var(--star-color)" />
              <stop offset="50%" stop-color="transparent" stop-opacity="1" />
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half-star-gradient)"></polygon>
        </svg>
      `;
    } else {
      // Empty Star
      starsHTML += `
        <svg class="lucide lucide-star empty" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" style="opacity: 0.35;">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `;
    }
  }
  return starsHTML;
}

// Run on boot
document.addEventListener("DOMContentLoaded", init);
