export const isImage = (file) => {
    return file && file['type'].split('/')[0] === 'image';
} 

