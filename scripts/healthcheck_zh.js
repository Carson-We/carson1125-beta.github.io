var websiteUrl = "http://carson1125.hk";

       function checkWebsiteStatus() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", websiteUrl, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    updateWebsiteStatus("正常", "#32CD32");
                } else {
                    updateWebsiteStatus("離線", "#FF0000");
                }
            }
        };
        xhr.send();
    }

    function updateWebsiteStatus(status, color) {
        var statusElement = document.getElementById("website-status");
        statusElement.textContent = "Server: " + status;
        statusElement.style.color = color;
    }

    window.addEventListener('load', function () {
        checkWebsiteStatus();
    });