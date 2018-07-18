$(function () {
    var brain = $("#splashContainer"),
        logic = $("#logic"),
        creativity = $("#creativity"),
        submit = $("#submit");

    var config = {
        apiKey: "AIzaSyDX3seNqMPHEBruTkP6mkSPwb4ZewcYkfE",
        authDomain: "tysonsgithubpages.firebaseapp.com",
        databaseURL: "https://tysonsgithubpages.firebaseio.com",
        projectId: "tysonsgithubpages",
        storageBucket: "",
        messagingSenderId: "817774852195"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    brain.on("click", function () {

        creativity.animate({
            left: "500px",
            opacity: "0"
        });

        logic.animate({
            right: "500px",
            opacity: "0"
        });

        setTimeout(function () {
            window.location.replace("./about.html");
        }, 1000)
    });

    submit.on("click", function () {

        event.preventDefault();

        var name = $("#nameInput").val().trim(),
            email = $("#email").val().trim(),
            comments = $("#comments").val().trim();

        database.ref().push({
            name: name,
            email: email,
            comments: comments,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        
    });
});