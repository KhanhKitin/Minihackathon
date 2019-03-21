window.onload = () => {
    // find element
    
    const input1 = document.getElementById('player1');
    const input2 = document.getElementById('player2');
    const input3 = document.getElementById('player3');
    const input4 = document.getElementById('player4');
    const button = document.getElementById('button');
    // console.log(button);
    
    button.addEventListener('click', ()=>{
        // console.log(input1.value);
        // console.log(input2.value);
        // console.log(input3.value);
        // console.log(input4.value);
        $.ajax({
            url: '/',
            type: 'post',
            data: {player1: input1.value, player2: input2.value, player3: input3.value, player4: input4.value},
            success: (data) => {
                 console.log(data);
            },
            error: (error) => {
                console.log(error);
            },
        });
    });
};