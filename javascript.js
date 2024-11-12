document.getElementById('month-select').addEventListener('change', function() {
    const selectedMonth = this.value;

    // Fetch the data from the data.json file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const selectedData = data[selectedMonth];

            const tbody = document.querySelector('#prayer-times tbody');
            tbody.innerHTML = '';  // Clear previous data

            for (let i = 0; i < selectedData.date.length; i++) {
                const row = document.createElement('tr');
                
                const dateCell = document.createElement('td');
                dateCell.textContent = selectedData.date[i];
                row.appendChild(dateCell);
                
                const fajrCell = document.createElement('td');
                fajrCell.textContent = selectedData.fajr[i];
                row.appendChild(fajrCell);

                const sunriseCell = document.createElement('td');
                sunriseCell.textContent = selectedData.sunrise[i];
                row.appendChild(sunriseCell);

                const dhuhrCell = document.createElement('td');
                dhuhrCell.textContent = selectedData.dhuhr[i];
                row.appendChild(dhuhrCell);

                const asrCell = document.createElement('td');
                asrCell.textContent = selectedData.asr[i];
                row.appendChild(asrCell);

                const maghribCell = document.createElement('td');
                maghribCell.textContent = selectedData.maghrib[i];
                row.appendChild(maghribCell);

                const ishaCell = document.createElement('td');
                ishaCell.textContent = selectedData.isha[i];
                row.appendChild(ishaCell);

                tbody.appendChild(row);
            }
        })
        .catch(error => {
            console.error('Error loading data:', error);
        });
});

// Initial load for January data
document.getElementById('month-select').dispatchEvent(new Event('change'));
