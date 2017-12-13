 $(document).ready(function() {
      // When random-button is clicked...
      $("#random-button").on("click", function() {
        // Create a string which will hold the lottery number
        var lottoNumber = "";
        // Then initiate a loop to generate 9 separate numbers
        for (var i = 0; i < 9; i++) {
          // For each iteration, generate a new random number between 1 and 9.
          var random = Math.floor(Math.random() * 9) + 1;
          // Take this number and then add it to the rest of the string.
          // In essence, we are iteratively building a string of numbers. (e.g. First: 1, Second: 13, Third: 135, etc.)
          lottoNumber = random + lottoNumber;
        }
        // Once we have our final lotto number, we'll prepend it to the top of our random-number div.
        $("#random-number").prepend("<br><hr>" + lottoNumber);
      });
    });
