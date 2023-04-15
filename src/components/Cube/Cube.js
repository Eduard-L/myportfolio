import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import reactImage from '../../images/react.png';


export const Cube = ({ imgUrl }) => {
    const containerRef = useRef();

    useEffect(() => {
        let camera, scene, renderer;

        const container = containerRef.current;

        // Create camera
        camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10);
        camera.position.z = 2;

        // Create scene
        scene = new THREE.Scene();

        // Create geometry for cube
        const cubeGeometry = new THREE.BoxGeometry(1.4, 1.4, 1.4);

        // Load texture for React logo image
        const textureLoader = new THREE.TextureLoader();
        const reactTexture = textureLoader.load(imgUrl);

        // Create material for cube with React logo image
        const cubeMaterial = [
            new THREE.MeshStandardMaterial({ map: reactTexture }), // right
            new THREE.MeshStandardMaterial({ map: reactTexture }), // left
            new THREE.MeshStandardMaterial({ map: reactTexture }), // top
            new THREE.MeshStandardMaterial({ map: reactTexture }), // bottom
            new THREE.MeshStandardMaterial({ map: reactTexture }), // front
            new THREE.MeshStandardMaterial({ map: reactTexture }), // back
        ];

        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        scene.add(cube);

        // Create directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(-1, 2, 4);
        scene.add(directionalLight);

        // Create ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        // Create renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x00000000, 0);
        container.appendChild(renderer.domElement);

        // Add animation
        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Resize
        const handleResize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            // Remove listener
            window.removeEventListener('resize', handleResize);
            // Remove canvas
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div className='tech__item' ref={containerRef} style={{ height: '150px', width: '150px', boxShadow: '1px 1px 10px 10px rgba(255, 99, 71, 0.5)', borderRadius: 12 }} />;
};
