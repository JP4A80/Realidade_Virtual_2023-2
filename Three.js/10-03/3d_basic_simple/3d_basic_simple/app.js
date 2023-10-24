// Importe a biblioteca THREE.js
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// Para permitir o movimento da câmera ao redor da cena
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// Para permitir a importação do arquivo .gltf
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";



// Permite criar animação na posição da câmera
let canvasform = document.getElementById('dCanvas');
let width = canvasform.offsetWidth;
let height =  canvasform.offsetHeight;


// Crie uma cena Three.JS
const scene = new THREE.Scene();
// Crie uma nova câmera com posições e ângulos
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
// Mantenha o controle da posição do mouse para mover o olho
let mouseX = width / 2;
let mouseY = height / 2;


// Mantenha o objeto 3D em uma variável global para acessá-lo posteriormente
let object;
// OrbitControls permite que a câmera se mova ao redor da cena
let controls;
// Instancie um carregador para o arquivo .gltf
const loader = new GLTFLoader();
// Carregue o arquivo
loader.load(
  'model/3.glb',

  function (gltf) {
    object = gltf.scene;
    scene.add(object);
  }
);

// Instancie um novo renderizador e defina seu tamanho
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(width, height); 

// Adicione o renderizador ao DOM
document.getElementById("dCanvas").appendChild(renderer.domElement);

// Defina a distância da câmera ao modelo 3D
camera.position.set(15, 15, -10);

// Adicione luzes à cena para que possamos realmente ver o modelo 3D
let ambientLight = new THREE.AmbientLight(0x404040,1);
scene.add(ambientLight);
let directionalLight = new THREE.DirectionalLight(0xffffff,1);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight);
let light = new THREE.PointLight(0xc4c4c4,10);
light.position.set(0,300,500);
scene.add(light);
/*let light2 = new THREE.PointLight(0xc4c4c4,10);
light2.position.set(500,100,0);
scene.add(light2);*/
let light3 = new THREE.PointLight(0xc4c4c4,10);
light3.position.set(0,100,-500);
scene.add(light3);
/*let light4 = new THREE.PointLight(0xc4c4c4,10);
light4.position.set(-500,300,500);
scene.add(light4);*/

// Isso adiciona controles à câmera para que possamos rotacioná-la/zoom com o mouse
controls = new OrbitControls(camera, renderer.domElement);

// Renderize a cena
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  TWEEN.update();
}
animate();






