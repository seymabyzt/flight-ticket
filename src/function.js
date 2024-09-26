// map işleminde gelen zaman bilgisini stringe çevirdiğim fonksiyon
export function getTimeOfDateStr(timeString) {
    var date = new Date(timeString)
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    return formattedTime;
  }

  export function getFormattedDate(timeStringday) {
    const date = new Date(timeStringday);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }