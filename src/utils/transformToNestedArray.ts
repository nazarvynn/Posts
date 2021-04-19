export default function transformToNestedArray(data: any, skipFields: string[] = []): any[][] {
    if (!data?.length) {
        return [];
    }
    return data.reduce((memo: any, item: any, index: number) => {
        let row: any[] = [index + 1];
        for (let [key, value] of Object.entries(item)) {
            if (skipFields.indexOf(key) === -1) {
                row.push(value);
            }
        }
        memo.push(row);
        return memo;
    }, []);
}
