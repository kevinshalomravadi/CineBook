/* ============================================================
   CineBook – app.js
   Full demo: movies data, modals, seat map, payment, confirmation
   ============================================================ */

'use strict';

/* ---------- Colour palette for poster gradients ---------- */
const GRADIENTS = [
  ['#1a1a2e', '#16213e', '#0f3460'],
  ['#2d1b69', '#11998e', '#38ef7d'],
  ['#f7971e', '#ffd200', '#f7971e'],
  ['#360033', '#0b8793', '#360033'],
  ['#1f4037', '#99f2c8', '#1f4037'],
  ['#4e0000', '#200122', '#6f0000'],
  ['#1a1a2e', '#c94b4b', '#4b134f'],
  ['#0052d4', '#65c7f7', '#9cecfb'],
];

/* ---------- Movies Database ---------- */
const MOVIES = [
  {
    id: 'grand-illusion',
    title: 'The Grand Illusion',
    genre: 'Action / Sci-Fi',
    rating: '9.2',
    votes: '2.4L',
    duration: '2h 48m',
    language: 'English',
    cert: 'U/A',
    desc: 'A genius architect discovers that reality is built on a series of interlocking illusions. As he unravels the code of existence, shadowy forces close in to silence him forever.',
    cast: 'Cast: Hrithik Roshan, Deepika Padukone, Tom Hardy',
    badges: ['IMAX', '4DX'],
    certTag: 'ua',
    gradient: GRADIENTS[0],
    emoji: '🌌',
    heroGradient: 'linear-gradient(135deg,#0f3460,#1a1a2e)',
  },
  {
    id: 'crimson-dawn',
    title: 'Crimson Dawn',
    genre: 'Thriller / Drama',
    rating: '8.7',
    votes: '1.1L',
    duration: '2h 12m',
    language: 'Hindi',
    cert: 'U/A',
    desc: 'A Mumbai detective chases a serial killer who leaves cryptic poems at every crime scene, while unknowingly becoming the next target.',
    cast: 'Cast: Ranveer Singh, Tabu, Nawazuddin Siddiqui',
    badges: ['HOT'],
    certTag: 'ua',
    gradient: GRADIENTS[6],
    emoji: '🌅',
  },
  {
    id: 'neon-valley',
    title: 'Neon Valley',
    genre: 'Musical / Romance',
    rating: '8.4',
    votes: '89K',
    duration: '2h 6m',
    language: 'Hindi',
    cert: 'U',
    desc: 'Two aspiring musicians fall in love in the neon-drenched streets of Bengaluru but are torn apart by ambition and family duty.',
    cast: 'Cast: Alia Bhatt, Siddhant Chaturvedi, Pankaj Tripathi',
    badges: [],
    certTag: '',
    gradient: GRADIENTS[1],
    emoji: '🎶',
  },
  {
    id: 'iron-karma',
    title: 'Iron Karma',
    genre: 'Action / Comedy',
    rating: '8.1',
    votes: '1.6L',
    duration: '2h 22m',
    language: 'Tamil',
    cert: 'U/A',
    desc: 'A washed-up Tamil superhero must save his neighbourhood from a tech mogul\'s dystopian smart-city takeover.',
    cast: 'Cast: Vijay Sethupathi, Tamannaah, Radhika Sarathkumar',
    badges: ['HOT'],
    certTag: 'ua',
    gradient: GRADIENTS[5],
    emoji: '⚡',
  },
  {
    id: 'the-quiet-river',
    title: 'The Quiet River',
    genre: 'Drama / Biography',
    rating: '9.0',
    votes: '63K',
    duration: '2h 34m',
    language: 'Bengali',
    cert: 'U',
    desc: 'The extraordinary true story of a young woman who single-handedly revived a dying folk art tradition across rural Bengal.',
    cast: 'Cast: Konkona Sen Sharma, Soumitra Chatterjee',
    badges: [],
    certTag: '',
    gradient: GRADIENTS[4],
    emoji: '🎨',
  },
  {
    id: 'darkstar',
    title: 'DarkStar',
    genre: 'Sci-Fi / Horror',
    rating: '7.9',
    votes: '45K',
    duration: '1h 58m',
    language: 'English',
    cert: 'A',
    desc: 'A deep-space mining crew unleashes an ancient alien intelligence that begins rewriting the laws of physics aboard their ship.',
    cast: 'Cast: Priyanka Chopra, Dev Patel, Mahershala Ali',
    badges: ['IMAX'],
    certTag: 'a',
    gradient: GRADIENTS[3],
    emoji: '🚀',
  },
  {
    id: 'wedding-crashers-2',
    title: 'Wedding Crashers 2',
    genre: 'Comedy / Romance',
    rating: '7.5',
    votes: '98K',
    duration: '1h 52m',
    language: 'Hindi',
    cert: 'U',
    desc: 'India\'s most lovable wedding crashers are at it again – this time accidentally crashing their own arranged marriages.',
    cast: 'Cast: Ayushmann Khurrana, Kriti Sanon, Aparshakti Khurana',
    badges: [],
    certTag: '',
    gradient: GRADIENTS[7],
    emoji: '💍',
  },
  {
    id: 'monsoon-fury',
    title: 'Monsoon Fury',
    genre: 'Disaster / Action',
    rating: '8.0',
    votes: '1.2L',
    duration: '2h 16m',
    language: 'Telugu',
    cert: 'U/A',
    desc: 'When the most catastrophic monsoon in a century strikes Mumbai, one engineer races against time to save a million lives.',
    cast: 'Cast: Allu Arjun, Samantha Ruth Prabhu, Mohanlal',
    badges: ['HOT'],
    certTag: 'ua',
    gradient: GRADIENTS[2],
    emoji: '🌊',
  },
];

