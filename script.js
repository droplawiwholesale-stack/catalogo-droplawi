particlesJS("particles-js", {
	"particles": {
		"number": { "value": 40, "density": { "enable": true, "value_area": 1000 } },
		"color": { "value": "#ffffff" },
		"opacity": { "value": 0.2 },
		"size": { "value": 1.2 },
		"line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.05, "width": 1 },
		"move": { "enable": true, "speed": 0.5 }
	},
	"interactivity": {
		"events": { "onhover": { "enable": true, "mode": "grab" } }
	}
});

// Animação de entrada suave para o conteúdo principal
document.addEventListener("DOMContentLoaded", () => {
	const hero = document.querySelector('.hero');
	hero.style.opacity = "0";
	hero.style.transform = "translateY(20px)";
	hero.style.transition = "all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)";

	setTimeout(() => {
		hero.style.opacity = "1";
		hero.style.transform = "translateY(0)";
	}, 300);
});
