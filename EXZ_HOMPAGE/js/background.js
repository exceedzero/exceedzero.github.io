// ========================================
// EXceed Zero 배경 애니메이션
// Matrix of Data - 확장하는 네트워크
// ========================================

(function() {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        const heroSection = canvas.parentElement;
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Node {
        constructor(x, y, z, birthTime) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.baseX = x;
            this.baseY = y;
            this.baseZ = z;
            this.birthTime = birthTime;
            this.connections = [];
            this.glowIntensity = Math.random();
            this.glowDirection = Math.random() > 0.5 ? 1 : -1;
            this.alive = true;
        }

        update(time) {
            const rotationSpeed = 0.000375;
            const angle = time * rotationSpeed;
            
            this.x = this.baseX * Math.cos(angle) - this.baseZ * Math.sin(angle);
            this.z = this.baseZ * Math.cos(angle) + this.baseX * Math.sin(angle);
            
            this.glowIntensity += this.glowDirection * 0.03;
            if (this.glowIntensity >= 1 || this.glowIntensity <= 0.3) {
                this.glowDirection *= -1;
            }
            
            this.baseZ += 0.5;
            
            if (this.baseZ > 1000) {
                this.alive = false;
            }
        }

        project() {
            const scale = 500 / (500 + this.z);
            return {
                x: canvas.width / 2 + this.x * scale,
                y: canvas.height * 0.22 + this.y * scale, // 0.28 → 0.22 (더 위로)
                scale: scale
            };
        }

        draw() {
            const projected = this.project();
            
            if (projected.scale > 0 && projected.scale < 2) {
                const size = 3 * projected.scale;
                const opacity = projected.scale * this.glowIntensity * 0.8;
                
                ctx.beginPath();
                ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 181, 246, ${opacity})`;
                ctx.fill();
                
                const gradient = ctx.createRadialGradient(
                    projected.x, projected.y, 0,
                    projected.x, projected.y, size * 3
                );
                gradient.addColorStop(0, `rgba(100, 181, 246, ${opacity * 0.5})`);
                gradient.addColorStop(1, 'rgba(100, 181, 246, 0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(projected.x, projected.y, size * 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        drawConnections() {
            const projected1 = this.project();
            
            this.connections.forEach(node => {
                if (!node.alive) return;
                
                const projected2 = node.project();
                
                if (projected1.scale > 0 && projected2.scale > 0 && 
                    projected1.scale < 2 && projected2.scale < 2) {
                    const avgScale = (projected1.scale + projected2.scale) / 2;
                    const opacity = avgScale * 0.15;
                    
                    ctx.beginPath();
                    ctx.moveTo(projected1.x, projected1.y);
                    ctx.lineTo(projected2.x, projected2.y);
                    ctx.strokeStyle = `rgba(100, 181, 246, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        }
    }

    class DataParticle {
        constructor(node1, node2) {
            this.node1 = node1;
            this.node2 = node2;
            this.progress = 0;
            this.speed = 0.03 + Math.random() * 0.05;
        }

        update() {
            this.progress += this.speed;
            if (this.progress >= 1) {
                this.progress = 0;
            }
        }

        draw() {
            const p1 = this.node1.project();
            const p2 = this.node2.project();
            
            if (p1.scale > 0 && p2.scale > 0) {
                const x = p1.x + (p2.x - p1.x) * this.progress;
                const y = p1.y + (p2.y - p1.y) * this.progress;
                const avgScale = (p1.scale + p2.scale) / 2;
                
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(156, 39, 176, ${avgScale})`;
                ctx.fill();
                
                const tailX = x - (p2.x - p1.x) * 0.05;
                const tailY = y - (p2.y - p1.y) * 0.05;
                
                const gradient = ctx.createLinearGradient(tailX, tailY, x, y);
                gradient.addColorStop(0, 'rgba(156, 39, 176, 0)');
                gradient.addColorStop(1, `rgba(156, 39, 176, ${avgScale * 0.5})`);
                
                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(x, y);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
    }

    let nodes = [];
    const gridSize = 3;
    const spacing = 120;

    function createInitialNodes() {
        for (let x = -gridSize; x <= gridSize; x++) {
            for (let y = -gridSize; y <= gridSize; y++) {
                for (let z = -gridSize; z <= gridSize; z++) {
                    if (Math.random() > 0.5) {
                        nodes.push(new Node(
                            x * spacing,
                            y * spacing,
                            z * spacing - 200,
                            Date.now()
                        ));
                    }
                }
            }
        }
    }

    createInitialNodes();

    nodes.forEach(node => {
        nodes.forEach(otherNode => {
            if (node !== otherNode) {
                const dx = node.baseX - otherNode.baseX;
                const dy = node.baseY - otherNode.baseY;
                const dz = node.baseZ - otherNode.baseZ;
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                
                if (distance < spacing * 2 && Math.random() > 0.5) {
                    node.connections.push(otherNode);
                }
            }
        });
    });

    function spawnNewLayer() {
        const newNodes = [];
        const layerZ = -300;
        
        for (let x = -gridSize; x <= gridSize; x++) {
            for (let y = -gridSize; y <= gridSize; y++) {
                if (Math.random() > 0.6) {
                    const newNode = new Node(
                        x * spacing + (Math.random() - 0.5) * 30,
                        y * spacing + (Math.random() - 0.5) * 30,
                        layerZ,
                        Date.now()
                    );
                    newNodes.push(newNode);
                }
            }
        }
        
        newNodes.forEach(node => {
            newNodes.forEach(otherNode => {
                if (node !== otherNode) {
                    const dx = node.baseX - otherNode.baseX;
                    const dy = node.baseY - otherNode.baseY;
                    const dz = node.baseZ - otherNode.baseZ;
                    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    
                    if (distance < spacing * 2 && Math.random() > 0.5) {
                        node.connections.push(otherNode);
                    }
                }
            });
            
            nodes.forEach(existingNode => {
                if (existingNode.alive) {
                    const dx = node.baseX - existingNode.baseX;
                    const dy = node.baseY - existingNode.baseY;
                    const dz = node.baseZ - existingNode.baseZ;
                    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    
                    if (distance < spacing * 2 && Math.random() > 0.7) {
                        node.connections.push(existingNode);
                    }
                }
            });
        });
        
        nodes = nodes.concat(newNodes);
    }

    setInterval(spawnNewLayer, 3000);

    const dataParticles = [];
    nodes.forEach(node => {
        if (node.connections.length > 0 && Math.random() > 0.8) {
            const targetNode = node.connections[Math.floor(Math.random() * node.connections.length)];
            dataParticles.push(new DataParticle(node, targetNode));
        }
    });

    let startTime = Date.now();

    function animate() {
        const time = Date.now() - startTime;
        
        // 배경을 투명하게 지우기 (CSS 배경이 보이도록)
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach(node => node.update(time));
        nodes = nodes.filter(node => node.alive);
        nodes.forEach(node => node.drawConnections());
        nodes.forEach(node => node.draw());

        dataParticles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
})();
