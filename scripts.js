function showChart(country) {
    // Assuming you have a function to generate data and render the chart
    // You can replace this with your own logic to generate the chart
    const data = generateDataForCountry(country);
    renderChart(data);

    // Show the chart container and hide country click container
    document.getElementById('country-click').classList.add('hidden');
    document.getElementById('chart-container').classList.remove('hidden');
}

function generateDataForCountry(country) {
    // Example data generation logic, replace this with your own data logic
    // Here, we just generate random data for demonstration purposes
    const labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
    const data = labels.map(() => Math.floor(Math.random() * 100));
    return { labels, data };
}

function renderChart(data) {
    const ctx = document.getElementById('bar-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Data',
                data: data.data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
