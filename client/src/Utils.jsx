export const isImage = (file) => {
    return file && file['type'].split('/')[0] === 'image';
} 

export const loadComponent = (data, loadingComponent, readyComponent) => {
    if(data == '' || data == undefined || data == null || data == []){
        return(loadingComponent)
    }else{
        return(readyComponent)
    }
}

export const getStatusText = (status, def) => {
    if(def === undefined){def = status}
    switch (status) {
        case 'err':
            return 'Error occured. Please try again.'
        case 'err-name':
            return 'There is no user with this username.'
        case 'err-same':
            return 'This user already exists.'
        case 'err-pass':
            return 'Wrong Password'
        case 'loading':
            return ''
        case 'success':
            return 'Registered successfully. Please login.'
        case "fill":
            return "Please fill all the blanks."
        case "filetype": 
            return "File type is not supported."
        case "filesize":
            return "Image must be under 1.5mb."
        case 'init':
            return ''
        default:
            return def
    }
}



// ! FETCH LEADERBOARD

export const fetchLeaderboard = (limit, setter) => {
    try {
        fetch(`${import.meta.env.VITE_BASE_URL}/leaderboard/${limit}`)
        .then(response => response.json())
        .then(data => setter(data))
    } catch (error) {
        return error
    }
}