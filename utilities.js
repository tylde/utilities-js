function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, fixed) {
    return Number((Math.random() * (max - min) + min).toFixed(fixed));
}

function uniqueId() {
    return Math.random().toString(36).substring(2, 10) + '-' + Date.now().toString(36);
}