import {CSS2DRenderer, CSS2DObject} from "./CSS2DRenderer-r.js";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { IFCLoader } from "three/examples/jsm/loaders/IFCLoader";
// import { IFCLoader } from "web-ifc-three/IFCLoader";

import { IFCLoader } from "web-ifc-three/IFCLoader";
import { IfcViewerAPI } from "web-ifc-viewer";
import { Color } from "three";
import * as CANNON from 'cannon-es';

// get the canvas element  
var canvas = document.getElementById('canvas');   
var isPlay=true;
var isAnim = false; 

 document.getElementById("linkanimate").onclick = function() {myFunction()};

        function myFunction() {

            isAnim = true; 

} 

var model2 ;

document.getElementById("hard").onclick = function() {myFunction2()};

        function myFunction2() {

            
      var loader2 = new GLTFLoader();
      
      loader2.load(
        // 'assets/untitled2.glb', // Replace with the actual path to your model
        'assets/animated/Hard.glb', // Replace with the actual path to your model
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

} 



document.getElementById("still").onclick = function() {myFunction3()};

        function myFunction3() {

            
      var loader3 = new GLTFLoader();
      var model3 ;
      loader3.load(
        // 'assets/untitled2.glb', // Replace with the actual path to your model
        'assets/animated/Still.glb', // Replace with the actual path to your model
        function (gltf) {
          model3 = gltf.scene;
          scene.add(model3);
          model3.position.set(0, 0, -0.75);
          // added character code
          mixer = new THREE.AnimationMixer(model3);
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

} 




// create the scene  
var scene = new THREE.Scene();  
scene.background = new THREE.Color(0x555555); // set the background color to grey  
  
// create the camera  
var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);  
// Position the camera
camera.position.set(-50,2,50);


// Add the CSS2DRenderer

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position='absolute';
labelRenderer.domElement.style.pointerEvents='none';
labelRenderer.domElement.style.top="0px";
document.body.appendChild(labelRenderer.domElement);


let app = document.querySelector('#canvas-holder');
app.appendChild(labelRenderer.domElement);


const p= document.createElement('p');
p.textContent = "Collision Detection";
p.className="tooltip";
const cPointLabel = new CSS2DObject(p);
scene.add(cPointLabel);
cPointLabel.position.set(5,0,0);

const div = document.createElement('div');
div.appendChild(p);
const divContainer = new CSS2DObject(div);
scene.add(divContainer);



 document.getElementById("textanimate").onclick = function() {myFunctionanim()};

        function myFunctionanim() {

            const p2= document.createElement('p');
            p2.textContent = "Dropped Object Experiment";
            const cPointLabel2 = new CSS2DObject(p2);
            scene.add(cPointLabel2);
            cPointLabel2.position.set(0,0,2); 

} 


// Trial



//



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
// var ballGeometry = new THREE.SphereGeometry(0.2, 32, 32);  
// var ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });  
// var ball = new THREE.Mesh(ballGeometry, ballMaterial);  
// ball.position.y = 10; 
// ball.position.set(0, 6, -0.75); 
// scene.add(ball); 

const uvTexture= new THREE.TextureLoader().load('./assets/steel.jpg');

var ballGeometry = new THREE.SphereGeometry(0.3, 32, 32);  
var ballMaterial = new THREE.MeshBasicMaterial({ 
  map:uvTexture

});  
var ball = new THREE.Mesh(ballGeometry, ballMaterial);  
ball.position.y = 10; 
ball.position.set(0, 6, -0.75); 
scene.add(ball); 

// Add a grid

// const size = 10;
// const divisions = 10;

// const gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );


// 



// Animated Character

let mixer;





//

// add the GFTL Model

   

      // var loader2 = new GLTFLoader();
      // var model2 ;
      // loader2.load(
      //   // 'assets/untitled2.glb', // Replace with the actual path to your model
      //   'assets/animated/Dying.glb', // Replace with the actual path to your model
      //   function (gltf) {
      //     model2 = gltf.scene;
      //     scene.add(model2);
      //     model2.position.set(0, 0, -0.75);
      //     // added character code
      //     mixer = new THREE.AnimationMixer(model2);
      //     const clips = gltf.animations ; 
      //     const clip = THREE.AnimationClip.findByName(clips,'Armature|mixamo.com|Layer0');
      //     const action = mixer.clipAction(clip);
      //     action.play();


      //   },
      //   undefined,
      //   function (error) {
      //     console.error(error);
      //   }
      // );

      // 0x20202A

// add Lighting to the model

    var light = new THREE.PointLight( 0x20202A, 10, 100 );
      light.position.set( 3, 0, 0 );
      scene.add( light );

    var light = new THREE.PointLight( 0x20202A, 10, 100 );
      light.position.set( -3, 0, 0 );
      scene.add( light );

    var light = new THREE.PointLight( 0x20202A, 10, 100 );
      light.position.set( 0, 0, -3 );
      scene.add( light );

      const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
      scene.add( directionalLight );


    // Add Controls for the 3D Object
      
      // var controls = new OrbitControls(camera);
      const controls = new OrbitControls( camera, renderer.domElement );
      // controls.addEventListener('change',renderer);

      renderer.render(scene, camera);  

var isPlay=true;

var isAnim = false;


//

// Sets up the IFC loading
const ifcLoader = new IFCLoader();

const input = document.getElementById("file-input");
input.addEventListener(
  "change",
  (changed) => {
    const file = changed.target.files[0];
    var ifcURL = URL.createObjectURL(file);
    ifcLoader.load(ifcURL, (ifcModel) => scene.add(ifcModel));

  },
  false
);


//
const clock = new THREE.Clock();
  
// animate the scene  


// IFC Conversion to JSON

const container = document.getElementById("viewer-container");
const viewer = new IfcViewerAPI({
  container,
  backgroundColor: new Color(0xffffff),
});
viewer.axes.setAxes();
viewer.grid.setGrid();

const input2 = document.getElementById("file-input-2");

window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
viewer.clipper.active = true;

window.onkeydown = (event) => {
  if (event.code === "KeyP") {
    viewer.clipper.createPlane();
  } else if (event.code === "KeyO") {
    viewer.clipper.deletePlane();
  }
};


input2.addEventListener(
  "change",

  async (changed) => {
    const file = changed.target.files[0];
    const ifcURL = URL.createObjectURL(file);
    viewer.IFC.loadIfcUrl(ifcURL);
    // await viewer.IFC.setWasmPath("");
    // const model = await viewer.IFC.loadIfcUrl(ifcURL);
    // const properties =  await viewer.IFC.properties.serializeAllProperties(model);

    // console.log(properties);
  },

  false
);

// async function init() {
//     // await viewer.IFC.setWasmPath(wasmPath); 
//     const model = await viewer.IFC.loadIfcUrl(url);
//     const properties =  await viewer.IFC.properties.serializeAllProperties(model);
// }

// init();


let url = "./IFC/RST_basic_sample_project.ifc";
let wasmPath = "";

init();

async function init() {
  await viewer.IFC.setWasmPath(wasmPath);
  const model = await viewer.IFC.loadIfcUrl(url);

  // Serialize properties
  const properties = await viewer.IFC.properties.serializeAllProperties(model);

  console.log(properties);
  
  // Download the properties as JSON file
  const file = new File(properties, 'properties');
  const link = document.createElement('a');
  document.body.appendChild(link);
  link.href = URL.createObjectURL(file);
  // link.download = 'properties.json';
  // link.click();
  // link.remove();
};

// Cannon.js Code

const groundPhysMat = new CANNON.Material();

const groundGeo = new THREE.PlaneGeometry(100, 100);
const groundMat = new THREE.MeshBasicMaterial({ 
	color: 0xffffff,
	side: THREE.DoubleSide,
	wireframe: true 
 });


const groundMesh = new THREE.Mesh(groundGeo, groundMat);
groundMesh.position.set(0, 0, -20);
scene.add(groundMesh);

const groundBox = new THREE.BoxGeometry(100, 3, 100);
const groundBoxMat = new THREE.MeshBasicMaterial({ 
	color: 0xFF5733,
	side: THREE.DoubleSide,
	wireframe: false 
 });
const groundBoxMesh = new THREE.Mesh(groundBox, groundBoxMat);
groundMesh.position.set(0, 0, -20);
scene.add(groundBoxMesh);

const boxGeo = new THREE.BoxGeometry(30, 1, 1.5);
const boxMat = new THREE.MeshBasicMaterial({
	// color: 0x555555,
  color: 0xffffff,
	wireframe: true
});
const boxMesh = new THREE.Mesh(boxGeo, boxMat);
boxMesh.position.set(10, 45, -32);
scene.add(boxMesh);

const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.81, 0)
});

