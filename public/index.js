async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    let response = await fetch('http://localhost:9001/counter')
    let result = await response.json()
    console.log(result)

    let countValue = result.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
        // PATCH STARTS
        fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: countValue
            })
        })
        // PATCH ENDS
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        // PATCH STARTS 
        fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: countValue
            })
        })
        // PATCH ENDS 
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()

/* , {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        value: 11
    })
} */