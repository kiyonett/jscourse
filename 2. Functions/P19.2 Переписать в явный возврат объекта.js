const newPost = (post, addedAt = Date()) => {
    return {...post,
    addedAt} // правильный явный возврат
    // тело функции тоже должно быть явным
}

const firstPost = {
    id: '1',
    author: 'yori'
}

console.table(newPost(firstPost))