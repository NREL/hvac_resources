/* animation */
AdobeEdge.bootstrapCallback(function (compId) {
var myComposition = AdobeEdge.getComposition('myAnimation');
var fan = myComposition.getStage().$('fan');
fan.css('opacity',0);
TweenLite.to(fan, 3, {delay:1, opacity:1, x:-25});
});