const status = 200;

if (status === 500) {
    console.log('OK!');
} else if (status === 400 || status === 500) {
    console.log('Error!');
} else {
    console.log('Unknown status!')
}