const COMING_SOON = [
  { id: 'cs1', title: 'Phantom Protocol', genre: 'Espionage', date: 'Oct 18, 2026', emoji: '🕵️', gradient: GRADIENTS[3] },
  { id: 'cs2', title: 'Starfall', genre: 'Sci-Fi / Epic', date: 'Nov 2, 2026', emoji: '⭐', gradient: GRADIENTS[0] },
  { id: 'cs3', title: 'Jungle King', genre: 'Adventure', date: 'Nov 14, 2026', emoji: '🦁', gradient: GRADIENTS[4] },
  { id: 'cs4', title: 'Midnight Rush', genre: 'Crime / Thriller', date: 'Dec 5, 2026', emoji: '🚗', gradient: GRADIENTS[6] },
  { id: 'cs5', title: 'Ocean\'s Ten', genre: 'Heist / Comedy', date: 'Dec 26, 2026', emoji: '🌊', gradient: GRADIENTS[7] },
];

const CINEMAS = [
  { name: 'PVR IMAX Infiniti', location: 'Andheri West', times: ['09:30 AM', '12:45 PM', '04:00 PM', '07:15 PM', '10:30 PM'] },
  { name: 'Cinepolis Grand', location: 'Thane West', times: ['10:00 AM', '01:30 PM', '05:00 PM', '08:30 PM'] },
  { name: 'INOX Megaplex', location: 'Lower Parel', times: ['11:00 AM', '02:15 PM', '06:00 PM', '09:15 PM'] },
];

/* ---------- State ---------- */
let state = {
  selectedMovie: null,
  selectedDate: null,
  selectedCinema: null,
  selectedTime: null,
  selectedSeats: [],
  seatMap: [],
  totalAmount: 0,
};

/* ---------- DOM Refs ---------- */
const $ = id => document.getElementById(id);

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setHeroBg();
  renderMovies();
  renderComingSoon();
  setupNavbar();
  setupSearch();
  setupHeroBook();
  setupModals();
  setupPayment();
});

/* ---------- Hero Background ---------- */
function setHeroBg() {
  const hero = $('hero-bg');
  hero.style.background = 'linear-gradient(135deg,#0f3460,#1a1a2e,#4e0000)';
}

/* ============================================================
   RENDER MOVIES
   ============================================================ */
