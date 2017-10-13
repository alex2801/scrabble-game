var check = function(word) {
		var total = 0;
		var arr = word.toLowerCase().split(/\s*/);
		var patterns = [/[aeioulnrst]/, /[dg]/, /[bcmp]/, /[fhvwy]/, /[k]/, /[jx]/, /[qz]/];
		
		for (var i = 0; i < arr.length; i++) {
		
				patterns.forEach(function(pattern, ind) {
						total += (pattern.test(arr[i]) && ind <= 4) ? ind + 1 : (pattern.test(arr[i]) && ind === 5) ? 8 : (pattern.test(arr[i]) && ind === 6) ? 10 : 0;
				});
			
		}
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