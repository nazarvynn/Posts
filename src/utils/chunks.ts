export default function chunks(list: any, chunkSize: number) {
    let result = [];
    for (let i = 0; i < list.length; i += chunkSize) {
        result.push(list.slice(i, i + chunkSize));
    }
    return result;
}
