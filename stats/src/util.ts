export const dateStringToDate = (dateString: string): Date =>{
    const dateSplit = dateString.split('/')
        .map((item: string): number => {
            return parseInt(item);
        })

    return new Date(dateSplit[2], dateSplit[1]-1, dateSplit[0])
    // return new Date(parseInt(dateSplit[2]), parseInt(dateSplit[1])-1, parseInt(dateSplit[0]))
}