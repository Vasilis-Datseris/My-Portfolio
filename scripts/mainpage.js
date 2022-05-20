let planetLottie = null;
let developerLottie = null;

developer = (container) => {
    developerLottie = lottie.loadAnimation({
        wrapper: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'css/Lottie/developer.json',
        name: 'developer',
    });
}

planet = (container) => {
    planetLottie = lottie.loadAnimation({
        wrapper: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'css/Lottie/planet.json',
        name: 'planet',
    });
}

cont = (container) => {
    planetLottie = lottie.loadAnimation({
        wrapper: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'css/Lottie/test.json',
        name: 'planet',
    });
}