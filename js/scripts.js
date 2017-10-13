var check = function(word) {
	var total = 0;
	word.split(/\s*/).forEach(function(word) {
		if (word === 'q' || word === 'z') {
			 total += 10;
		} else if (word === 'j' || word === 'x') {
			 total += 8;
		} else if (word === 'k') {
			 total += 5;
		} else if (word === 'f' || word === 'h' || word === 'v' || word === 'w' || word === 'y') {
			 total += 4;
		} else if (word === 'b' || word === 'c' || word === 'm' || word === 'p') {
			 total += 3;
		} else if (word === 'd' || word === 'g') {
			 total += 2;
		} else if (word === 'a' || word === 'e' || word === 'i' || word === 'o' || word === 'u' || word === 'l' || word === 'n' || word === 'r' || word === 's' || word === 't') {
		 total += 1;
		}
	});
	return total;
}

$(document).ready(function() {
	$("form#scrabble").submit(function(event) {
		var word = $("input#word").val().trim().toLowerCase();
		var result = check(word);
		
		$(".points").text(result);
		$(":input").val("");
		$("#result").show();
		
		event.preventDefault();
	});
});