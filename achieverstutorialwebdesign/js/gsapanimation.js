// // Register ScrollTrigger plugin
// 		gsap.registerPlugin(ScrollTrigger);

// 		// Animate each box on scroll
// 		gsap.utils.toArray(".box").forEach(box => {
// 		    gsap.to(box, {
// 		        opacity: 1,
// 		        y: 0,
// 		        duration: 1.2,
// 		        ease: "power2.out",
// 		        scrollTrigger: {
// 		            trigger: box,
// 		            start: "top 80%",  // Trigger when box enters 80% of viewport
// 		            toggleActions: "play none none reverse"
// 		        }
// 		    });
// 		});