import React, { useEffect } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "@/services/graphql";
import { ThemeProvider } from "next-themes";
import NiceModal from "@ebay/nice-modal-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../store/selectors";
import { logout } from "../store/reducers/auth.reducer";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AppProps } from "next/app";

export const NORMALIZE_ROYALTIES = process.env.NEXT_PUBLIC_NORMALIZE_ROYALTIES
    ? process.env.NEXT_PUBLIC_NORMALIZE_ROYALTIES === "true"
    : false;

const Providers = ({
    children,
}: {
    children: React.ReactNode;
    pageProps: AppProps;
}) => {
    const baseUrl = process.env.NEXT_PUBLIC_HOST_URL;

    const dispatch = useDispatch();
    const { user, jwt: access_token } = useSelector(authSelector);

    useEffect(() => {
        if (access_token) {
            const decoded = jwt.decode(access_token) as JwtPayload;
            const currentTime = Date.now() / 1000;

            if (decoded?.exp && decoded?.exp < currentTime) {
                dispatch(logout());
            }
        }
    }, []);

    return (
        <>
            <ApolloProvider client={initializeApollo()}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <NiceModal.Provider>{children}</NiceModal.Provider>
                </ThemeProvider>
                <ToastContainer />
            </ApolloProvider>
        </>
    );
};
export default Providers;
