// не по курсу, чисто от себя чтобы разобраться

const newPost = (post, writtenAt = Date(), userDevice) => {
    return{...defPost,
    writtenAt,
    userDevice: 'PC'}
} // явный возврат

defPost = {
    author: 'user',
    id: 0
}

console.table(newPost(defPost))