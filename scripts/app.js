// DOM Elements
const ideaModal = document.getElementById("idea-modal");
const dropIdeaBtn = document.getElementById("drop-idea-btn");
const closeModal = document.getElementById("close-modal");

// Ensure modal is hidden on page load
window.addEventListener("DOMContentLoaded", () => {
  if (!ideaModal.classList.contains("hidden")) {
    ideaModal.classList.add("hidden");
  }
  console.log("Modal initialized and hidden on load");
});

// Open modal when "Drop Your Idea" button is clicked
dropIdeaBtn.addEventListener("click", () => {
  ideaModal.classList.remove("hidden");
  console.log("Modal opened");
});

// Close modal when "X" button is clicked
closeModal.addEventListener("click", () => {
  ideaModal.classList.add("hidden");
  console.log("Modal closed");
});

// Close modal when clicking outside the modal content
ideaModal.addEventListener("click", (event) => {
  if (event.target === ideaModal) {
    ideaModal.classList.add("hidden");
    console.log("Modal closed by clicking outside");
  }
});




// Projects Section Animation
gsap.from("#projects .project-card", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

// Inspirations Section
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateCarousel() {
  const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < carousel.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);


// Footer Social Icons
gsap.from("footer .flex a", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 20,
  stagger: 0.3,
  duration: 1,
});




// Three.js Hero Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#heroCanvas'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 30;

// Add Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

// Add Sphere (Tree-like)
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0x8a2be2 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});


