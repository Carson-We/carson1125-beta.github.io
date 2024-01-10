var websiteUrls = [
    { url: "http://carson1125.hk", label: "website-status" },
    { url: "http://carson1125.hk/kristy-webui_kr.html", label: "kristy-webui" },
    { url: "https://carson-we.github.io/carson1125-beta.github.io/", label: "github-pages" }
];

       function checkWebsiteStatus() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", websiteUrl, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    updateWebsiteStatus("정상", "#32CD32");
                } else {
                    updateWebsiteStatus("오프라인", "#FF0000");
                }
            }
        };
        xhr.send();
    }

    function updateWebsiteStatus(urlObj, status, color) {
        var statusElement = document.getElementById(urlObj.label);
        if (statusElement) {
            statusElement.textContent = "Server: " + status;
            statusElement.style.color = color;
        }
    }
    
    window.addEventListener('load', function () {
        for (var i = 0; i < websiteUrls.length; i++) {
            checkWebsiteStatus(websiteUrls[i]);
        }
    });