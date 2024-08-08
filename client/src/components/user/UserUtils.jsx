
// ! USER DATA

export const handleImage = (data) => {
    if(data.profilePicture != ''){
        const img = `data:image/png;base64,${data.profilePicture}`;
        return img
    }else{
        return './src/assets/avatar.png'
    }
}

const sendRequest = (url, setUserData, handleImage, setImageUrl) => {
    try{
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            setUserData(data)
            // handleImage(data, setImageUrl)
            setImageUrl(handleImage(data))
        })
    }catch(error){
        console.log(error)
    }
}

export const fetchUserData = (setUserData, setImageUrl, userId, username) => {
    if(userId){
        sendRequest(`${import.meta.env.VITE_BASE_URL}/user/${userId}`, setUserData, handleImage, setImageUrl)
    }else{
        sendRequest(`${import.meta.env.VITE_BASE_URL}/user/username/${username}`, setUserData, handleImage, setImageUrl)
    }
}

// ! USER LEVEL

const levelData = (level, color, current, next) => {
    return {
        level: level,
        color: color,
        nextLevelPoints: next,
        currentLevelPoints: current
    }
}

const levels = [levelData('Trainee', '#D3D3D3',0 , 200), 
    levelData('Junior', '#ADD8E6', 200, 500),
    levelData('Middle', '#90EE90', 500, 2000),
    levelData('Senior', '#FFD700', 2000, 5000),
    levelData('Expert', '#FFA07A', 5000, 10000),
    levelData('Sensei', '#FFD700', null, null)
]

const pointsArr = [0, 200, 500, 2000, 5000, 10000]

const getLevelData = (pts) => {
    if(pts || pts === 0){
        if(pts < pointsArr[1]){
            return levels[0]
        }else if(pts < pointsArr[2]){
            return levels[1]
        }else if(pts < pointsArr[3]){
            return levels[2]
        }else if(pts < pointsArr[4]){
            return levels[3]
        }else if(pts < pointsArr[5]){
            return levels[4]
        }else{
            return levels[5]
        }
    }else{
        return ''
    }
}


export const Level = (pts) => {
    const {level, color, nextLevelPoints, currentLevelPoints} = getLevelData(pts)
    return {
        currentLevelPoints: currentLevelPoints,
        points: pts,
        nextLevelPoints: nextLevelPoints,
        label: level,
        color: color,
    }
}

console.log(Level(0))