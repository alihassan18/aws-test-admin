import React from "react";
import ImageComponent from "@/components/ImageComponent";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/Button";
import { useDispatch } from "react-redux";
import { logout } from "@/store/reducers/auth.reducer";
import { useApolloClient } from "@apollo/client";

const navigation = [
    { name: "User", href: "/user", icon: "icon-user", current: false },
    {
        name: "Products",
        href: "/collections",
        icon: "icon-collections",
        current: false,
    },
    { name: "Reviews", href: "/reports", icon: "icon-reposts", current: false },

];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
    const apolloClient = useApolloClient();

    const logoutFunc = () => {
        dispatch(logout({}));
        router.push("/");
        apolloClient.resetStore();
    };
    const dispatch = useDispatch();
    const router = useRouter();
    return (
        <div className="flex grow flex-col overflow-y-auto bg-[#181818] px-2">
            <div className="flex py-5 shrink-0 items-center">
                {/* <ImageComponent
          src="/assets/images/logo.svg"
          fill
          figClassName="w-[8.4rem] h-[3rem] mx-auto"
          className="object-contain"
          alt=""
        /> */}
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="space-y-1">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href}>
                                <p
                                    className={classNames(
                                        router.pathname === item.href
                                            ? "bg-primary text-black"
                                            : "text-white hover:text-black hover:bg-primary",
                                        "group flex gap-x-3 rounded-md p-2 text-base leading-6"
                                    )}
                                >
                                    <i
                                        className={classNames(
                                            router.pathname === item.href
                                                ? "text-black"
                                                : "text-secondary group-hover:text-black",
                                            "text-lg shrink-0 flex items-center justify-center",
                                            item.icon
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={() => logoutFunc()}
                    className="-mx-2 p-4 border-t border-danger mt-auto bg-red-500/5 cursor-pointer"
                >
                    <p className="text-danger font-medium">Logout</p>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
