const handleImage = (data, setImageUrl) => {
    if(data.profilePicture != ''){
        const img = `data:image/png;base64,${data.profilePicture}`;
        setImageUrl(img)
    }else{
        setImageUrl('./src/assets/avatar.png')
    }
}

const sendRequest = (url, setUserData, handleImage, setImageUrl) => {
    try{
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            setUserData(data)
            handleImage(data, setImageUrl)
        })
    }catch(error){
        console.log(error)
    }
}

export const fetchUserData = (setUserData, setImageUrl, userId, username) => {
    if(userId){
        sendRequest(`${import.meta.env.VITE_BASE_URL}/user/${userId}`, setUserData, handleImage, setImageUrl)
    }else{
        sendRequest(`${import.meta.env.VITE_BASE_URL}/${username}`, setUserData, handleImage, setImageUrl)
    }
}
