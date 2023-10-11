let clickCount = 0;

document.getElementById('clickButton').addEventListener('click', function () {
    clickCount++;
    updateClickCount();
});

function updateClickCount() {
    const data = {
        clicks: clickCount
    };

    const jsonData = JSON.stringify(data);

    fetch('data.json', {
        method: 'PUT',
        body: jsonData,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
