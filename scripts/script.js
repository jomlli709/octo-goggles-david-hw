$(document).ready(function() {
    let score = 0;

    // Make the game piece draggable
    $("#game-piece").draggable({
        containment: ".game-area", // Contain the game piece within the game area div
        stop: function() {
            let gamePiece = $(this);
            let gamePieceOffset = gamePiece.offset();
            let targetOffset = $("#target-area").offset();

            let gamePieceTop = gamePieceOffset.top;
            let gamePieceLeft = gamePieceOffset.left;

            let targetTop = targetOffset.top;
            let targetLeft = targetOffset.left;
            let targetBottom = targetTop + $("#target-area").outerHeight();
            let targetRight = targetLeft + $("#target-area").outerWidth();

            // Check if the game piece enters the target area
            if (gamePieceTop >= targetTop && gamePieceTop <= targetBottom &&
                gamePieceLeft >= targetLeft && gamePieceLeft <= targetRight) {
                score++;
                $("#score").text("Score: " + score);

                // Check if the score has reached 3
                if (score >= 3) {
                    $("#win-message").text("You Win!");
                }
            }
        }
    });

    // Reset button functionality
    $("#resetBtn").on("click", function() {
        $("#game-piece").css({ top: "50px", left: "50px" });
        score = 0;
        $("#score").text("Score: " + score);
        $("#win-message").text(""); // Clear the win message
    });
});