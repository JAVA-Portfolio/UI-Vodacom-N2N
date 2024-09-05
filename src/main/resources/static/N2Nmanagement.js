document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Function to load content based on the selected option
    function loadContent(option) {
        console.log('Loading content for option:', option);
        const mainBody = document.getElementById('main-body');
        let filePath = '';

        // Determine which file to load based on the option
        switch (option) {
            case 'upload':
                filePath = 'upload-discrepancy.html';
                break;
            case 'manage':
                filePath = 'manage-discrepancies.html';
                break;
            case 'statistics':
                filePath = 'discrepancy-statistics.html';
                break;
            default:
                mainBody.innerHTML = `<p>Option not recognized.</p>`;
                return;
        }

        // Fetch the HTML file and insert it into the main body
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                mainBody.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading the content:', error);
                mainBody.innerHTML = `<p>Error loading content. Please try again later.</p>`;
            });
    }
