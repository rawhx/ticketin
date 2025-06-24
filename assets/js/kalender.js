const mountNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const DayNames = ["S", "M", "T", "W", "T", "F", "S"];

let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const countDay = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    $("#kalender-bulanTahun").text(`${mountNames[month]} ${year}`);
    $("#kalender-hari").empty();

    DayNames.forEach(day => {
        $("#kalender-hari").append(`<div class="nama-hari">${day}</div>`);
    });

    for (let i = 0; i < firstDay; i++) {
        $("#kalender-hari").append(`<div></div>`);
    }

    for (let d = 1; d <= countDay; d++) {
        const isToday = today.toDateString() === new Date(year, month, d).toDateString();

        const classes = ["hari"];
        if (isToday) classes.push("hariIni");
        if (d == 20 || d == 1) classes.push("txt-date-event");

        const el = $(`<div class="${classes.join(" ")}">${d}</div>`);
        $("#kalender-hari").append(el);
    }
}

$(document).ready(function () {
    renderCalendar(currentDate);

    $("#bulan-sebelumnya").click(function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    $("#bulan-setelahnya").click(function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });
});