function renderMovies() {
  const grid = $('movies-grid');
  grid.innerHTML = '';
  MOVIES.forEach((m, i) => {
    const card = document.createElement('article');
    card.className = 'movie-card';
    card.style.animationDelay = `${i * 0.07}s`;
    card.setAttribute('data-id', m.id);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Book ${m.title}`);

    const badgeHtml = m.badges.map(b =>
      `<span class="movie-badge ${b.toLowerCase()}">${b}</span>`
    ).join('');

    card.innerHTML = `
      <div class="movie-poster-wrap">
        <div class="poster-placeholder" style="background:linear-gradient(135deg,${m.gradient[0]},${m.gradient[1]},${m.gradient[2]})">
          <span style="font-size:3.5rem">${m.emoji}</span>
        </div>
        ${badgeHtml}
        <div class="movie-overlay">
          <button class="overlay-btn" data-id="${m.id}">Book Now</button>
        </div>
      </div>
      <div class="movie-info">
        <div class="movie-name" title="${m.title}">${m.title}</div>
        <div class="movie-genre">${m.genre}</div>
        <div class="movie-rating-row">
          <span class="movie-rating">⭐ ${m.rating}</span>
          <span class="movie-votes">${m.votes} votes</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openMovieModal(m.id));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openMovieModal(m.id); });
    grid.appendChild(card);
  });
}

/* ============================================================
   RENDER COMING SOON
   ============================================================ */
function renderComingSoon() {
  const slider = $('coming-slider');
  slider.innerHTML = '';
  COMING_SOON.forEach(m => {
    const card = document.createElement('article');
    card.className = 'coming-card';
    card.setAttribute('aria-label', `Coming soon: ${m.title}`);
    card.innerHTML = `
      <div class="coming-poster-wrap">
        <div class="poster-placeholder" style="background:linear-gradient(135deg,${m.gradient[0]},${m.gradient[1]},${m.gradient[2]})">
          <span style="font-size:2.5rem">${m.emoji}</span>
        </div>
      </div>
      <div class="coming-info">
        <div class="coming-name">${m.title}</div>
        <div class="coming-date">📅 ${m.date}</div>
        <div class="coming-genre">${m.genre}</div>
      </div>
    `;
    slider.appendChild(card);
  });
}

/* ============================================================
   NAVBAR SCROLL EFFECT
   ============================================================ */
function setupNavbar() {
  const navbar = $('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ============================================================
   SEARCH
   ============================================================ */
function setupSearch() {
  const input = $('search-input');
  const btn = $('search-btn');

  function doSearch() {
    const q = input.value.trim().toLowerCase();
    if (!q) { renderMovies(); showToast('Showing all movies'); return; }
    const results = MOVIES.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.genre.toLowerCase().includes(q) ||
      m.language.toLowerCase().includes(q)
    );
    renderFilteredMovies(results, q);
  }

  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
}

function renderFilteredMovies(movies, query) {
  const grid = $('movies-grid');
  if (!movies.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)">
      No results for "<strong style="color:var(--text-secondary)">${query}</strong>"
    </div>`;
    return;
  }
  grid.innerHTML = '';
  movies.forEach((m, i) => {
    const card = document.createElement('article');
    card.className = 'movie-card';
    card.style.animationDelay = `${i * 0.07}s`;
    card.setAttribute('data-id', m.id);
    const badgeHtml = m.badges.map(b => `<span class="movie-badge ${b.toLowerCase()}">${b}</span>`).join('');
    card.innerHTML = `
      <div class="movie-poster-wrap">
        <div class="poster-placeholder" style="background:linear-gradient(135deg,${m.gradient[0]},${m.gradient[1]},${m.gradient[2]})">
          <span style="font-size:3.5rem">${m.emoji}</span>
        </div>
        ${badgeHtml}
        <div class="movie-overlay">
          <button class="overlay-btn" data-id="${m.id}">Book Now</button>
        </div>
      </div>
      <div class="movie-info">
        <div class="movie-name" title="${m.title}">${m.title}</div>
        <div class="movie-genre">${m.genre}</div>
        <div class="movie-rating-row">
          <span class="movie-rating">⭐ ${m.rating}</span>
          <span class="movie-votes">${m.votes} votes</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openMovieModal(m.id));
    grid.appendChild(card);
  });
  document.querySelector('#now-showing').scrollIntoView({ behavior: 'smooth' });
}

/* ============================================================
   HERO BOOK BUTTON
   ============================================================ */
