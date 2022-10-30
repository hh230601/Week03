const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 
    70, 
    window.innerWidth / window.innerHeight, 
    0.01, 
    10 
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );



// animation

function animation() {
	mesh.rotation.x += 0.1
	renderer.render( scene, camera );
}

animation();