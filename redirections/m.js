function redirect() {
    var code = document.getElementsByName("pinz")[0].value;

    // Check if the input code matches a specific code pattern
    switch (code) {
        case "123":
            window.location.href = "../Subjects/maths.html";
            break;
        case "765":
            window.location.href = "../Subjects/biology.html";
            break;
        case "987":
            window.location.href = "../Subjects/physics.html";
            break;
        case "345":
            window.location.href = "../"; // Assuming you want to redirect to index.html for code "345"
            break;
        default:
            window.location.href = "../"; // Redirect to a default page if no code matches
            break;
    }
}
