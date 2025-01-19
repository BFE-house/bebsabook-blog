jQuery(document).ready(function () {
    PWeb.viewMode.init()
    const element = document.getElementsByClassName("active")[0];
    if (element) {
        element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
});