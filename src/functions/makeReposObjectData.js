export default function makeObjectData(userName, repos, setDatas) {
    return new Promise(function (resolve, reject) {
        resolve({
            'userName': userName,
            'repos': repos
        })
    })
}
