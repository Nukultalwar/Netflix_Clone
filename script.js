// Enhanced movie data with trailers, hero backgrounds, category
const allMovies = [
    // Trending/Home hero candidates
    { title: 'Stranger Things', category: 'tv', desc: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments...', img: 'https://images.unsplash.com/photo-1489599091523-8c8f47b390d2?ixlib=rb-4.0.3&w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1489599091523-8c8f47b390d2?ixlib=rb-4.0.3&w=400&h=600&fit=crop', heroBg: 'https://images.unsplash.com/photo-1489599091523-8c8f47b390d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', trailer: 'https://www.youtube.com/embed/1ScKKAGJtpE?autoplay=1' },
    { title: 'The Witcher', category: 'tv', desc: 'Geralt of Rivia journeys toward his destiny...', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop', heroBg: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=2070&fit=crop', trailer: 'https://www.youtube.com/embed/3G2yKohHnVo?autoplay=1' },
    { title: 'Squid Game', category: 'tv', desc: 'Hundreds of cash-strapped players...', img: 'https://images.unsplash.com/photo-1634567985808-f04bb1529c46?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1634567985808-f04bb1529c46?w=400&h=600&fit=crop', heroBg: 'https://images.unsplash.com/photo-1634567985808-f04bb1529c46?w=2070&fit=crop', trailer: 'https://www.youtube.com/embed/lI44sBw5Kv8?autoplay=1' },
    
    // TV shows
    { title: 'Wednesday', category: 'tv', desc: 'Addams Family spin-off...', img: 'https://images.unsplash.com/photo-1672482826959-37a5a13d621d?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1672482826959-37a5a13d621d?w=400&h=600&fit=crop', trailer: 'https://www.youtube.com/embed/WJVk51cX2t8?autoplay=1' },
    { title: 'The Crown', category: 'tv', desc: 'Follows the political rivalries...', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=600&fit=crop', trailer: 'https://www.youtube.com/embed/8fnV8dh6K4Q?autoplay=1' },
    
    // Movies
    { title: 'John Wick 4', category: 'movie', desc: 'John Wick uncovers a path...', img: 'https://images.unsplash.com/photo-1687443547504-d4bb9d08eaf9?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1687443547504-d4bb9d08eaf9?w=400&h=600&fit=crop', heroBg: 'https://images.unsplash.com/photo-1687443547504-d4bb9d08eaf9?w=2070&fit=crop', trailer: 'https://www.youtube.com/embed/RzF-wBOpSub?autoplay=1' },
    { title: 'Mission Impossible', category: 'movie', desc: 'Ethan Hunt and team...', img: 'https://images.unsplash.com/photo-1579751624573-8355d7d82d72?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1579751624573-8355d7d82d72?w=400&h=600&fit=crop', heroBg: 'https://images.unsplash.com/photo-1579751624573-8355d7d82d72?w=2070&fit=crop', trailer: 'https://www.youtube.com/embed/W9BmLavzQeM?autoplay=1' },
    { title: 'Avatar 2', category: 'movie', desc: 'Jake Sully lives...', img: 'https://images.unsplash.com/photo-1644398027670-cd223cf6f83b?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1644398027670-cd223cf6f83b?w=400&h=600&fit=crop', trailer: 'https://www.youtube.com/embed/q6reMCvU6rc?autoplay=1' },
    { title: 'Smile', category: 'movie', desc: 'After witnessing a bizarre suicide...', img: 'https://images.unsplash.com/photo-1539571598029-5d3b6e3f7e99?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1539571598029-5d3b6e3f7e99?w=400&h=600&fit=crop', trailer: 'https://www.youtube.com/embed/RqbJboZ8hDU?autoplay=1' },
    
    // Comedy
    { title: 'The Office', category: 'tv', desc: 'Mockumentary of office life...', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=600&fit=crop', trailer: 'https://www.youtube.com/embed/UfOrpq1r8rs?autoplay=1' },
    { title: 'Friends', category: 'tv', desc: 'Follows six friends...', img: 'https://images.unsplash.com/photo-1519882468016-5e3e0af1eb93?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1519882468016-5e3e0af1eb93?w=400&h=600&fit=crop', trailer: 'https://www.youtube.com/embed/8Nu1Q3kTObQ?autoplay=1' },
    
    // More for Top10/New
    { title: 'House of the Dragon', category: 'tv', desc: 'The Targaryen dynasty...', img: 'https://images.unsplash.com/photo-1663320787268-ce743baa02f2?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1663320787268-ce743baa02f2?w=400&h=600&fit=crop', trailer: 'https://www.youtube.com/embed/iYbYmqO7f_U?autoplay=1' },
    { title: 'The Rings of Power', category: 'tv', desc: 'Epic tale of good and evil...', img: 'https://images.unsplash.com/photo-1564439802190-5a60fe397f2d?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1564439802190-5a60fe397f2d?w=400&h=600&fit=crop', trailer: 'https://www.youtube.com/embed/t_hFz5z873w?autoplay=1' },
    { title: 'Dahmer', category: 'tv', desc: 'Based on real events...', img: 'https://images.unsplash.com/photo-1542309667-2a115d3f72c5?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1542309667-2a115d3f72c5?w=400&h=600&fit=crop', trailer: 'https://www.youtube.com/embed/_cW-VvKffFw?autoplay=1' },
    { title: 'Barbarian', category: 'movie', desc: 'A woman discovers...', img: 'https://images.unsplash.com/photo-1668096778506-9144544b7dd8?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1668096778506-9144544b7dd8?w=400&h=600&fit=crop', trailer: 'https://www.youtube.com/embed/Jh76FdcagV8?autoplay=1' },
    { title: 'Nope', category: 'movie', desc: 'Residents of a small ranch...', img: 'https://images.unsplash.com/photo-1660949137200-188fd98ab6d4?w=300&h=450&fit=crop', posterLg: 'https://images.unsplash.com/photo-1660949137200-188fd98ab6d4?w=400&h=600&fit=crop', trailer: 'https://www.youtube.com/embed/UD6YVeCT0WI?autoplay=1' }
];

let myList = JSON.parse(localStorage.getItem('netflixMylist')) || [];

const pageData = {
    'home': {
        hero: allMovies[0],
        rows: {
            'trending-home': allMovies.slice(0,5),
            'top10-home': allMovies.slice(7,10),
            'action-home': allMovies.filter(m => m.category === 'movie').slice(0,3),
            'comedy-home': allMovies.filter(m => ['The Office', 'Friends'].includes(m.title)),
            'horror-home': allMovies.filter(m => ['Smile', 'Barbarian', 'Nope'].includes(m.title))
        }
    },
    'tv-shows': {
        hero: allMovies[1],
        rows: {
            'tv-popular': allMovies.filter(m => m.category === 'tv').slice(0,4),
            'tv-comedy': allMovies.filter(m => ['The Office', 'Friends'].includes(m.title))
        }
    },
    'movies': {
        hero: allMovies[5],
        rows: {
            'movies-action': allMovies.filter(m => ['John Wick 4', 'Mission Impossible'].includes(m.title)),
            'movies-comedy': [],
            'movies-horror': allMovies.filter(m => ['Smile', 'Barbarian', 'Nope'].includes(m.title))
        }
    },
    'new-popular': {
        hero: allMovies[2],
        rows: {
            'new-trending': allMovies.slice(0,4),
            'new-top10': allMovies.slice(7,10)
        }
    }
};

// DOM elements
const hero = document.getElementById('hero');
const navbar = document.querySelector('.navbar');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Enhanced populate row with hearts and touch support
function populateRow(rowId, data, large = false) {
    const row = document.getElementById(rowId);
    row.innerHTML = ''; // Clear previous
    data.forEach(movie => {
        const poster = document.createElement('div');
        poster.className = `poster ${large ? 'large' : ''}`;
        poster.style.backgroundImage = `url(${movie.img})`;
        poster.dataset.movie = JSON.stringify(movie);
        
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.innerHTML = '♥';
        heart.onclick = (e) => {
            e.stopPropagation();
            toggleMyList(movie);
        };
        // Check if in mylist
        if (myList.some(m => m.title === movie.title)) {
            heart.style.opacity = '1';
            heart.style.color = '#e50914';
        }
        poster.appendChild(heart);
        
        poster.addEventListener('click', (e) => {
            if (!e.target.classList.contains('heart')) {
                openModal(JSON.parse(poster.dataset.movie));
            }
        });
        
        row.appendChild(poster);
    });

    // Mouse and touch scroll
    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
    });
    row.addEventListener('mouseleave', () => {
        isDown = false;
    });
    row.addEventListener('mouseup', () => {
        isDown = false;
    });
    row.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - row.offsetLeft;
        const walk = (x - startX) * 2;
        row.scrollLeft = scrollLeft - walk;
    });

    // Touch events
    row.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
    });
    row.addEventListener('touchend', () => {
        isDown = false;
    });
    row.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - row.offsetLeft;
        const walk = (x - startX) * 2;
        row.scrollLeft = scrollLeft - walk;
    });
}

