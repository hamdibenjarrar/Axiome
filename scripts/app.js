
gsap.to("#svg-background img", {
  scale: 1.05,
  duration: 6,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from("#hero h1", { duration: 1.5, opacity: 0, y: -50, ease: "power2.out" });
gsap.from("#hero p", { duration: 2, opacity: 0, y: 50, delay: 0.5, ease: "power2.out" });
gsap.from("#hero a", { duration: 2.5, opacity: 0, scale: 0.8, delay: 1, ease: "power2.out" });

// About Section
gsap.from("#about img", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: -100,
  opacity: 0,
  duration: 1,
});

gsap.from("#about h2, #about p, #about a", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
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
gsap.from("#inspirations .grid-image", {
  scrollTrigger: {
    trigger: "#inspirations",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
});

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

