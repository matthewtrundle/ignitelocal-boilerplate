import * as THREE from 'three';

export function initThreeJsScene(canvas: HTMLCanvasElement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ 
    canvas, 
    alpha: true,
    antialias: true
  });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
  
  // New color scheme
  const colors = [
    new THREE.Color('#3182CE'), // ignite-accent
    new THREE.Color('#44C1C7'), // ignite-highlight
    new THREE.Color('#2C5282'), // ignite-medium
    new THREE.Color('#EDF2F7'), // text-light
  ];
  
  // Create floating orbs with improved visuals
  const orbs: THREE.Mesh[] = [];
  const orbCount = 12; // Increased count
  
  // Add a light to make objects more visible
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const pointLight = new THREE.PointLight(0x3182CE, 0.8);
  pointLight.position.set(0, 5, 5);
  scene.add(pointLight);
  
  // Create different geometry types for variety
  const geometries = [
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.OctahedronGeometry(1, 0)
  ];
  
  for (let i = 0; i < orbCount; i++) {
    // Pick random geometry type
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    
    // Create a glow effect with custom shader material
    const orbMaterial = new THREE.MeshPhongMaterial({
      color: colors[i % colors.length],
      transparent: true,
      opacity: 0.7,
      shininess: 100
    });
    
    const orb = new THREE.Mesh(geometry, orbMaterial);
    
    // Random position in a more interesting arrangement
    const radius = 10 + Math.random() * 10;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    orb.position.set(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
    
    // Random size with more variation
    const scale = Math.random() * 0.4 + 0.1;
    orb.scale.set(scale, scale, scale);
    
    // Random speed with a bit more movement
    orb.userData.speedX = (Math.random() - 0.5) * 0.02;
    orb.userData.speedY = (Math.random() - 0.5) * 0.02;
    orb.userData.speedZ = (Math.random() - 0.5) * 0.01;
    
    // Add rotation
    orb.userData.rotationSpeed = {
      x: (Math.random() - 0.5) * 0.02,
      y: (Math.random() - 0.5) * 0.02,
      z: (Math.random() - 0.5) * 0.01
    };
    
    scene.add(orb);
    orbs.push(orb);
  }
  
  // Add small particles for background depth
  const particleCount = 100;
  const particleGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    particlePositions[i3] = (Math.random() - 0.5) * 50;
    particlePositions[i3 + 1] = (Math.random() - 0.5) * 50;
    particlePositions[i3 + 2] = (Math.random() - 0.5) * 50;
  }
  
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  
  const particleMaterial = new THREE.PointsMaterial({
    color: 0x44C1C7,
    size: 0.1,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true
  });
  
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);
  
  camera.position.z = 15;
  
  // Track mouse for interaction
  const mouse = {
    x: 0,
    y: 0
  };
  
  window.addEventListener('mousemove', (event) => {
    // Calculate normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });
  
  // Animation loop with improved interactions
  function animate() {
    requestAnimationFrame(animate);
    
    // Subtle camera movement based on mouse position
    camera.position.x += (mouse.x * 5 - camera.position.x) * 0.01;
    camera.position.y += (mouse.y * 5 - camera.position.y) * 0.01;
    camera.lookAt(scene.position);
    
    // Update orb positions and rotations
    orbs.forEach((orb) => {
      // Update position
      orb.position.x += orb.userData.speedX;
      orb.position.y += orb.userData.speedY;
      orb.position.z += orb.userData.speedZ;
      
      // Apply rotation
      orb.rotation.x += orb.userData.rotationSpeed.x;
      orb.rotation.y += orb.userData.rotationSpeed.y;
      orb.rotation.z += orb.userData.rotationSpeed.z;
      
      // Affect orbit paths slightly based on mouse position
      orb.position.x += mouse.x * 0.005;
      orb.position.y += mouse.y * 0.005;
      
      // Wrap around edges with smooth transition
      if (Math.abs(orb.position.x) > 25) {
        orb.position.x = -Math.sign(orb.position.x) * 25;
      }
      
      if (Math.abs(orb.position.y) > 25) {
        orb.position.y = -Math.sign(orb.position.y) * 25;
      }
      
      if (Math.abs(orb.position.z) > 25) {
        orb.position.z = -Math.sign(orb.position.z) * 25;
      }
    });
    
    // Rotate particle field gently
    particles.rotation.y += 0.0005;
    
    renderer.render(scene, camera);
  }
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  animate();
  
  return () => {
    // Cleanup
    orbs.forEach(orb => {
      scene.remove(orb);
      (orb.geometry as THREE.BufferGeometry).dispose();
      (orb.material as THREE.Material).dispose();
    });
    
    // Clean up additional resources
    scene.remove(particles);
    particleGeometry.dispose();
    particleMaterial.dispose();
    
    scene.remove(ambientLight);
    scene.remove(pointLight);
    
    geometries.forEach(geometry => geometry.dispose());
    
    renderer.dispose();
  };
}