// Page switching
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    // Update hero
    const pageInfo = pageData[pageId];
    if (pageInfo.hero) {
        const heroBg = document.getElementById('hero-bg');
        const heroInfo = document.getElementById('hero-info');
        heroBg.style.backgroundImage = `url(${pageInfo.hero.heroBg})`;
        heroInfo.innerHTML = `
            <h1>${pageInfo.hero.title}</h1>
            <p>${pageInfo.hero.desc}</p>
        `;
    }
    
    // Populate rows
    Object.entries(pageInfo.rows).forEach(([rowId, movies]) => {
        populateRow(rowId, movies);
    });
    
    window.scrollTo(0, 0);
}

// Navigation handlers
document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        showPage(page);
        document.getElementById('mobile-menu').classList.remove('active');
        document.getElementById('hamburger').classList.remove('active');
    });
});

// Hamburger menu
document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    const ham = document.getElementById('hamburger');
    menu.classList.toggle('active');
    ham.classList.toggle('active');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showPage('home'); // Load home first
    document.getElementById('mylist-count').textContent = myList.length;
});

// Enhanced modal with trailer
function openModal(movie) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-desc').textContent = movie.desc;
    document.getElementById('trailer-iframe').src = movie.trailer;
    modal.style.display = 'flex';
}

// Close modal and stop trailer
document.querySelector('.close').onclick = () => {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('trailer-iframe');
    iframe.src = '';
    modal.style.display = 'none';
};