function setupHeroBook() {
  $('btn-hero-book').addEventListener('click', () => openMovieModal('grand-illusion'));
  $('btn-trailer').addEventListener('click', () => showToast('🎬 Trailer would play here!'));
}

/* ============================================================
   MODAL HELPERS
   ============================================================ */
function openModal(id) {
  const el = $(id);
  el.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  const el = $(id);
  el.classList.remove('active');
  document.body.style.overflow = '';
}

function setupModals() {
  /* Close on backdrop click */
  ['movie-modal', 'seat-modal', 'payment-modal', 'confirm-modal'].forEach(id => {
    $(id).addEventListener('click', e => {
      if (e.target === $(id)) closeModal(id);
    });
  });

  /* Close buttons */
  $('modal-close-movie').addEventListener('click', () => closeModal('movie-modal'));
  $('modal-close-seat').addEventListener('click', () => closeModal('seat-modal'));
  $('modal-close-payment').addEventListener('click', () => closeModal('payment-modal'));
  $('btn-home').addEventListener('click', () => { closeModal('confirm-modal'); });
  $('btn-download').addEventListener('click', () => showToast('📥 Ticket downloaded! (demo)'));

  /* ESC key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      ['confirm-modal', 'payment-modal', 'seat-modal', 'movie-modal'].forEach(id => {
        if ($(id).classList.contains('active')) { closeModal(id); }
      });
    }
  });
}

/* ============================================================
   MOVIE DETAIL MODAL
   ============================================================ */
function openMovieModal(movieId) {
  const movie = MOVIES.find(m => m.id === movieId);
  if (!movie) return;
  state.selectedMovie = movie;
  state.selectedDate = null;
  state.selectedCinema = null;
  state.selectedTime = null;

  /* Hero banner */
  const hero = $('movie-modal-hero');
  hero.style.background = `linear-gradient(135deg,${movie.gradient[0]},${movie.gradient[1]},${movie.gradient[2]})`;
  hero.innerHTML = `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:5rem;opacity:.5">${movie.emoji}</div>`;

  /* Poster */
  $('modal-poster').src = '';
  $('modal-poster').style.background = `linear-gradient(135deg,${movie.gradient[0]},${movie.gradient[1]})`;
  $('modal-poster').style.display = 'flex';
  /* Use a placeholder div instead */
  const posterWrap = $('modal-poster').parentElement;
  posterWrap.innerHTML = `
    <div style="width:130px;height:195px;border-radius:14px;background:linear-gradient(135deg,${movie.gradient[0]},${movie.gradient[1]},${movie.gradient[2]});
    display:flex;align-items:center;justify-content:center;font-size:4rem;box-shadow:0 8px 40px rgba(0,0,0,.5);margin-top:-60px;position:relative;z-index:2;border:3px solid var(--bg-card)">
      ${movie.emoji}
    </div>`;

  /* Badges */
  const certLabel = movie.certTag === 'ua' ? 'U/A' : movie.certTag === 'a' ? 'A' : 'U';
  $('modal-badges').innerHTML = `
    <span class="modal-badge ${movie.certTag}">${certLabel}</span>
    ${movie.badges.map(b => `<span class="modal-badge">${b}</span>`).join('')}
    <span class="modal-badge">${movie.language}</span>
  `;

  /* Title & meta */
  $('modal-movie-title').textContent = movie.title;
  $('modal-meta').innerHTML = `
    <span>⭐ ${movie.rating} / 10</span>
    <span>·</span>
    <span>⏱ ${movie.duration}</span>
    <span>·</span>
    <span>${movie.genre}</span>
  `;
  $('modal-desc').textContent = movie.desc;
  $('modal-cast').innerHTML = `<strong>🎭</strong> ${movie.cast}`;

  /* Dates */
  renderDates();

  openModal('movie-modal');
}

function renderDates() {
  const row = $('dates-row');
  row.innerHTML = '';
  const now = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = 0; i < 7; i++) {
    const d = new Date(now); d.setDate(now.getDate() + i);
    const btn = document.createElement('button');
    btn.className = 'date-btn' + (i === 0 ? ' active' : '');
    btn.innerHTML = `<span class="d-day">${i === 0 ? 'Today' : days[d.getDay()]}</span><span class="d-num">${d.getDate()}</span>`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedDate = d.toDateString();
    });
    if (i === 0) state.selectedDate = d.toDateString();
    row.appendChild(btn);
  }
  renderCinemas();
}

