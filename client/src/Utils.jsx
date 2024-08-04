export const isImage = (file) => {
    return file && file['type'].split('/')[0] === 'image';
} 

export const loadComponent = (data, loadingComponent, readyComponent) => {
    if(data == '' || data == undefined || data == null){
        return(loadingComponent)
    }else{
        return(readyComponent)
    }
}