


 
	 
	var depth_list;

	var TOP = 1;
	var RIGHT = 2;
	var BOTTOM = 3;
	var LEFT = 4;

	var MODE = '';


	 
	function start() {

		make_all_white();
		oSelect = document.getElementById('depth');
		oSelect.value =   'SELECT';
		var msg = document.getElementById('msg');
		msg.innerHTML = 'Select the "Challenges Count"';

	}

	function reset() {

		make_all_white();
		oSelect = document.getElementById('depth');
		oSelect.value =   'SELECT';
		var msg = document.getElementById('msg');
		msg.innerHTML = 'Game Over!';

	}

 

	function init(selectObj) { 

		var btn = document.getElementById('next');
		btn.enabled = true;

 	  
 		var idx = selectObj.selectedIndex; 
 		 
 		var which = selectObj.options[idx].value; 
 	
		 
		MODE = 'SHOW';
		depth_list = new Array(parseInt(which));

		for (i = 0; i < depth_list.length; i++) {
			depth_list[i] = getRandomizer(1,4);
			 
		}

		ptr = 0;
		next();


		// set the MODE to SHOW
		// get the depth
		// create an array that length
		// loop through the array and set the entry to a random number between 1 and 4
		// set the MODE to FOLLOW
		// set the ptr to first element
		// display message to click the circle that was red first.


	}

	function getRandomizer(a,b) {
	     
	        return (Math.floor( Math.random()* (1+b-a) ) ) + a;
	     
	} 



	function next() {

		if (MODE == 'FOLLOW') 
			return;
		
		if (MODE == 'SHOW' ) {
			if (ptr < depth_list.length )  {

				make_all_green();
				var selector = depth_list[ptr];

				make_red(selector);
				ptr++;
				
			}
			else {
				var btn = document.getElementById('next');
				btn.enabled = false;
				MODE = 'FOLLOW'	;	
				ptr = 0;
				var oMsg = document.getElementById('msg');
				make_all_white();
				//alert( 'OK, now click the circles in the same order that the red dot appeared.');
			}
		}
	}


 
	 



	function make_all_white() {
		var oImg = document.getElementById('bottom');
		oImg.setAttribute('src', 'images/white.png');
		oImg = document.getElementById('top');
		oImg.setAttribute('src', 'images/white.png');
		oImg = document.getElementById('left');
		oImg.setAttribute('src', 'images/white.png');
		oImg = document.getElementById('right');
		oImg.setAttribute('src', 'images/white.png');

	}

 
	function clicked(val) {
		 
		var msg = document.getElementById('msg');
		if (depth_list[ptr] == parseInt(val))
			if (ptr == depth_list.length - 1)
				msg.innerHTML = "Game Over! You Won!!!";
			else
				msg.innerHTML = 'Correct! (' + (ptr + 1) + ')' ;
		else
			msg.innerHTML = 'You LOSE!!!';
		ptr++;
		 
	}
	 
	function make_red(position) {


		 
		if (position == 1) {
			put_red_top();
			return;
		}
		if (position == 2) {
			put_red_right();
			return;
		}
		if (position == 3) {
			put_red_bottom();
			return;
		}
		if (position == 4) {
			put_red_left();
			return;
		}
	}



	function make_all_green() {
		put_green_top();
		put_green_right();
		put_green_left();
		put_green_bottom();
	}

	function put_green_top() {
		var oImg = document.getElementById('top')
		oImg.setAttribute('src', 'images/green.png');
	}


	function put_green_bottom() {
		var oImg = document.getElementById('bottom')
		oImg.setAttribute('src', 'images/green.png');
	}

	function put_green_left() {
		var oImg = document.getElementById('left')
		oImg.setAttribute('src', 'images/green.png');
	}	


 	function put_green_right() {
		var oImg = document.getElementById('right')
		oImg.setAttribute('src', 'images/green.png');
	}


	function put_red_right() {
		var oImg = document.getElementById('right')
		oImg.setAttribute('src', 'images/red.png');
	}

	function put_red_left() {
		var oImg = document.getElementById('left')
		oImg.setAttribute('src', 'images/red.png');
	}

	function put_red_top() {
		var oImg = document.getElementById('top')
		oImg.setAttribute('src', 'images/red.png');
	}

	function put_red_bottom() {
		var oImg = document.getElementById('bottom')
		oImg.setAttribute('src', 'images/red.png');
	}