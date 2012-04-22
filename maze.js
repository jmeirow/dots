/*  


		A single 'game' begins with the system flashing a series of black dots and then using your mouse (finger on iOS)
		you attempt to repeat the sequence, clicking the dots you remember being the black dots. The length of the "series"
		depends on what "level" you're on. There are 10 levels. Level 1 = 3 dots, level 10 =13 dots.

		A round is a group of three games. 


		Dots will test your memory in increasing inrements.

		There are four (4) DOTS

		There are fifteen (10) LEVELS

		Each level requires three (3) consecutive successful ROUNDS to advance to the next level.

		Failure failing a round sends you back to the prior level, which you must complete again.

		Visual Representation: (W=white circle, B = black circle, p = 1 second pause )

		Level 1
			User 		=> click start
			Computer 	=> WWBW (p) WBWW (p) WWWB
			User  		=> clicks pattern of black dots.


			game = [2,1,3]  (location of the black dots above)
			level = 1
			ptr = 0, then 1, then 2, then back to zero for user clicks. Get's incremented on each click


			REPEAT UNTIL SUCCESSFUL 3 times.

		Level 2 
			User 		=> click start
			Computer 	=> WWBW (p) WBWW (p) WWWB (p) BWWW
			User  		=> clicks pattern of black dots.

			REPEAT UNTIL SUCCESSFUL 3 times.



	 

	When you click on an image
	1) if mode is SHOW, ignore the click (they've clicked WHILE the computer was flashing the dots)
	2) Only one of three possibilities are left:
			a) they've clicked on the WRONG image
			b) they've clicked on the RIGHT image
				i) 	and it was the last dot of the game
				ii)	it was not the last dot of the game
 	 
	





	*/


	var click_cnt_msg;
	var click_cnt = 0;
	var between_game_interval = 1250;
	var TOP = 0;
	var RIGHT = 1;
	var BOTTOM = 2;
	var LEFT = 3;
	var MODE = '';
	var msg 		;
	var nextButton ;
	var bottomImg ;
	var topImg ;
	var leftImg ;
	var rightImg ;
	var tbl ;
	var row ;
	var games =  [2,2,3,3,3,3,3,3,3,3 , 3, 3, 3, 3, 3];
	var levels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	var level = 0;
	var consec_wins = 0;
	var game;
	var images ;
	var last_black_location;
	var interval_in_milliseconds;
	var green_lights;
	var currlvl; 


	function initialize_selectors() {
		
		
		green_lights = new Array(3);
		green_lights[0] = document.getElementById('green_1');
		green_lights[1] = document.getElementById('green_2');
		green_lights[2] = document.getElementById('green_3');
		make_green_invisible();
  		msg = document.getElementById('message');
  		currlvl = document.getElementById('current_level');
		nextButton = document.getElementById('next');
		bottomImg = document.getElementById('bottom');
		topImg = document.getElementById('top');
		leftImg = document.getElementById('left');
		rightImg = document.getElementById('right');
		images = new Array(4);
		images[TOP] = topImg;
		images[RIGHT] = rightImg;
		images[BOTTOM] = bottomImg;
		images[LEFT] = leftImg;
		interval_in_milliseconds = 500;
		click_cnt_msg = document.getElementById('click_count_message');
	}

	function init() { 
		
		initialize_selectors();
		make_all_white();
		level = 0;
		ptr = 0;
		currlvl.innerHTML = 'Working on Level: 1'
		click_cnt_msg.innerHTML = 'Click Count: 0';
		setTimeout(start,between_game_interval );
	}

	function getRandomizer(a,b) {

		return (Math.floor( Math.random()* (1+b-a) ) ) + a;
	} 

	function start() {


		
		 
		msg.innerHTML = '';

		// set the game in SHOW mode (the computer is active...)
		MODE = 'SHOW';


		// initialize the current "game" array to the length for the current level
		game = new Array(levels[level]);




		// the below code keeps the same dot from appearing in the same location consecutively.
		i = 0;
		while (i < levels[level]) {

			rand = getRandomizer(0,3);
			if (i == 0) {
				game[i] = rand;
			}
			else {
				if (rand != game[i-1]) {
					game[i] = rand;
				} else {
					continue;
				}
			}

			i++;
		}

		 

		// the ptr is the index into the current game. If the current game is at level 1, there will be three dots.
		// 'game' will be an array with length of three, ptr will cycle betwee 0 and 2 to index the game array

		ptr = 0;
		


		// 
		display_target_circle();
	}

	function display_target_circle() {

		// if (MODE == 'SHOW' ) {

			// if this is ptr is still within the range of the current game..
			if (ptr < game.length ) {

				// put a black circle on the screen
				put_focus(game[ptr]);

				//increment the counter
				ptr++
				if (ptr < game.length) {
					// if it's still with the range of the game, call the timer function to come display the next dot in 1 second.
					setTimeout(display_target_circle, interval_in_milliseconds);
				} else {
					// if we are now OUT of the game range, this was the last dot to display and it's time for the player to respond.
					// so set mode to FOLLOW so their clicks will be heard.
					MODE='FOLLOW'
					// set the ptr back to the beginning of the game to check their answers
					ptr = 0;
					// reset all the circles to white.
					setTimeout(make_all_white, interval_in_milliseconds);

				}
			}
		//}
	}

	function make_all_white() {
		for (i = 0 ; i <= 3; i++) {
			img = images[i];
			img.setAttribute('src', 'images/white.png');
		}
	}

	function clicked(val) {
		click_cnt++;
		click_cnt_msg.innerHTML = 'Click Count: ' + click_cnt;

		// The user has clicked!
		if (MODE == 'SHOW') {
			return;  // famous last words...'this should never happen....'
		}

		// this next line checks to see if the user clicked the correct circle
		if (game[ptr] == parseInt(val)) {
			// so go see what our options are when the've clicked on the correct circle.
			player_clicked_on_correct_image()
			
		} else {
			// and if we're here, they've clicked the WRONG circle...
			player_clicked_on_wrong_image();
		}
	}

	function player_clicked_on_correct_image() {

		msg.setAttribute('style','width:200px;font-size:20pt;text-align:center');

		if (ptr == game.length - 1) {
			

			last_click_of_game();
		}
		else {
			not_last_click_of_game();
		}
	}

	function last_click_of_game() {
		
		msg.innerHTML =   ( ptr + 1) + ' : ' + game.length;

		make_green_visible(consec_wins);

		if (++consec_wins == games[ptr]) {
			msg.innerHTML = "Way to go!";
			currlvl.innerHTML = 'Working on Level: '  + (level + 2);
			last_game_of_round();
			setTimeout(start, between_game_interval);
		} else {
			 

			setTimeout(start, between_game_interval);
		}
	}

	function last_game_of_round() {
		consec_wins = 0;
		level++;
		make_green_invisible();
	}

	function make_green_visible(val) {
		green = green_lights[val];
		green.style.visibility = 'visible';
	}

	function not_last_click_of_game() {
	 
		msg.setAttribute('style','width:200px;font-size:20pt;text-align:center');
		msg.innerHTML =   ( ptr+ 1) + ' : ' + game.length;
		ptr++;
	}

	function player_clicked_on_wrong_image() {
		msg.setAttribute('style','width:200px;font-size:10pt;text-align:center');

		if ( level > 0 ) {
			level--;
			msg.innerHTML = 'You LOSE!!! <br/> Back to Level ' + (level+1) + ' for you!'
			consec_wins = 0;
			currlvl.innerHTML = 'Working on Level: '  + (level+1);
			setTimeout(start, between_game_interval);

		} else {
			consec_wins = 0;
			currlvl.innerHTML = 'Working on Level: '  + (level+1);
			msg.innerHTML = "How can you<br/> not remember<br/> one stinkin' dot?";
			setTimeout(start, between_game_interval);
		}
	}
	 
	function put_focus(position) {
		 
		if (position >= 0 && position <= 3) {

			if (last_black_location != undefined ) {
				last_black_location.setAttribute('src', 'images/white.png');
			}
			img = images[position];
			img.setAttribute('src', 'images/black.png');
			last_black_location = img;
		}
	}

	function make_green_invisible() {

		for (i = 0; i < 3; i++) {
			var green = green_lights[i];
			green.style.visibility ='hidden';
		}
	}