function renderCinemas() {
  const list = $('cinemas-list');
  list.innerHTML = '';
  CINEMAS.forEach(cinema => {
    const item = document.createElement('div');
    item.className = 'cinema-item';
    const times = cinema.times.map((t, ti) => {
      const soldOut = Math.random() < 0.15;
      return `<button class="time-btn ${soldOut ? 'sold-out' : ''}"
        data-cinema="${cinema.name}" data-time="${t}" data-location="${cinema.location}"
        ${soldOut ? 'disabled' : ''}
        aria-label="${t} at ${cinema.name}">${t}</button>`;
    }).join('');
    item.innerHTML = `
      <div class="cinema-header">
        <div>
          <div class="cinema-name">🎦 ${cinema.name}</div>
          <div class="cinema-tag">📍 ${cinema.location}</div>
        </div>
        <div style="font-size:.75rem;color:var(--text-muted)">
          <span style="color:#22c55e">●</span> Seats available
        </div>
      </div>
      <div class="cinema-times">${times}</div>
    `;
    list.appendChild(item);
  });

  /* Time button clicks */
  list.querySelectorAll('.time-btn:not(.sold-out)').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedCinema = btn.dataset.cinema;
      state.selectedTime = btn.dataset.time;
      state.selectedLocation = btn.dataset.location;
      closeModal('movie-modal');
      openSeatModal();
    });
  });
}

/* ============================================================
   SEAT SELECTION MODAL
   ============================================================ */
function openSeatModal() {
  state.selectedSeats = [];
  const movie = state.selectedMovie;
  $('seat-modal-title').textContent = movie.title;
  $('seat-subtitle').textContent = `${state.selectedCinema} · ${state.selectedTime} · ${state.selectedDate}`;
  buildSeatMap();
  updateBookingSummary();
  openModal('seat-modal');
}

function buildSeatMap() {
  const map = $('seat-map');
  map.innerHTML = '';
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'];
  const COLS = 14;
  const PREMIUM_ROWS = ['A', 'B'];
  const BOOKED_PROB = 0.28;

  state.seatMap = [];

  rows.forEach(rowLabel => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'seat-row';
    const label = document.createElement('span');
    label.className = 'row-label';
    label.textContent = rowLabel;
    rowDiv.appendChild(label);

    const rowSeats = [];
    for (let c = 1; c <= COLS; c++) {
      if (c === 7 || c === 8) { /* aisle gap */
        const gap = document.createElement('span');
        gap.className = 'seat-gap';
        rowDiv.appendChild(gap);
        if (c === 8) continue;
        continue;
      }
      const seatId = `${rowLabel}${c}`;
      const isPremium = PREMIUM_ROWS.includes(rowLabel);
      const isBooked = Math.random() < BOOKED_PROB;
      const price = isPremium ? 450 : 220;

      const seat = document.createElement('button');
      seat.className = `seat ${isPremium ? 'premium' : ''} ${isBooked ? 'booked' : ''}`;
      seat.id = `seat-${seatId}`;
      seat.setAttribute('aria-label', `Seat ${seatId} ${isPremium ? '(Premium ₹' + price + ')' : '(₹' + price + ')'} ${isBooked ? '- Booked' : ''}`);
      seat.disabled = isBooked;
      seat.dataset.seatId = seatId;
      seat.dataset.price = price;
      seat.dataset.premium = isPremium ? '1' : '0';

      if (!isBooked) {
        seat.addEventListener('click', () => toggleSeat(seat));
      }

      rowDiv.appendChild(seat);
      rowSeats.push({ id: seatId, el: seat, booked: isBooked, selected: false, price });
    }
    state.seatMap.push(rowSeats);
    map.appendChild(rowDiv);
  });
}

function toggleSeat(seatEl) {
  const seatId = seatEl.dataset.seatId;
  const price = parseInt(seatEl.dataset.price);

  if (seatEl.classList.contains('selected')) {
    seatEl.classList.remove('selected');
    state.selectedSeats = state.selectedSeats.filter(s => s.id !== seatId);
  } else {
    if (state.selectedSeats.length >= 8) {
      showToast('⚠️ Maximum 8 seats per booking', 'error'); return;
    }
    seatEl.classList.add('selected');
    state.selectedSeats.push({ id: seatId, price });
  }
  updateBookingSummary();
}

