let Darkmode = null;

darkmodeLottie = (container, animationName, isOpen) => {
    Darkmode = lottie.loadAnimation({
        wrapper: container,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad: true,
        },
        path: animationName != null ? animationName : null,
        name: 'Darkmode',
    });

    !isOpen ? Darkmode.goToAndStop(0, true) : Darkmode.goToAndStop(240, true)
}

playDarkMode = (container, isOpen) => {
    if (isOpen)
        Darkmode.playSegments([30, 208], true)
    else
        Darkmode.playSegments([280, 425], true)
}