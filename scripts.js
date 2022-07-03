function calculator(){
    let action = prompt('Please select the operation you want to perform: i.e +, -, *, / \n + for addition \n - for subtraction \n * for multiplication \n / for division');
    let first_number = prompt('Enter the first number: ');
    let second_number = prompt('Enter the second number: ');

    if (action == '+'){
        sum = parseInt(first_number) + parseInt(second_number);
        alert(first_number + '+ ' + second_number + '= ' + sum);
    } else if(action == '-'){
        subtraction = parseInt(first_number) - parseInt(second_number);
        alert(first_number + '- ' + second_number + '= ' + subtraction);
    } else if(action == '*'){
        multiplication = parseInt(first_number) * parseInt(second_number);
        alert(first_number + '* ' + second_number + '= ' + multiplication);
    } else if(action == '/'){
        division = parseInt(first_number) / parseInt(second_number);
        alert(first_number + '/ ' + second_number + '= ' + division);
    } else{
        alert('Please select + or - or * or /. \n+ for addition \n - for subtraction \n * for multiplication \n / for division');
        calculator()
    }
}

calculator()
