import AuthContext from './AuthContext';
import { useProvideAuth } from './hooks';

export default function ProvideAuth({ children }: { children: any }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
