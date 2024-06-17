export const validationLink = (link:string):boolean => {
    const regex = /youtu/;
    //Check the string; if it consists of "youtu", return false
    return !regex.test(link)
}