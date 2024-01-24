import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { AppProps } from 'next/app';

const withAuth = (WrappedComponent) => {
    const RequireAuth = (props: AppProps) => {
        const router = useRouter();
        // const user = useSelector((state: any) => state.auth.user);
        const user = Cookies.get('user');

        useEffect(() => {
            if (!user) {
                router.push({
                    pathname: '/',
                    query: { from: router.pathname }
                });
            }
        }, [user, router]);

        return <WrappedComponent {...props} />;
    };

    // Copy over all static methods and properties from the original component
    Object.assign(RequireAuth, WrappedComponent);

    // Set a nice display name for the new component
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    RequireAuth.displayName = `withAuth(${displayName})`;

    return RequireAuth;
};

export default withAuth;
