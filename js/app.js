myApp = {}
myApp.isBootstrapWorking = function() {
    let test_div = document.createElement("div");
    test_div.className = "hidden d-none";
    document.head.appendChild(test_div);
    let cssLoaded = window.getComputedStyle(test_div).display === "none";
    document.head.removeChild(test_div);
    if (!cssLoaded) {
        let link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "libs/bootstrap-4.5.0/bootstrap.min.css";
        document.head.appendChild(link)
    }
}

myApp.setCopyrightDate = function() {
    let time_div = document.getElementsByClassName("copyright-date")[0];
    time_div.textContent = new Date().getFullYear();
}

myApp.isBootstrapWorking()
myApp.setCopyrightDate()
