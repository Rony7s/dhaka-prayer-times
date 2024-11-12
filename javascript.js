//for today
function getCurrentMonthAndDay() {
    const date = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    
    return [month, day];
}

//console.log(getCurrentMonthAndDay()[0]);
function todayTable(m, i) {
    i = i - 1;
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const selectedData = data[m];
            const tbody = document.querySelector('#today_prayer_times tbody');
            tbody.innerHTML = '';  // Clear previous data

            const row = document.createElement('tr');
            const prayerTimes = ['date', 'fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];

            // Loop through each prayer time and create a table cell
            prayerTimes.forEach(time => {
                const cell = document.createElement('td');
                cell.textContent = selectedData[time][i];
                row.appendChild(cell);
            });

            tbody.appendChild(row);
        })
        .catch(error => {
            console.error('Error loading data:', error);
        });
}



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


todayTable(getCurrentMonthAndDay()[0],getCurrentMonthAndDay()[1]);
// Initial load for January data
document.getElementById('month-select').dispatchEvent(new Event('change'));
