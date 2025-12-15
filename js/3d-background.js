// Three.js Premium 3D Background
let scene, camera, renderer;
let particleSystem, geometry, material;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let animationId;

// Initialize 3D Scene
function init3D() {
    const canvas = document.getElementById('particles');

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Initial scene setup based on current theme
    switch3DScene(document.documentElement.getAttribute('data-theme'));

    // Event listeners
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);

    animate();
}

// Function to switch between 'Galaxy' (Dark) and 'Network' (Light) scenes
window.switch3DScene = function (theme) {
    // Clear existing objects
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }

    // Clear fog
    scene.fog = null;

    if (theme === 'dark') {
        createGalaxyScene();
    } else {
        createNetworkScene();
    }
}

// 🌌 DARK MODE: Infinite Starfield Galaxy
function createGalaxyScene() {
    geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const sizes = [];

    const particleCount = 2000;
    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
        // Spiral galaxy distribution
        const r = Math.random() * 4000 + 100;
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);

        const x = (Math.random() - 0.5) * 4000;
        const y = (Math.random() - 0.5) * 4000;
        const z = (Math.random() - 0.5) * 4000;

        vertices.push(x, y, z);

        // Premium Palette: Deep Purple -> Cyan -> Blue
        const vx = (x / 4000) + 0.5;
        const vy = (y / 4000) + 0.5;

        // Complex gradient logic
        if (Math.random() > 0.5) {
            color.setHSL(0.7 + (vx * 0.1), 0.8, 0.6); // Purple
        } else {
            color.setHSL(0.5 + (vy * 0.2), 0.9, 0.5); // Cyan/Blue
        }

        colors.push(color.r, color.g, color.b);
        sizes.push(Math.random() * 3);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

    // Custom shader material for glowing stars
    material = new THREE.PointsMaterial({
        size: 3,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending
    });

    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Deep cosmic fog
    scene.fog = new THREE.FogExp2(0x0a0a0f, 0.0006);
}

// 🌞 LIGHT MODE: Animated Geometric Network
function createNetworkScene() {
    geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    const particleCount = 600; // Fewer particles for cleaner look
    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 3000;
        const y = (Math.random() - 0.5) * 3000;
        const z = (Math.random() - 0.5) * 3000;
        vertices.push(x, y, z);

        // Clean Blue colors for tech feel
        color.setHSL(0.6, 0.8, 0.5); // Blue
        colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    material = new THREE.PointsMaterial({
        size: 5,
        color: 0x2563eb, // Solid blue for clarity
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true
    });

    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Pure white fog to blend distance
    scene.fog = new THREE.FogExp2(0xffffff, 0.0008);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.5;
    mouseY = (event.clientY - windowHalfY) * 0.5;
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        switch3DScene('dark');
    } else {
        switch3DScene('light');
    }
}

function animate() {
    animationId = requestAnimationFrame(animate);
    render();
}

function render() {
    const time = Date.now() * 0.0001;
    const theme = document.documentElement.getAttribute('data-theme');
    const scrollY = window.scrollY;

    if (particleSystem) {
        // Rotation base
        particleSystem.rotation.x = time * 0.2 + (mouseY * 0.0005);
        particleSystem.rotation.y = time * 0.4 + (mouseX * 0.0005);

        if (theme === 'dark') {
            // Dark Mode: "Warp Speed" feel on scroll
            camera.position.z = 1000 - (scrollY * 0.2);
            particleSystem.rotation.z += 0.001;
        } else {
            // Light Mode: Calm, structured float
            camera.position.y = -(scrollY * 0.2);
            camera.lookAt(scene.position);
        }
    }

    renderer.render(scene, camera);
}

// Initialize Three.js when DOM is ready
document.addEventListener('DOMContentLoaded', init3D);
