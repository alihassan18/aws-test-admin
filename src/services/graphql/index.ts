import { ApolloClient, InMemoryCache, NormalizedCacheObject, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}`
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = Cookies.get('jwt');

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const createApolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        addTypename: false,
        typePolicies: {
            feeds: {
                keyFields: ['_id']
            }
        }
    }),
    connectToDevTools: true
});

export const initializeApollo = () => {
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') {
        return createApolloClient;
    }

    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = createApolloClient;
    }

    return apolloClient;
};
