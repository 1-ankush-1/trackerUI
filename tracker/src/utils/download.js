function downloadDataAsCSV(data) {
    if (data.length > 0) {
        const titleKeys = Object.keys(data[0]);

        const refinedData = [];
        refinedData.push(titleKeys);

        data.forEach(item => {
            const row = titleKeys.map(key => item[key]);
            refinedData.push(row);
        });

        let csvContent = ''

        refinedData.forEach(row => {
            csvContent += row.join(',') + '\n'
        })
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
        const objUrl = URL.createObjectURL(blob)
        const confirmDownload = window.confirm('Do you want to download the file?');
        if (confirmDownload) {
            const link = document.createElement('a');
            link.setAttribute('href', objUrl);
            link.setAttribute('download', 'File.csv');
            link.textContent = 'Click to Download';
            link.click();
        } else {
            alert('Download cancelled');
        }
    }
}

const download = {
    CSV: downloadDataAsCSV
}

export default download;