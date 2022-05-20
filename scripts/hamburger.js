let Hamburger = null;

hamburgerLottie = (container, animationName, isOpen) => {
    Hamburger != null ? container.children[0].remove() : null;

    Hamburger = lottie.loadAnimation({
        wrapper: container,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad: true,
        },
        path: animationName != null ? animationName : null,
        name: 'Hamburger',
    });

    isOpen ? Hamburger.goToAndStop(20, true) : null
}

playHamburger = (container, isOpen) => {
    if (isOpen) 
        Hamburger.playSegments([0, 20], true)
    else 
        Hamburger.playSegments([20, 41], true)
}