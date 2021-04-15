import { useEffect, useMemo, useState } from 'react';
import { useMutation } from 'react-relay/hooks';

export default function useMutationData(query: any, inputData: any, id?: number) {
    const input = useMemo(() => inputData, [inputData]);
    const [data, setData] = useState(null);
    const [commit, isInFlight] = useMutation(query);

    useEffect(() => {
        input &&
            commit({
                variables: {
                    id,
                    input: {
                        ...input,
                    },
                },
                onCompleted(data) {
                    setData(data);
                },
            });
    }, [commit, id, input]);

    return {
        data,
        loading: isInFlight,
    };
}
