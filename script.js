//scene
const scene = new THREE.Scene()

// object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//sizes
const sizes = {
    width: 800,
    height: 600
}

//camera (POV)
const fov = 75;
const camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 1
scene.add(camera)

//renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)