function updateBookingSummary() {
  const count = state.selectedSeats.length;
  const total = state.selectedSeats.reduce((sum, s) => sum + s.price, 0);
  state.totalAmount = total + (count > 0 ? 49 : 0); /* conv. fee */

  $('selected-count').textContent = `${count} Seat${count !== 1 ? 's' : ''} Selected`;
  $('selected-seats-label').textContent = count ? state.selectedSeats.map(s => s.id).join(', ') : '';
  $('total-price').textContent = count ? `₹${state.totalAmount}` : '₹0';
  $('btn-proceed').disabled = count === 0;
}



/* ============================================================
   PAYMENT MODAL
   ============================================================ */
function openPaymentModal() {
  const movie = state.selectedMovie;
  const seats = state.selectedSeats;
  const ticketCost = seats.reduce((s, x) => s + x.price, 0);
  const convFee = 49;

  $('order-details').innerHTML = `
    <div class="order-row"><span>🎬 ${movie.title}</span><span></span></div>
    <div class="order-row"><span>${state.selectedCinema}</span><span></span></div>
    <div class="order-row"><span>${state.selectedTime} · ${state.selectedDate}</span><span></span></div>
    <div class="order-row"><span>Seats: ${seats.map(s => s.id).join(', ')}</span><span></span></div>
    <div class="order-row"><span>Ticket Cost</span><span>₹${ticketCost}</span></div>
    <div class="order-row"><span>Convenience Fee</span><span>₹${convFee}</span></div>
    <div class="order-row"><span>Total Amount</span><span>₹${state.totalAmount}</span></div>
  `;
  openModal('payment-modal');
}

function setupPayment() {
  /* Toggle UPI input visibility */
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', () => {
      $('upi-input-wrap').style.display = radio.value === 'upi' ? 'block' : 'none';
    });
  });

  $('btn-pay').addEventListener('click', handlePayment);
}

function handlePayment() {
  const btn = $('btn-pay');
  const txt = $('btn-pay-text');
  btn.classList.add('loading');
  txt.textContent = '⏳ Processing…';

  /* Simulate payment processing */
  setTimeout(() => {
    btn.classList.remove('loading');
    txt.textContent = 'Pay Now';
    closeModal('payment-modal');
    openConfirmModal();
  }, 2200);
}

/* ============================================================
   CONFIRMATION MODAL
   ============================================================ */
function openConfirmModal() {
  const movie = state.selectedMovie;
  const bookingId = 'CB' + Math.random().toString(36).substr(2, 9).toUpperCase();

  $('ticket-movie-name').textContent = movie.title;
  $('ticket-id').textContent = bookingId;
  $('ticket-cinema').textContent = state.selectedCinema;
  $('ticket-datetime').textContent = `${state.selectedDate}, ${state.selectedTime}`;
  $('ticket-seats').textContent = state.selectedSeats.map(s => s.id).join(', ');
  $('ticket-amount').textContent = `₹${state.totalAmount}`;

  openModal('confirm-modal');
  launchConfetti();
}

/* ============================================================
   CONFETTI
   ============================================================ */
function launchConfetti() {
  const container = $('confetti-container');
  container.innerHTML = '';
  const colors = ['#e8193c', '#f5c518', '#22c55e', '#3b82f6', '#a855f7', '#f97316'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${-Math.random() * 20}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${1.5 + Math.random() * 2}s;
      animation-delay: ${Math.random() * 0.8}s;
      transform: rotate(${Math.random() * 360}deg);
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
    `;
    container.appendChild(piece);
  }
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg, type = 'info') {
  const toast = $('toast');
  toast.textContent = msg;
  toast.className = `toast show ${type}`;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { toast.className = 'toast'; }, 3000);
}

/* ============================================================
   LAZY WIRE-UP (elements exist at DOMContentLoaded)
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  $('btn-proceed').addEventListener('click', () => {
    if (!state.selectedSeats.length) return;
    closeModal('seat-modal');
    openPaymentModal();
  });
});
