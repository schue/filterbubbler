console.log('InfoBubbles: Background script starting');

var bubblePort;

browser.runtime.onConnect.addListener(function(port) {
    bubblePort = port;
    bubblePort.onMessage.addListener(function(m) {
        console.log('InfoBubbles: Background: Message:', m);
    });
});