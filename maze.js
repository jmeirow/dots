


 
	var stack;
	var depth;



	function start() {

		put_green_top();
		put_green_left();
		put_green_bottom();
		put_red_right();
	}


	function reset() {

		var oImg = document.getElementById('bottom')
		oImg.setAttribute('src', 'images/white.png');
		oImg = document.getElementById('top')
		oImg.setAttribute('src', 'images/white.png');
		oImg = document.getElementById('left')
		oImg.setAttribute('src', 'images/white.png');
		oImg = document.getElementById('right')
		oImg.setAttribute('src', 'images/white.png');


	}

	function select_level() {


	}

	function generate_game() {

	}

	function game_move_forward() {

	}

	function accept_player_move_forward() {

	}

	function accept_player_move_return() {

	}
	function top_clicked() {

		alert('top');
	}
	function bottom_clicked() {

		alert('bottom');
	}
		function right_clicked() {

		alert('right');
	}
		function left_clicked() {

		alert('left');
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