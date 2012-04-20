


 
	 

	var TOP = 1;
	var RIGHT = 2;
	var BOTTOM = 3;
	var LEFT = 4;

	var MODE = '';

	var msg 		;
	var oSelect ;
	var nextButton ;
	var bottomImg ;
	var topImg ;
	var leftImg ;
	var rightImg ;
	var tbl ;
	var level;
	var row ;

	var levels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	var level = 0;

	var consec_wins = 0;
	var game;







	function initialize_selectors() {
	  	msg = document.getElementById('msg');
		//oSelect = document.getElementById('depth');
		nextButton = document.getElementById('next');
		bottomImg = document.getElementById('bottom');
		topImg = document.getElementById('top');
		leftImg = document.getElementById('left');
		rightImg = document.getElementById('right');
		tbl = document.getElementById('tbl');
	}

	 
	function  insert() {
		row = tbl.insertRow(-1);
		var col1 = row.insertCell(0);
		var col2 = row.insertCell(1);
		var col3 = row.insertCell(2);
		col1.innerHTML = "I am ";
		col2.innerHTML = "a new";
		col3.innerHTML = "column";
		level++;
	}


	function init(selectObj) { 

		initialize_selectors();
		make_all_white();
		
		msg.innerHTML = 'Select the "Challenges Count"';
		level = 0;
		start();
	}

	function getRandomizer(a,b) {
		return (Math.floor( Math.random()* (1+b-a) ) ) + a;
	} 



	function start() {

		nextButton.enabled = true;

		MODE = 'SHOW';
		game = new Array(parseInt(levels[level]));

		for (i = 0; i < levels[level]; i++) {
			game[i] = getRandomizer(1,4);
		}

		level = 0;

		ptr = 0;
		
		msg.innerHTML = "You are on Level 1"
		next();
	}

	function reset() {

		make_all_white();
		//oSelect.value =   'SELECT';
		msg.innerHTML = 'Game Over!';

	}



	function next() {

		if (MODE == 'FOLLOW') 
			return;
		
		if (MODE == 'SHOW' ) {
			if (ptr < game.length )  {

				make_all_green();
				var selector = game[ptr];

				make_red(selector);

				ptr++;


				
			}
			else {
				 
				nextButton.enabled = false;
				MODE = 'FOLLOW'	;	
				ptr = 0;
				 
				make_all_white();
				//alert( 'OK, now click the circles in the same order that the red dot appeared.');
			}
		}
	}


 
	 function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



	function make_all_white() {
		
		bottomImg.setAttribute('src', 'images/white.png');
		topImg.setAttribute('src', 'images/white.png');
		leftImg.setAttribute('src', 'images/white.png');
		rightImg.setAttribute('src', 'images/white.png');
	}

 
	function clicked(val) {
		 
		var msg = document.getElementById('msg');
		if (game[ptr] == parseInt(val))
			if (ptr == game.length - 1) {
				msg.innerHTML = "Good show!";
				if (++consec_wins == 3) {
					consec_wins = 1;
					level++;
				}
				else {
					next();
				}

			}
			else {
				msg.innerHTML = 'Correct! (' + (ptr + 1) + ')' ;
				next();
			}
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

		sleep(10);
		sleep(10);
		sleep(10);
		make_all_white();	
	}



	function make_all_green() {
		put_green_top();
		put_green_right();
		put_green_left();
		put_green_bottom();
	}

	function put_green_top() {
		topImg.setAttribute('src', 'images/green.png');
	}


	function put_green_bottom() {
		bottomImg.setAttribute('src', 'images/green.png');
	}

	function put_green_left() {
		leftImg.setAttribute('src', 'images/green.png');
	}	


 	function put_green_right() {
		rightImg.setAttribute('src', 'images/green.png');
	}


	function put_red_right() {
		rightImg.setAttribute('src', 'images/red.png');
	}

	function put_red_left() {
		leftImg.setAttribute('src', 'images/red.png');
	}

	function put_red_top() {
		topImg.setAttribute('src', 'images/red.png');
	}

	function put_red_bottom() {
		bottomImg.setAttribute('src', 'images/red.png');
	}