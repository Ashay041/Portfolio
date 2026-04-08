// Google Drive image hosting — maps local filenames to Drive file IDs
// URL format: https://lh3.googleusercontent.com/d/{ID}
// Source of truth: https://drive.google.com/drive/folders/1G9ZkWsnq9_ju06dnEry_DwfHVjXJvkO5
const driveImageMap = {
    "1971_1.jpg": "1Nc8bkgsERJime58vZXhTCzIu_eOv0BEG",
    "1971_2.jpg": "1wtQQalvlR1n3dPCthD7nTqUccfwsgFJu",
    "1971_3.jpg": "101VTCToTlOaPDDOrb6XURRt9SX7KqBir",
    "1971_4.jpg": "13AKCDuM7p0e0C4gauyCD30SKh1VkgP_v",
    "1971_5.jpg": "1ZrAQIGEaKATJqr8-TNhU9DOLGfq--ibI",
    "1971_6.jpg": "1jXSImpyT9R2xHyzU2_09IrX3_NlR-2B8",
    "1971_7.jpg": "1mjW8nc38_vpnXkp8K_ZpiTsK1tdb9DrU",
    "1971_8.jpg": "1cO9hkval7aK2o5ZONisuaR7uAlhjw95V",
    "1971_out.jpg": "1jyHfN7qLW3VQQOojhopEG7CAqa92a8I5",
    "1971_out_page-0001.jpg": "1yK4p5-zjFPmj9EZhpHk6kJ5YqaQLH7G7",
    "1971_Story.jpg": "1ujU8ukMtiI_yWTZXoSr1AtDpMvnSNnCc",
    "adaptiveout.jpg": "1RURImw1axCGKbQjAtAlA36jP5IYg85Fq",
    "ashrae-in.jpg": "1TZYYWzgQYbDC5JjB0aP89f9HC4MV9JBm",
    "ASHRAEOut.jpg": "1-WRTnce2cuSJ_fLyfd92GDIyO7qkJVnn",
    "attendance-detail.jpg": "1Sqg2QTM9_gA1vAUaTC0nFOpDIlJ42Zkt",
    "AttendanceOut.jpg": "1qJ5UKwBi5PDjqs22k-jfB9LYsKtuhUJX",
    "CA_Burden.jpg": "1_ThpOacr2Ijd5UuRL9VMmrKJ2PuimmI7",
    "CA_Income.jpg": "1FDceBP5EgLEAi4jUlSyk735wFA_euR-6",
    "CA_Industry.jpg": "1XASxyeuGlSM8LvPb4lAR8i2d_SnsC4mo",
    "CA_KernelD.jpg": "1qmd1WgHmfZTXB_Q3DAGlsfeTCKCHbNTD",
    "CA_MultivPlot.jpg": "1zYS2jdXKfqCKJPU_I2CblkYHEx8kzTvC",
    "CA_Poverty rate.jpg": "1JudVd4lalbJ1gUPPAioPnTeMgXFypsdn",
    "CA_Racial.jpg": "1YW5KW9efAWIf_7iMGTaAy2iHrU7yFiXi",
    "CA_TRI.jpg": "1VYMYN4hKOf3HV0DjSsvB-JKmMERgro0_",
    "CancerAlley_1.jpg": "1-bhbK2sId8jWcsRtaqIwXDnDX2FyilGK",
    "cannes_1.jpg": "1KBE7jlkJEtg8rfJlQe4r6rfsBbOo-c4M",
    "Carbonout.jpg": "1Q5n2NauqVNboXUYtwOcoKm4xHzeC7XtM",
    "chicago-detail.jpg": "1KZz6TCduuGoB4zWKJ9GXDl_4wsvKm3Ny",
    "Crossy out.jpg": "1CV3JeFJ43gbKnVKgSY16q6bL0QCJQCQ8",
    "Crossy.jpg": "1UTrksf3A_X2FfgUeJWVjclAp_To_Jmms",
    "CSV Automation.png": "1bRskHJ6ZOawX4Msg4o61QufIhOvG5Xi8",
    "dataviz cropped.gif": "1L4It0BhjthGkEejQZVnMuxfx3HMXPiwP",
    "DaylightOut.jpg": "1r9HMRMAoH_Y6nZAD5TGLiK6Z3byLDDEw",
    "Dog.jpg": "1VLJJX1CjnAlnB9ES9qA3n7IXQGl1MM7s",
    "Dogout.jpg": "1rEAvbrvUp6vT_SqK0gZU-eBhqX4D_bF1",
    "DrugDataOut.jpg": "1DAsaxLCbPaxJHGa6hjqzYlVSRlZrQu5z",
    "EPS_DBT.jpg": "1fkW4z1RRoJRLpf4DjcXwnk5XJEWk1B39",
    "EPS_page_01.jpg": "1XYhqT5LHEGKBOXotp-ZWSY227P-yY60S",
    "EPS_page_02.jpg": "1iCriqqSzhYOnkegDYwA__kGJpZUe3PGc",
    "EPS_page_03.jpg": "10WrDgNtYSa1LoRfcFd6bcAHS3RISo_3p",
    "EPS_page_04.jpg": "1O5K0pGxhKH-EuGxxJi7yGlwrq_isV_lC",
    "EPS_page_05.jpg": "1xQslmVvk-hNpv2i8bzL-0u0UldGnBJbG",
    "EPS_page_06.jpg": "1ZHBPhUl1usVN0ovVulU7Qx2ggQ38zQgp",
    "EPS_page_07.jpg": "172YAaRrzslYCf89_iHTpK6Dbp8uuLsf9",
    "EPS_page_08.jpg": "1p_t44uZ3pqvequGOs69JJpghYpg5XcK7",
    "EPS_page_09.jpg": "1WLUUnQTIpDhhtze22Ufh_WwrCnr8z_Q6",
    "EPS_page_10.jpg": "1KPFrXVeXtyMYv3e0n9Y38LjsH8Ujmhaj",
    "EPS_page_11.jpg": "1KtC6hTOuzUyp2lmFjPpVc8NQZuTPgiPI",
    "EPS_page_12.jpg": "1eJK1JI0eVEkhhPAYYPlb5emGRo2SnoDE",
    "EPS_page_13.jpg": "18ZNQUIz8aluj1NvcQw8R1TKfCe7TbJtY",
    "EPS_page_14.jpg": "1nSny3IxLJEHvNfg_-TReCj2z6v8hh4M-",
    "EPS_page_15.jpg": "1nCDtvH630H0ra0hZGSqoNhSgr1dMoyfd",
    "EPSOut.jpg": "1FA4d_rUTlplS7pfx-JT4ZLF85Z2jk4S4",
    "fire-detail.jpg": "1lnRpKoG6T_-UB6M0bsfH3wuN3xaG683e",
    "fractal_1.jpg": "1hNWSvjF_qAr1x9l9TQ-IgyZeB5UUkLvH",
    "fractal_2.jpg": "1VS4ecIdo8VHGQOG4Yeg9T30uqAnzK_WY",
    "fractal_3.jpg": "1DSt5gwW8JQF9wNI_GDtuQx1o8mktiqJg",
    "Fractalout.jpg": "1sYHGXxgJqURK-dK0nHpEbkraiwJrTktG",
    "gis-detail.jpg": "1HV3K7oSdmGReZlBiz_p-DRGCm6epFGk4",
    "gis.jpg": "1m2KyDlcTiN3dJpnrmdrJ339KPbLM_7P_",
    "GISOut.jpg": "1pkECLnhcRb4r1GZPgDXPpGvIG9bsTRFN",
    "HPAIROut.jpg": "1FDQ09rqi5SjCEN9Ja1Jaz7acwKogRyTN",
    "hvac-detail.jpg": "1O99gT8lm9UcAFKv50Wq2Jmp4AsO5tciJ",
    "HVACOut.jpg": "1JAMys3TJvyEyxbBJ89UyB7SrxWdkZ1B-",
    "mixeduse_1.jpg": "1i9x6SgJaPghDUitXzInjfWKs5vTchCZO",
    "mixeduse_2.jpg": "1DFogzKIcj4C3Nt_N3Du_IMri7SSNXZzE",
    "mixeduse_3.jpg": "123zvsV5uQJBkCZfrsUtLUG01t8F9gxdh",
    "mixeduse_4.jpg": "1Og88a9zTLbXN_t8IOzGoVJpGCUVLCbsz",
    "mixeduse_5.jpg": "1Qk1FV-fC3n_jqDETlJGyHptH7hwThpd0",
    "mixeduse_6.jpg": "1sgKPo39aW6fGubPKT95lgURZ2Kjptw_i",
    "mixeduse_7.jpg": "10_TuNgVX4Eikp4GvSuiQri5WJr3yKn7z",
    "nexusout.jpg": "1YcGThTRDLxRGMgG91rwUPejF8gh1y_J8",
    "Pipeline.gif": "14AhceBc5CaBHHM2smHqtbLzuOeyA416I",
    "profile.jpg": "1x7FLbXrcfg6yO8s3r-34nJFzCXIk-HKL",
    "SD_ASE.jpg": "19JK2tVOY3LtlL5hCtl3FZ7LSgGDEADZo",
    "SD_Chorus.jpg": "1RHcF8O7WyoP4BDrijjbJdXruFPb001fm",
    "SD_Intro.jpg": "10aP_JDlNP2tTvWnn3gYpraho1JIVc5yh",
    "SD_Lux.jpg": "1wb0hCcWTW-aH_sQOVaDTAm5q4zogdp-S",
    "SD_Playlist.jpg": "1kIVbiggI1NbHr3dGhvvzxilDh4eKY6bN",
    "SD_Render.jpg": "1kpLte7XTEuD0NTRylarDVwDlGJIVox5m",
    "SD_Renders2.jpg": "1ZRJ3bOb_yNqRb4KtPj6vAI91WcVziGDZ",
    "SD_sDA.jpg": "1FRBlWxxOyOZuqEzqvmBrbF0ZG2rgRHkY",
    "SD_SDG.jpg": "1fz4Kf02zDWp7qUV13OTIVLp8wig9l8dR",
    "SD_Verse.jpg": "1RrrSGxsXLRf-Tuczth2gZMwzOvR9zmLI",
    "shading-detail.jpg": "1JpP5n2EsHyREOaTFJPjXBOddmFogahHG",
    "shading-detail.png": "1bUHLy95q5Ci9ihkxirhPOQQ6bbJf-ZpV",
    "tartan-detail.jpg": "1P77JFznG_L9_nHtK1DgNBBX3Fducilnw",
    "tartan-detail.png": "1psEsV-LUDhT_Fx1sdBBrCH3g6drbUqRI",
    "TartanOut.jpg": "1nUoDzhfJnefmxJaDly2CbYrUBem2a28t",
    "thesis-detail.jpg": "1XfYFGEKt-1dg7ipJtbciLcSEewJRjxry",
    "thesis-detail.png": "1otq3zv3XY_yy7qWhs8Srbq0jRjsNZPi9",
    "thesis_dark_zones.png": "12h6vZnZYfK1JPJVKoalSg2lV9BaRl0n7",
    "thesis_dataviz.gif": "1bmpQH1ZLhxxZRw2K8xajF7Mbros4f_bz",
    "thesis_floorplate.png": "1sRm3KgTaKGMwK5fH7c2bsMEE-qLC7YSW",
    "thesis_gulf_context.png": "16Fh8T7b9jAJy8Ct8iWpFZK7m0_01zStA",
    "thesis_gulf_tower.png": "1FhfWNqOeXK_e05rTJyoaJgyWWPJ2o4Wk",
    "thesis_hero.gif": "1OnOTxeVsReoHXUonIZVz2-yf8ZAdQu1C",
    "thesis_methodology.png": "1jgQSHf9Vnzk3GC4lYtw9ez46FN9n4yET",
    "thesis_o2r_conversions.png": "1kHbT0Ruv7Rrha6h4IhiU-qA32DlmVLVc",
    "thesis_pipeline.gif": "12lRRwjaXZdp_17EIXOuMhfBNTRE_ZCts",
    "thesis_precedent.png": "1_rcd8WhrFruEF9XkiGtwmlTxZSx1f58_",
    "thesis_recommendations.png": "1P2XqW0a_n4eT-rcF7ZFqy7muTGLSdLFY",
    "thesis_typologies.png": "1MvfqrJcEB99lRP90RneqkkE8p9nY-xkM",
    "thesis_unit_module.png": "1dqNuCgZ2giC9gBBBqorJ59kgkUVqJa4f",
    "ThesisOut.jpg": "1mscmQb0HCqJvO_vArZasSlEhU0dQmFH9",
    "tianducheng.jpg": "1Ihs8a1Qxn-u1dSx5RwXu0tqbYv_ge0-P"
};

function getDriveUrl(fileId) {
    return "https://lh3.googleusercontent.com/d/" + fileId + "=w1200";
}

document.addEventListener("DOMContentLoaded", function () {
    var host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host === "" || window.location.protocol === "file:") {
        return;
    }
    document.querySelectorAll('img[src^="Images/"]').forEach(function (img) {
        var filename = img.getAttribute("src").replace("Images/", "");
        if (driveImageMap[filename]) {
            img.setAttribute("src", getDriveUrl(driveImageMap[filename]));
        }
    });
});

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
