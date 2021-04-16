import { useCallback, useState } from 'react';
import { useMutation } from 'react-relay/hooks';

export default function useMutationData(query: any) {
    const [data, setData] = useState(null);
    const [commit, isInFlight] = useMutation(query);

    const mutate = useCallback(
        (inputData: any, id?: string) => {
            const updateId = id ? { id } : {};
            const variables = {
                ...updateId,
                input: {
                    ...inputData,
                },
            };
            commit({
                variables,
                onCompleted(data) {
                    setData(data);
                },
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
