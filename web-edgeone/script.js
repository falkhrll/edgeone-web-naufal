// === 1. Animasi Background 3D Partikel (Three.js) ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg3d'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Buat 1000 partikel bintang 3D
const geometry = new THREE.BufferGeometry();
const particlesCount = 1000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15;
}

geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const material = new THREE.PointsMaterial({
    size: 0.025,
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.8
});

const particlesMesh = new THREE.Points(geometry, material);
scene.add(particlesMesh);

camera.position.z = 3;

// Animasi gerakan partikel
function animate() {
    requestAnimationFrame(animate);
    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.0005;
    renderer.render(scene, camera);
}
animate();

// Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// === 2. Efek Interactive 3D Tilt Card saat Mouse Bergerak ===
const card = document.getElementById('card3d');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-5px)`;
});

document.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0px)`;
});

// === 3. Interaksi Tombol Status ===
const btnAction = document.getElementById('btnAction');
const statusBox = document.getElementById('statusBox');
const statusText = document.getElementById('statusText');

btnAction.addEventListener('click', () => {
    statusBox.classList.remove('hidden');
    statusText.innerText = "Connecting to Tencent Edge Nodes globally...";
    
    setTimeout(() => {
        statusText.innerText = "Status: Active | SSL Secure | 100% Edge Node Cache Hit Ratio";
    }, 900);
});