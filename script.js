
// Set Scene
const scene = new THREE.Scene();
// Set Camera
const camera = new THREE.PerspectiveCamera( 
    75, 
    window.innerWidth / window.innerHeight, 
    0.01, 
    1000
);
camera.position.z = 4;
camera.position.y = 0.5;
camera.position.x = 0.5;

// Set Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Axes
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Box 
{
    // Object
    //const boxGeometry = new THREE.BoxGeometry();
    //const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});

    // Change Color 
        // 1
    //boxMaterial.color.r = 1.0; // Float type
    //boxMaterial.color.g = 0.0; // Float type
    //boxMaterial.color.b = 0.0; // Float type

        // 2
    //boxMaterial.color.setRGB(0.972, 0,749, 0.141);

        // 3
    //boxMaterial.color.setHex(0x1208FF);

    //const box = new THREE.Mesh(boxGeometry, boxMaterial);
    //scene.add(box);
}

// Triangle
const geometry = new THREE.
geometry

var color1 = new THREE.Color( 0xF08000 ); // orange
var color2 = new THREE.Color( 0x808000 ); // olive
var color3 = new THREE.Color( 0x0982FF ); // bright blue


const material = new THREE.MeshBasicMaterial({color : 0x00ff00});
const triangle = new THREE.Mesh(geometry,material);
scene.add(triangle);

function animate() { 
    requestAnimationFrame(animate);
	renderer.render( scene, camera );
}

animate();