document.getElementById('modal').onclick = (e) => {
    if (e.target.id === 'modal') {
        const iframe = document.getElementById('trailer-iframe');
        iframe.src = '';
        e.target.style.display = 'none';
    }
};

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    allMovies.forEach(movie => {
        const posters = document.querySelectorAll(`[data-movie*="${movie.title.toLowerCase()}"]`);
        posters.forEach(poster => poster.style.display = movie.title.toLowerCase().includes(query) ? 'block' : 'none');
    });
});

// My List functions
function toggleMyList(movie) {
    const index = myList.findIndex(m => m.title === movie.title);
    if (index > -1) {
        myList.splice(index, 1);
    } else {
        myList.push(movie);
    }
    localStorage.setItem('netflixMylist', JSON.stringify(myList));
    document.getElementById('mylist-count').textContent = myList.length;
    
    // Refresh current page rows to update hearts
    const activePage = document.querySelector('.page.active').id;
    if (pageData[activePage]) {
        Object.values(pageData[activePage].rows).flat().forEach(populateRow);
    }
    
    // Update my list page if active
    if (activePage === 'my-list') {
        populateMyList();
    }
}

function populateMyList() {
    const row = document.getElementById('mylist-posters');
    populateRow('mylist-posters', myList);
}

// Hero buttons
document.getElementById('hero-play').addEventListener('click', () => {
    const currentHero = document.querySelector('#hero-info h1').textContent;
    alert(`▶ Playing ${currentHero}!`);
});

document.getElementById('hero-info-btn').addEventListener('click', () => {
    const pageId = document.querySelector('.page.active').id;
    openModal(pageData[pageId].hero);
});

// My List nav handler
document.querySelector('a[data-page="my-list"]').addEventListener('click', () => {
    showPage('my-list');
    populateMyList();
});

