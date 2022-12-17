function chessBoard(input) {

    let destination = input.shift()
    
    while(input[0] !== 'Travel'){
    if(input[0] == undefined || input[0] == ''){
        break
    }
    let command = input.shift().split(':')
    let name = command[0]
    let p1 = command[1]
    let p2 = command[2]
    
    if(name == 'Add Stop'){
    
    if(destination.length > 0 || destination.length > Number(p1) ){
       destination = destination.split('')
    destination.splice(Number(p1),0,p2.split(''))
    destination = destination.join(',').split(',')
    destination = destination.join('')
    console.log(destination);
    }
    
    
    }if(name == 'Remove Stop'){
        if(destination.length > 0 || destination.length > Number(p1) ){
            destination= destination.split('')
            p2++
            let sliced = destination.slice((p1),(p2))
            sliced = sliced.join('')
           destination= destination.join('')
           destination = destination.replace(sliced,'')
           
           console.log(destination);
        }
    
    }if(name == 'Switch'){
       
    if(destination.includes(p1)){
        destination = destination.replace(p1,p2)
    
        console.log(destination);}
    
    }
    
    
    }
    console.log(`Ready for world tour! Planned stops: ${destination}`);
    
    
    
    
    
    
    
    
    
    
    
    }
    