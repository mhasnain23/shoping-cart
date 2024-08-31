'use server';

import { signIn, signOut } from "@/auth";

// get all products

export async function fetchAllProducts() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/products', {
            method: 'GET',
            cache: "no-store",
        });
        const data = await apiResponse.json();

        return {
            success: true,
            data: data?.products,
        }


    } catch (e) {
        console.log(e);
        return {
            success: false,
            message: "Something went wrong! please try again",
        }
    }
}


export async function fetchProductDetails(currentProductID) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/products/${currentProductID}`, {
            method: 'GET',
            cache: "no-store",
        });
        const data = await apiResponse.json();

        return data;


    } catch (e) {
        console.log(e);
        return {
            success: false,
            message: "Something went wrong! please try again",
        }
    }
}


export async function loginAction() {
    await signIn("github")
}

export async function logoutAction() {
    await signOut();
}