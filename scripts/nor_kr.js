window.addEventListener('load', function() {
            document.body.classList.add('loaded');
        });

        function goToHomePage() {
            window.location.href = "index_kr.html";
        }

        function goToCR() {
            window.location.href = "CR_kr.html";
        }

        function goToVE() {
            window.location.href = "ve_kr.html";
        }

        window.addEventListener('load', function() {
            document.body.classList.add('loaded');
        });

        window.addEventListener('DOMContentLoaded', function() {
            var dropdownButton = document.querySelector('.dropbtn');
            var dropdownContent = document.querySelector('.dropdown-content');

            var isHovered = false;

            dropdownButton.addEventListener('click', function() {
                dropdownContent.classList.toggle('active');
                isHovered = false;
            });
            
            window.addEventListener('click', function(event) {
                if (!dropdownButton.contains(event.target)) {
                    dropdownContent.classList.remove('active');
                    isHovered = false;
                }
            });
        });