const groundBody = new CANNON.Body({
  shape: new CANNON.Plane(),
  // mass: 10, 
    // shape: new CANNON.Box(new CANNON.Vec3(0, 0, -31)),
    type: CANNON.Body.STATIC,
    material: groundPhysMat
});
world.addBody(groundBody);
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

const boxPhysMat = new CANNON.Material();

let boxBody = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
  position: new CANNON.Vec3(0, 45, -31),
  material: boxPhysMat
});
world.addBody(boxBody);

// Create Bounding boxes to measure distances between Objects

const cubebb= new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cubebb.setFromObject(boxMesh);
let target = groundMesh.position.clone();

const groundbb = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
groundbb.setFromObject(groundBoxMesh);


//


// Add the GLTF Model for the crane 

var loader4 = new GLTFLoader();
var model4 ;
loader4.load(
  'assets/crane/scene.gltf', // Replace with the actual path to your model
  function (gltf) {
    model4 = gltf.scene;
    scene.add(model4);
    // model4.position.set(0, 0, -30);

    const a = new THREE.Vector3( boxBody.position.x, boxBody.position.y-45, boxBody.position.z );
    console.log(a);

    console.log(boxBody.position);
    model4.position.copy(a);
    model4.quaternion.copy(boxBody.quaternion);

  },
  undefined,
  function (error) {
    console.error(error);
  }
);


