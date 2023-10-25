const b = null
const a = b
// ниже до просмотра гайда
// чисто по памяти с c#
switch(a = b) {
    case true: {
        console.log('YEAAA');
        break
    }

    case false: {
        console.log('NO ITS NOT')
        break
    }

    default: {
        console.log('POSOSI');
    }
}