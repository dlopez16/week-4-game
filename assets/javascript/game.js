

var heroes = {
	'from':200
	'to':300


}
var framecount = 20;
var frames = [];
 var tweenAmount = (heroes.to - heroes.from) /framecount;
 for (var 1=0; i<framecount; i++){
 	frames[i] = heroes.from+(tweenAmount*1);
 }


$('#obimg').on('click', heroes);