// Animation Variables

let speed =0, maxSpeed=1, acceleration = 0.25 , angle =0 ;


//





// Animation Functions

  document.onkeydown = (event) => {

    console.log(event);

    switch(event.key){

        case "ArrowLeft":
          angle+= (Math.PI/180); //Turn left 1 degree converted to radians

        break;

        case "ArrowRight":
          angle-= (Math.PI/180); //Turn left 1 degree converted to radians

        break;

        case "ArrowUp":
          speed-= acceleration;

        break;

        case "ArrowDown":
          speed+= acceleration;
        break;


    }

    
  }

  function moveSpeeder (){

    if(speed>maxSpeed) speed =maxSpeed ;

    if(speed<0) speed =0 ;

    // boxBody.position.y-=speed;

    boxBody.position.y+=speed;


    boxBody.quaternion.setFromEuler(0, angle, 0);


  }

const span1 = document.getElementById("distance");
const speed1 = document.getElementById("speedDisp");

let distance ;

  function updateDistance(){

    distance = (Math.round(cubebb.distanceToPoint(target)*10)/10).toFixed(1);
    span1.innerText = "Distance to Target \n " + distance + "m";
    speed1.innerText = "Speed  " + speed + "m/s";

  }

  function animation1(){

    console.log("Intersected");
    groundBoxMesh.material.transparent = true;
    // groundBoxMesh.material.opacity = 0.2;
    // groundBoxMesh.material.color = new THREE.Color(Math.random()*0xffffff);
  }

  function checkCollision(){

    if(cubebb.intersectsBox(groundbb)){

      animation1();

    }

    else{

      groundBoxMesh.material.opacity = 1;

    }




  }



//

const timeStep = 1 / 60;

//

var t=100;

function animate() {  

  requestAnimationFrame(animate); 

  if (!isPlay) return; 

  if(isAnim) {


    t-= 1;

    world.step(timeStep);

    // boxBody.quaternion.setFromEuler(0, -Math.PI / t, 0);

    groundMesh.position.copy(groundBody.position);
    groundMesh.quaternion.copy(groundBody.quaternion);

    boxMesh.position.copy(boxBody.position);
    boxMesh.quaternion.copy(boxBody.quaternion);


    const a = new THREE.Vector3( boxBody.position.x, boxBody.position.y-45, boxBody.position.z );
    // console.log(a);

    // console.log(boxBody.position);
    model4.position.copy(a);
    model4.quaternion.copy(boxBody.quaternion);

    cubebb.copy(boxMesh.geometry.boundingBox).applyMatrix4(boxMesh.matrixWorld);

    updateDistance();

    moveSpeeder();

    checkCollision();

    // console.log(clock.getElapsedTime());

  
}


// Animation of the character



//

  // animate the scene



  labelRenderer.render(scene, camera);  

  renderer.render(scene, camera);  
}  

animate();  


