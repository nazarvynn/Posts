import { useCallback, useState } from 'react';
import { useMutation } from 'react-relay/hooks';

export default function useMutationData(query: any) {
    const [data, setData] = useState(null);
    const [commit, isInFlight] = useMutation(query);

    const mutate = useCallback(
        ({ id, input }: { id?: string; input?: any }) => {
            const idObj = id ? { id } : {};
            const inputObj = input ? { input: { ...input } } : {};
            const variables = {
                ...idObj,
                ...inputObj,
            };
            return new Promise((resolve, reject) => {
                commit({
                    variables,
                    onCompleted(data) {
                        setData(data);
                        resolve(data);
                    },
                    onError(error) {
                        reject(error);
                    },
                });
            });
        },
        [commit]
    );
    return {
        mutate,
        data,
        loading: isInFlight,
    };
}
