import DashboardModule from "@/modules/Dashboard";
import "@/styles/globals.css";
import "@/styles/icomoon.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { wrapper } from "@/store";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";
import cookie from "cookie";
import Providers from "@/providers";
import App from "next/app";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";

const proxima = localFont({
    src: [
        {
            path: "../../public/assets/fonts/ProximaNova-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/assets/fonts/ProximaNova-Semibold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/assets/fonts/ProximaNova-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/assets/fonts/ProximaNova-Regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-proxima",
});

function MyApp({ Component, pageProps, isAuthSSR }: AppProps) {
    // const { user, isAuth } = useSelector(authSelector);
    const isAuthenticated: boolean =
        typeof window === "undefined"
            ? isAuthSSR
            : Cookies.get("jwt") && Cookies.get("user")
            ? true
            : false;

    return (
        <Providers pageProps={...pageProps}>
            <main className={`${proxima.variable}  font-display bg-[#18191e]`}>
                {isAuthenticated ? (
                    <DashboardModule>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </DashboardModule>
                ) : (
                    <>
                        <Component {...pageProps} />
                    </>
                )}
            </main>
        </Providers>
    );
}

MyApp.getInitialProps = async (appContext) => {
    // Call your function here before rendering the app
    const cookies = cookie.parse(appContext.ctx.req?.headers.cookie || "");
    const appProps = await App.getInitialProps(appContext);
    const { jwt, user } = cookies;
    if (jwt && user) {
        return {
            ...appProps,
            isAuthSSR: true,
        };
    }
    return { ...appProps, isAuthSSR: false };
};
// MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async (context): Promise<PageProps> => {
//   const cookies = cookie.parse(context.ctx.req?.headers.cookie || '');
//   const { user, jwt } = cookies;
//   if (!user || !jwt) {
//       return {
//           pageProps: {}
//       };
//   }

//   store.dispatch(setUser(user));
//   store.dispatch(login(jwt));

//   const childrenGip = await App.getInitialProps(context);

//   return {
//       pageProps: {
//           // And you have to spread the children's GIP result into pageProps
//           ...childrenGip.pageProps
//           // id: 42,
//       }
//   };
// });

export default wrapper.withRedux(MyApp);
