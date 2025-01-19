PWeb.viewMode = (function () {

    let icon = jQuery("#switch-mode-icon")

    function setDarkMode() {
        localStorage.setItem('mode', 'dark')
        jQuery("body").addClass("dark")
        icon.html("");
        icon.html('<i class="fa-solid fa-moon"></i>')
    }

    function removeDarkMode() {
        jQuery("body").removeClass("dark")
        localStorage.removeItem('mode')
        icon.html("");
        icon.html('<i class="fa-solid fa-sun"></i>')
    }

    return {
        init: function () {
            let checkBox = jQuery("#switch-mode-checkbox")

            let currentMode = localStorage.getItem("mode")
            if (currentMode === "dark") {
                setDarkMode()
                checkBox.prop("checked", true);
            }

            checkBox.on("change", function () {
                let isChecked = jQuery(this).is(':checked')
                if (isChecked) {
                    setDarkMode()
                } else {
                    removeDarkMode()
                }
            })
        }
    }
}());