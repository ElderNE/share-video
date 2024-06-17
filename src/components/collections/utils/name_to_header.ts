export function nameToHeader(name:string, text:string):string {
    //Transfrom name to header: "name's text"
    if(name)
        return name[0].toUpperCase() + name.slice(1) + "'s " + text
    else
        return text
}