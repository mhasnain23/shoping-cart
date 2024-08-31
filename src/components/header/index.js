'use client';

import Link from "next/link"
import { Button } from "../ui/button"
import { loginAction, logoutAction } from "@/actions"


const Header = ({ getSession }) => {

    console.log(getSession);


    async function handleOauthLoginAction() {
        await loginAction()
    }

    async function handleOauthSignoutAction() {
        await logoutAction()
    }

    return (
        <header className="flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center justify-between gap-5 w-full">
                <Link href={"/"} className="text-lg font-bold text-gray-800">Shopping Cart</Link>
            </div>
            <ul className="flex gap-6 items-center justify-center mr-8">
                <li className="text-lg font-semibold">
                    <Link href={"/"}>Product</Link>
                </li>
                <li className="text-lg font-semibold">
                    <Link href={"/cart"}>Cart</Link>
                </li>
            </ul>
            <div className="flex space-x-2 items-center">
                <form action={getSession?.user ? handleOauthSignoutAction : handleOauthLoginAction}>
                    <Button type="submit">
                        {getSession?.user ? "Logout" : "Login"}
                    </Button>
                </form>
            </div>
        </header>
    )
}

export default Header