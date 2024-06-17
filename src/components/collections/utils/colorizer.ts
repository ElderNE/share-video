export function colorizer(key:number):string {
    ///You could choose any custom colors. Function Looks like random color.
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