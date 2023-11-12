document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.getElementById("searchButton");
    var searchInput = document.getElementById("searchInput");
    var resultDiv = document.getElementById("result");

    searchButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        var searchTerm = searchInput.value.trim();
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                // Clear previous results
                resultDiv.innerHTML = "";

                if (xhr.status == 200) {
                    // Display the heading
                    resultDiv.innerHTML += "<h2>Result</h2>";

                    // Display the result in the resultDiv
                    resultDiv.innerHTML += xhr.responseText;
                } else {
                    // Display an error message in the resultDiv
                    resultDiv.innerHTML = "Error retrieving data";
                }
            }
        };

        xhr.open("GET", "superheroes.php?query=" + encodeURIComponent(searchTerm), true);
        xhr.send();
    });
});
