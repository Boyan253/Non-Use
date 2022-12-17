function shopping(input){
    
let items = input.shift()
let name
let storage = []
let notepad = []
let commands = items.split('->');
while(items != 'Go Shopping'){

     name = commands[1]
let itemsofobject = commands[2]
if(commands[0] == 'Add'){
    if(storage[name] != undefined){
   if(storage.includes(itemsofobject)){
    return
   }
}
   notepad.push(itemsofobject)
storage.push({name:itemsofobject})
}
if(commands[0] == 'Important'){
    storage.push({name:itemsofobject})
if(notepad.includes(itemsofobject)){
    return
}
notepad.push(itemsofobject)
}if(commands[0] == 'Remove'){

delete storage[name]

}

items = input.shift()
}
let mappe = storage.map(r => {`${r.name}`
 break})

console.log([`${name}
${mappe.join('\n')}`].join(' ')) 

}


shopping(["Add->Grocery->Dried-fruit,Nuts,Lemons",
"Add->Market->Nuts,Juice",
"Important->Market->Snack",
"Remove->Market",
"Go Shopping"])
