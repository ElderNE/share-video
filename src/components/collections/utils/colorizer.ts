export function colorizer(key:number):string {
    //any colors, looks like random function
    switch(true) {
        case (key%3===0):
            return "bg-regal-blue";
        case (key%5===0):
            return "bg-regal-green";
        case (key%7===0):
            return "bg-regal-gray";
        default:
            return "bg-regal-orange";
      }
}