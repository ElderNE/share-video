export function nameReducer(name:string):string {
    if(name)
        return (name.length>2)?name[0].toUpperCase() + name[1].toUpperCase():name[0].toUpperCase()
    else
        return "IM"
}