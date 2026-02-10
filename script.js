// Fun fact functionality
function showFunFact(letter, fact) {
    const overlay = document.getElementById('funFactOverlay');
    const card = document.getElementById('funFactCard');
    const letterEl = document.getElementById('funFactLetter');
    const textEl = document.getElementById('funFactText');

    letterEl.textContent = letter;
    textEl.textContent = fact;

    overlay.classList.add('active');
    card.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFunFact() {
    const overlay = document.getElementById('funFactOverlay');
    const card = document.getElementById('funFactCard');

    overlay.classList.remove('active');
    card.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add click listeners to name letters
document.querySelectorAll('.hero h1 span').forEach(span => {
    const fact = span.getAttribute('data-fact');
    if (fact) {
        span.addEventListener('click', (e) => {
            e.stopPropagation();
            const letter = span.textContent.trim();
            if (letter) {
                showFunFact(letter, fact);
            }
        });
    }
});

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabName + '-content').classList.add('active');
    event.target.classList.add('active');
}

function sortProjects(value) {
    const [sortBy, direction] = value.split('-');

    document.querySelectorAll('.projects-grid').forEach(grid => {
        const cards = Array.from(grid.querySelectorAll('.project-card'));
        if (cards.length === 0) return;

        cards.sort((a, b) => {
            let valA, valB;

            if (sortBy === 'number') {
                valA = parseInt(a.querySelector('.project-number').textContent, 10) || 0;
                valB = parseInt(b.querySelector('.project-number').textContent, 10) || 0;
            } else if (sortBy === 'year') {
                const yearA = a.querySelector('.project-year').textContent.trim();
                const yearB = b.querySelector('.project-year').textContent.trim();
                valA = yearA === 'Ongoing' ? 9999 : parseInt(yearA, 10);
                valB = yearB === 'Ongoing' ? 9999 : parseInt(yearB, 10);
            }

            return direction === 'asc' ? valA - valB : valB - valA;
        });

        cards.forEach(card => grid.appendChild(card));
    });
}

function openModal(project) {
    const modal = document.getElementById(project + 'Modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(project) {
    const modal = document.getElementById(project + 'Modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
