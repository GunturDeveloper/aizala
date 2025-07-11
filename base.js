function getTimeOfDay(hours) {
    if (hours >= 5 && hours < 10) return "Pagi";
    else if (hours >= 10 && hours < 15) return "Siang";
    else if (hours >= 15 && hours < 18) return "Sore";
    else return "Malam";
}

function getDayOfDay(day) {
    if (day == 1) return "Senin";
    else if (day == 2) return "Selasa";
    else if (day == 3) return "Rabu";
    else if (day == 4) return "Kamis";
    else if (day == 5) return "Jumat";
    else if (day == 6) return "Sabtu";
    else if (day == 7) return "Minggu";
}

function getMonth(bulan) {
    if (bulan == 0) return "Januari";
    else if (bulan == 1) return "Februari";
    else if (bulan == 2) return "Maret";
    else if (bulan == 3) return "April";
    else if (bulan == 4) return "Mei";
    else if (bulan == 6) return "Juni";
    else if (bulan == 7) return "Juli";
    else if (bulan == 8) return "Agustus";
    else if (bulan == 9) return "November";
    else if (bulan == 10) return "September";
    else if (bulan == 11) return "Desember";
}

    function updateGreeting() {
        const now = new Date();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const waktu = getTimeOfDay(hour);
        const days = now.getDay();
        const date = now.getDate();
        const hari = getDayOfDay(days);
        const moon = now.getMonth();
        const bulan = getMonth(moon);

        const greetEl = document.getElementById('greeting');  
        const showDates =
        document.getElementById('date');
        showDates.textContent = `${hour}:${minutes} ${hari}, ${date} ${bulan}`
        greetEl.textContent = `Halo Guntur, selamat ${waktu}`; 
        greetEl.classList.remove('hidden');
        setInterval(updateGreeting, 10000);  
}
 

        

    
