// Google Drive image hosting — maps local filenames to Drive file IDs
// URL format: https://lh3.googleusercontent.com/d/{ID}
const driveImageMap = {
    "1971_1.jpg": "1Nc8bkgsERJime58vZXhTCzIu_eOv0BEG",
    "1971_2.jpg": "1Nc8bkgsERJime58vZXhTCzIu_eOv0BEG",
    "1971_3.jpg": "1wtQQalvlR1n3dPCthD7nTqUccfwsgFJu",
    "1971_4.jpg": "101VTCToTlOaPDDOrb6XURRt9SX7KqBir",
    "1971_5.jpg": "13AKCDuM7p0e0C4gauyCD30SKh1VkgP_v",
    "1971_6.jpg": "1ZrAQIGEaKATJqr8-TNhU9DOLGfq--ibI",
    "1971_7.jpg": "1jXSImpyT9R2xHyzU2_09IrX3_NlR-2B8",
    "1971_8.jpg": "1mjW8nc38_vpnXkp8K_ZpiTsK1tdb9DrU",
    "1971_out.jpg": "1yK4p5-zjFPmj9EZhpHk6kJ5YqaQLH7G7",
    "1971_out_page-0001.jpg": "1cO9hkval7aK2o5ZONisuaR7uAlhjw95V",
    "1971_Story.jpg": "1jyHfN7qLW3VQQOojhopEG7CAqa92a8I5",
    "adaptiveout.jpg": "1ujU8ukMtiI_yWTZXoSr1AtDpMvnSNnCc",
    "ashrae-in.jpg": "1RURImw1axCGKbQjAtAlA36jP5IYg85Fq",
    "ASHRAEOut.jpg": "1TZYYWzgQYbDC5JjB0aP89f9HC4MV9JBm",
    "attendance-detail.jpg": "1-WRTnce2cuSJ_fLyfd92GDIyO7qkJVnn",
    "AttendanceOut.jpg": "1Sqg2QTM9_gA1vAUaTC0nFOpDIlJ42Zkt",
    "CA_Burden.jpg": "1qJ5UKwBi5PDjqs22k-jfB9LYsKtuhUJX",
    "CA_Income.jpg": "1_ThpOacr2Ijd5UuRL9VMmrKJ2PuimmI7",
    "CA_Industry.jpg": "1FDceBP5EgLEAi4jUlSyk735wFA_euR-6",
    "CA_KernelD.jpg": "1XASxyeuGlSM8LvPb4lAR8i2d_SnsC4mo",
    "CA_MultivPlot.jpg": "1qmd1WgHmfZTXB_Q3DAGlsfeTCKCHbNTD",
    "CA_Poverty rate.jpg": "1zYS2jdXKfqCKJPU_I2CblkYHEx8kzTvC",
    "CA_Racial.jpg": "1JudVd4lalbJ1gUPPAioPnTeMgXFypsdn",
    "CA_TRI.jpg": "1YW5KW9efAWIf_7iMGTaAy2iHrU7yFiXi",
    "CancerAlley_1.jpg": "1VYMYN4hKOf3HV0DjSsvB-JKmMERgro0_",
    "cannes_1.jpg": "1-bhbK2sId8jWcsRtaqIwXDnDX2FyilGK",
    "Carbonout.jpg": "1KBE7jlkJEtg8rfJlQe4r6rfsBbOo-c4M",
    "chicago-detail.jpg": "1Q5n2NauqVNboXUYtwOcoKm4xHzeC7XtM",
    "Crossy out.jpg": "1KZz6TCduuGoB4zWKJ9GXDl_4wsvKm3Ny",
    "Crossy.jpg": "1CV3JeFJ43gbKnVKgSY16q6bL0QCJQCQ8",
    "CSV Automation.png": "1UTrksf3A_X2FfgUeJWVjclAp_To_Jmms",
    "dataviz cropped.gif": "1bRskHJ6ZOawX4Msg4o61QufIhOvG5Xi8",
    "DaylightOut.jpg": "1L4It0BhjthGkEejQZVnMuxfx3HMXPiwP",
    "DrugDataOut.jpg": "1rEAvbrvUp6vT_SqK0gZU-eBhqX4D_bF1",
    "EPS_DBT.jpg": "1DAsaxLCbPaxJHGa6hjqzYlVSRlZrQu5z",
    "EPSOut.jpg": "1fkW4z1RRoJRLpf4DjcXwnk5XJEWk1B39",
    "fire-detail.jpg": "1FA4d_rUTlplS7pfx-JT4ZLF85Z2jk4S4",
    "fractal_1.jpg": "1lnRpKoG6T_-UB6M0bsfH3wuN3xaG683e",
    "fractal_2.jpg": "1hNWSvjF_qAr1x9l9TQ-IgyZeB5UUkLvH",
    "fractal_3.jpg": "1VS4ecIdo8VHGQOG4Yeg9T30uqAnzK_WY",
    "Fractalout.jpg": "1DSt5gwW8JQF9wNI_GDtuQx1o8mktiqJg",
    "gis.jpg": "1HV3K7oSdmGReZlBiz_p-DRGCm6epFGk4",
    "gis-detail.jpg": "1sYHGXxgJqURK-dK0nHpEbkraiwJrTktG",
    "GISOut.jpg": "1m2KyDlcTiN3dJpnrmdrJ339KPbLM_7P_",
    "HPAIROut.jpg": "1pkECLnhcRb4r1GZPgDXPpGvIG9bsTRFN",
    "hvac-detail.jpg": "1FDQ09rqi5SjCEN9Ja1Jaz7acwKogRyTN",
    "HVACOut.jpg": "1O99gT8lm9UcAFKv50Wq2Jmp4AsO5tciJ"
};

function getDriveUrl(fileId) {
    return "https://lh3.googleusercontent.com/d/" + fileId;
}

// Drive image replacement disabled — using local Images/ folder directly
// To re-enable, uncomment the block below and verify Drive IDs are correct
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll('img[src^="Images/"]').forEach(function (img) {
//         var filename = img.getAttribute("src").replace("Images/", "");
//         if (driveImageMap[filename]) {
//             img.setAttribute("src", getDriveUrl(driveImageMap[filename]));
//         }
//     });
// });

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
    modal.addEventListener('scroll', () => {
        const btn = modal.querySelector('.modal-close');
        if (btn) btn.style.transform = 'rotate(' + modal.scrollTop + 'deg)';
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
