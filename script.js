const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("active");
        card.style.transform = "rotateX(0) rotateY(0)";
    });

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

});
// ====================== CAROUSEL SCRIPT ======================
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;

// 创建小圆点
function createDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    updateDots();
}

function updateDots() {
    const dots = dotsContainer.querySelectorAll('span');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;
    updateDots();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
}

// 按钮事件
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// 初始化
createDots();

// 可选：自动播放（每5秒切换一次）
setInterval(nextSlide, 5000);