function writeCards (people, e) {
    const messages = [];
    for (let i = 0; i < people.length; i++) {
        const message = `Thank you, ${people[i]}, for the wonderful ${e} gift!`
        messages.push(message);
    }
    return messages;
}

writeCards(['Guadalupe', 'Ollie', 'Aki'], 'surprise');

function countDown(n) {
    console.log(n);
    let countdown = n;
    while (countdown > 0) {
        countdown--;
        console.log(countdown);
    }
}

countdown(10);