// 1. Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Optional: Add some lighting so the model is visible
const ambientLight = new THREE.AmbientLight(0x404040, 2); // soft white light
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// Optional: Add orbit controls for user interaction (needs OrbitControls.js from Three.js examples)
// For a complete list of examples, visit the official Three.js documentation
// If you want to use controls, you need to include the script in your HTML first:
// <script src="unpkg.com"></script>
// const controls = new THREE.OrbitControls(camera, renderer.domElement); 

// 2. Load the GLTF model
const loader = new THREE.GLTFLoader();
loader.load(
    'your_model.glb', // Path to your exported .glb file
    function (gltf) {
        scene.add(gltf.scene);
        console.log('Model loaded successfully!');
    },
    undefined, // Optional: called while loading is progressing
    function (error) {
        console.error('An error happened during loading:', error);
    }
);

// 3. Position the camera and render the scene
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    // controls.update(); // only required if using controls
    renderer.render(scene, camera);
}

animate();
