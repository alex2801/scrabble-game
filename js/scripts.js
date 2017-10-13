var check = function(word) {
  var total = 0;
	var letters = word.toLowerCase().split(/\s*/);
	var pattern = [/[aeioulnrst]/, /[dg]/, /[bcmp]/, /[fhvwy]/, /[k]/, /[jx]/, /[qz]/];
	var score = [1, 2, 3, 4, 5, 8, 10];
	
	letters.forEach(function(letter) {
	
		for (var i = 0; i < score.length; i++) {
			total += pattern[i].test(letter) ? score[i] : 0;
    }
		
  });
	return total;
}

$(document).ready(function() {
	$("form#scrabble").submit(function(event) {
		var word = $("input#word").val().trim();
		var result = check(word);
				
		$(".points").text(result);
		$(":input").val("");
		$("#result").show();
				
		event.preventDefault();
	});
});