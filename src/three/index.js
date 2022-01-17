import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { THREEx } from "./threex.domevents";
import "./style.css";
import { changeColor } from "../redux/actions/color";
import store from "../redux";
import { subscribe } from "redux-subscriber";

// var THREEx = {};
// initializeDomEvents(THREE, THREEx);

// console.log({initializeDomEvents})
// console.log({THREEx})

/**
 * Base
 */
// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "royalblue" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Plane
const planeGeometry = new THREE.PlaneGeometry(100, 100);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: "lightblue",
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

scene.add(plane);
plane.position.set(0, 0, -5);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Fullscreen
 */
// window.addEventListener('dblclick', () => {
// 	const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;

// 	if (!fullscreenElement) {
// 		if (canvas.requestFullscreen) {
// 			canvas.requestFullscreen();
// 		} else if (canvas.webkitRequestFullscreen) {
// 			canvas.webkitRequestFullscreen();
// 		}
// 	} else {
// 		if (document.exitFullscreen) {
// 			document.exitFullscreen();
// 		} else if (document.webkitExitFullscreen) {
// 			document.webkitExitFullscreen();
// 		}
// 	}
// });

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

var domEvents = new THREEx.DomEvents(camera, renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

domEvents.addEventListener(
  mesh,
  "click",
  function (event) {
    if (store.getState().color.hex === "#ff0000") {
      store.dispatch(changeColor("#4169e1"));
    } else {
      store.dispatch(changeColor("#ff0000"));
    }
  },
  false
);

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
subscribe("color.hex", (state) => {
  console.log(state);
  material.color.set(state.color.hex);
});
