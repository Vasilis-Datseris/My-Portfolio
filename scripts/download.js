let Download = null;
let deferredPrompt;
let isInstalled = false;
let isControlled = false;

downloadLottie = (container, animationName) => {
    Download != null ? container.children[0].remove() : null;

    Download = lottie.loadAnimation({
        wrapper: container,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad: true,
        },
        path: animationName != null ? animationName : null,
        name: 'Download',
    });
}

playDownload = (container, isOpen) => {
    if (isOpen)
        Download.playSegments([268, 0], true)
    else 
        Download.playSegments([0, 120], true)
    
}


window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;

    deferredPrompt.userChoice.then(function (choiceResult) {
        console.log(choiceResult.outcome); // either "accepted" or "dismissed"
        if (choiceResult.outcome === 'accepted') {
            Download.playSegments([120, 268], true)
            deferredPrompt = null;
            isInstalled = true;
        }
        else
            Download.playSegments([120, 0], true)

        try {
            DotNet.invokeMethod('Portfolio_Blazor.Client', 'Download_Toast', isInstalled);
        } catch (err) {
            //console.log(err);
        }
    });
});

installPortfolio = () => {
    Download.playSegments([0, 120], true)
    
    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
    } else {
        Download.playSegments([120, 0], true)
    }
}

//checkIfInstalled = () => {
//    while (isControlled) {
//        deferredPrompt.userChoice.then(function (choiceResult) {
//            console.log(choiceResult.outcome); // either "accepted" or "dismissed"
//            if (choiceResult.outcome === 'accepted')
//                isInstalled = true;
//            else
//                isInstalled = false;
//        });
//        console.log(isControlled);
//    }
//    return isInstalled;
//}