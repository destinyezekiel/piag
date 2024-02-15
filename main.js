
  function updateTimestamp() {
    // Get the element containing the timestamp
    var updatedElement = document.getElementById("updatedTimestamp");
    
    // Create a new Date object to get the current date and time
    var currentDate = new Date();
    
    // Format the date as desired
    var formattedDate = currentDate.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" });
    
    // Update the content of the element with the formatted date
    updatedElement.textContent = "By: Destiny / Posted: 25th July 2022 / Updated: " + formattedDate;
  }

  // Call the updateTimestamp function whenever there's a change on the page
  // For example, you can call this function after updating any content
   updateTimestamp();

     // Add an event listener to the button to show the modal
document.getElementById("copyButton").addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
});

// Add an event listener to the close button to hide the modal
document.getElementsByClassName("close")[0].addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
});
