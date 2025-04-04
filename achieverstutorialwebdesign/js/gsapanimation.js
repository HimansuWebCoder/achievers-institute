window.onload = function () {
    console.log("Page loaded, initializing GSAP...");
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".box").forEach(box => {
        gsap.to(box, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: box,
                start: "top 80%", 
                toggleActions: "play none none reverse"
            }
        });
    });
};
