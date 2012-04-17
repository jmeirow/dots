


 
	 
	var depth_list;

	var TOP = 1;
	var RIGHT = 2;
	var BOTTOM = 3;
	var LEFT = 4;

	var MODE = '';


	 

	function init(selectObj) { 

		var btn = document.getElementById('next');
		btn.enabled = true;

 	  
 		var idx = selectObj.selectedIndex; 
 		 
 		var which = selectObj.options[idx].value; 
 	
		 
		MODE = 'SHOW';
		depth_list = new Array(parseInt(which));
		for (i = 0; i < depth_list.length; i++) {
			depth_list[i] = Math.floor(Math.random()*4)
			//alert('i = ' + i + ' value  = ' + depth_list[i]);
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

	 



	function next() {

		
	 
		
		if (MODE == 'SHOW' ) {
			if (ptr < depth_list.length )  {

				make_all_green();
				var selector = depth_list[ptr];

				make_red(selector);
				ptr++;
				return;
			}
		} 
		var btn = document.getElementById('next');
		btn.enabled = false;
		MODE = 'FOLLOW'	;	
		ptr = 0;
		var oMsg = document.getElementById('msg');
		oMsg.text =   'OK, now click the circles in the same order that the red dot appeared.';
	}

 
	 


	function reset() {

		make_all_white();
		oSelect = document.getElementById('depth');
		oSelect.value =   'SELECT';
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

 
	function top_clicked() {
		if (depth_list[ptr] == 1)
			msg.value = 'Correct!';
		else
			msg.value = 'YOU LOSE!';
		ptr++;
		 
	}
	function bottom_clicked() {
		if (depth_list[ptr] == 3)
			msg.value = 'Correct!';
		else
			msg.value = 'YOU LOSE!';
		ptr++;
	}

	function right_clicked() {
		if (depth_list[ptr] == 4)
			msg.value = 'Correct!';
		else
			msg.value = 'YOU LOSE!';
		ptr++;
	}

	function left_clicked() {
		if (depth_list[ptr] == 2)
			msg.value = 'Correct!';
		else
			msg.value = 'YOU LOSE!';
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