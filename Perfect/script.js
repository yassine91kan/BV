//import {CSS2DRenderer, CSS2DObject} from "./CSS2DRenderer.js";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { IFCLoader } from "three/examples/jsm/loaders/IFCLoader";
// import { IFCLoader } from "web-ifc-three/IFCLoader";


// get the canvas element  
var canvas = document.getElementById('canvas');   
var isPlay=true;
var isAnim = false; 

 document.getElementById("linkanimate").onclick = function() {myFunction()};

        function myFunction() {

            isAnim = true; 

} 




// create the scene  
var scene = new THREE.Scene();  
scene.background = new THREE.Color(0x555555); // set the background color to grey  
  
// create the camera  
var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);  
// Position the camera
camera.position.set(-5,2,0);


// Add the CSS2DRenderer

//const labelRenderer = new CSS2DRenderer();
//labelRenderer.setSize(window.innerWidth, window.innerHeight);
//labelRenderer.domElement.style.position='absolute';
//labelRenderer.domElement.style.pointerEvents='none';
//labelRenderer.domElement.style.top="0px";
// document.body.appendChild(labelRenderer.domElement);


//let app = document.querySelector('#canvas-holder');
//app.appendChild(labelRenderer.domElement);


//const p= document.createElement('p');
//p.textContent = "Hello";
// const cPointLabel = new CSS2DObject(p);
// scene.add(cPointLabel);
// cPointLabel.position.set(0,0,0);

// const div = document.createElement('div');
// div.appendChild(p);
// const divContainer = new CSS2DObject(div);
// scene.add(divContainer);



 document.getElementById("textanimate").onclick = function() {myFunctionanim()};

        function myFunctionanim() {

            const p2= document.createElement('p');
            p2.textContent = "Dropped Object Experiment";
            const cPointLabel2 = new CSS2DObject(p2);
            scene.add(cPointLabel2);
            cPointLabel2.position.set(0,0,2); 

} 



//
  
// create the renderer  
var renderer = new THREE.WebGLRenderer({ canvas: canvas });  
//renderer.setSize(canvas.width, canvas.height); 

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight ); 
  
// create the box  
// var boxGeometry = new THREE.BoxGeometry(1, 1, 1);  
// var boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });  
// var box = new THREE.Mesh(boxGeometry, boxMaterial);  
// box.position.y = 2.3; 
var posref = 2.3 ; 

// scene.add(box);  
  
// create the ball  
var ballGeometry = new THREE.SphereGeometry(0.2, 32, 32);  
var ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });  
var ball = new THREE.Mesh(ballGeometry, ballMaterial);  
ball.position.y = 10; 
ball.position.set(0, 6, -0.75); 
scene.add(ball); 

// Add a grid

const size = 10;
const divisions = 10;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );


// 



// Animated Character

let mixer;


//

// add the GFTL Model

      //  var loader1 = new THREE.GLTFLoader();
      // var model1 ;
      // loader1.load(
      //   'assets/scene2.gltf', // Replace with the actual path to your model
      //   function (gltf) {
      //     model1 = gltf.scene;
      //     scene.add(model1);
      //     model1.position.set(0, 0, -0.75);
      //   },
      //   undefined,
      //   function (error) {
      //     console.error(error);
      //   }
      // );

      var loader2 = new GLTFLoader();
      var model2 ;
      loader2.load(
        // 'assets/untitled2.glb', // Replace with the actual path to your model
        'assets/animated/Dying.glb', // Replace with the actual path to your model
        function (gltf) {
          model2 = gltf.scene;
          scene.add(model2);
          model2.position.set(0, 0, -0.75);
          // added character code
          mixer = new THREE.AnimationMixer(model2);
          const clips = gltf.animations ; 
          const clip = THREE.AnimationClip.findByName(clips,'Armature|mixamo.com|Layer0');
          const action = mixer.clipAction(clip);
          action.play();


        },
        undefined,
        function (error) {
          console.error(error);
        }
      );

// add Lighting to the model

    var light = new THREE.PointLight( 0x20202A, 10, 100 );
      light.position.set( 5, 0, 0 );
      scene.add( light );

    var light = new THREE.PointLight( 0x20202A, 10, 100 );
      light.position.set( -5, 0, 0 );
      scene.add( light );

    var light = new THREE.PointLight( 0x20202A, 10, 100 );
      light.position.set( 0, 0, -5 );
      scene.add( light );


    // Add Controls for the 3D Object
      
      // var controls = new OrbitControls(camera);
      const controls = new OrbitControls( camera, renderer.domElement );
      // controls.addEventListener('change',renderer);

      renderer.render(scene, camera);  

var isPlay=true;

var isAnim = false;


//


//
const clock = new THREE.Clock();
  
// animate the scene  
function animate() {  

  requestAnimationFrame(animate); 

  if (!isPlay) return; 

  if(isAnim) {



  
    // make the ball fall  
  if (ball.position.y > posref - 0.2) { // check if ball is above box  
    ball.position.y -= 0.1;  
  } else {  

    // ball.position.y = posref - 0.2; // set ball position to top of box 
    ball.position.x +=0.1; // set ball position to top of box
    ball.position.y -=0.1; // set ball position to top of box
    mixer.update(clock.getDelta()); 
     
  }  
  
}


// Animation of the character



//

  // animate the scene



  //labelRenderer.render(scene, camera);  

  renderer.render(scene, camera);  
}  

animate();  