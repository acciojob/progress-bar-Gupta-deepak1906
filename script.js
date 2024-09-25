//your JS code here. If required.
const progress = documnet.getElementById('progress');
const prev = documnet.getElementById('prev');
const next = documnet.getElementById('next');
const circles = documnet.getElementById('circles');

let currentActive=1;

next.addEventListener('click', () => {
	currentActive++;

	if(currentActive>circles.length){
		currentActive=circles.length;
	}
});

prev.addEventListener('click' () => {
	currentActive--;

	if(currentActive<1){
		currentActive=1;
	}
	update();
});

function(update()){
	circles.forEach((circles,idx) => {
		if (idx<currentActive) 
		{
			circle.classList.add('active');
			
		}
		else{
			circle.classList.remove('active');
		}
	});
	const active = document.querySelectAll('.active');
	progress.style.width = ((actives.length -1)/(circles.length-1)) *100 +'%';

	if (currentActive===1) {
		prev.disabled=true;
	}
	else{
		prev.disabled=false;
	}
	
	if (currentActive===circles.length) {
		next.disabled=true;
	}
	else{
		next.disabled=false;
	}
}