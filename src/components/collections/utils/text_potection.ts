export const textProtection = (text:string) => {
    const limit = 200; //linit symbols
    return text.replaceAll(">","&gt;").replaceAll("<","&lt;").trim().slice( 0, limit) //remove whitespaces and protect from XSS
}