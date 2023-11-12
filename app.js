document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {
        // Make an AJAX call to superheroes.php
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Display the list of superheroes as a JavaScript alert
                alert(xhr.responseText);
            }
        };

        xhr.open("GET", "superheroes.php", true);
        xhr.send();
    });
});
