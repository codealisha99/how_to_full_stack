import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// =====================
// SCENE, CAMERA, RENDERER
// =====================
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// =====================
// LIGHTING (clean + balanced)
// =====================
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const hemisphereLight = new THREE.HemisphereLight(
  0xffffbb,
  0x080820,
  0.6
);
scene.add(hemisphereLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

// =====================
// DEBUG GRID (optional but recommended)
// =====================
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// =====================
// TEST CUBE (good practice)
// =====================
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(3, 0.5, 0);
scene.add(cube);

// =====================
// ORBIT CONTROLS
// =====================
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 1, 0);

// =====================
// GLTF MODEL LOADER
// =====================
const loader = new GLTFLoader();

loader.load(
  'flowerb.glb',
  (gltf) => {
    const model = gltf.scene;

    // Compute bounding box
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    console.log('Model size:', size);
    console.log('Model center:', center);

    // Center model
    model.position.sub(center);

    // Scale to reasonable size
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxDim;
    model.scale.setScalar(scale);

    scene.add(model);
  },
  undefined,
  (error) => {
    console.error('GLTF load error:', error);
  }
);

// =====================
// RESIZE HANDLER
// =====================
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// =====================
// ANIMATION LOOP
// =====================
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
