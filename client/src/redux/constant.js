export const BASE_URL = import.meta.env.VITE_APP_BASE_URL

// auth
export const SIGNUP_API = "/auth/register"
export const LOGIN_API = "/auth/login"
export const CHANGE_PASSWORD_API = "/auth/changePassword"

// profle
export const GET_ALL_USERS_API = "profile/getAllUsers"
export const GET_SINGLE_USER_API = "profile/getSingleUser"
export const UPDATE_USERNAME_API = "profile/updateUsername"
export const UPDATE_PROFILE_API= "profile/updateProfile"
export const DELETE_USER_API = "profile/deleteProfile"

// products
export const GET_LOW_TO_HIGH_PRICE_PRODUCT_API = "/products/price-low"
export const GET_HIGH_TO_LOW_PRICE_PRODUCT_API = "/products/price-high"
export const PRODUCT_URL_API = "/products"
export const GET_SINGLE_PRODUCT_API = "/products"
export const CREATE_PRODUCT_API = "/products/create"
export const UPDATE_PRODUCT_API = "/products/update"
export const DELETE_PRODUCT_API = "/products"

// review
export const GET_SINGLE_REVIEW_API = "/review"
export const GET_REVIEW_API = "/review"
export const CREATE_REVIEW_API = "/review/create"
export const DELETE_REVIEW_API = "/review/delete"
export const ADD_TO_CART_API = "/cart"

// orders
export const CREATE_ORDER_API = "/order"
export const GET_ORDER_API = "/order"
export const GET_ORDER_ADMIN_API = "/order/admin"
export const GET_SINGLE_ORDER_API = "/order"
export const UPDATE_ORDER_API = "/order"
export const DELETE_ORDER_API = "/order"

// category
export const GET_CATEGORY_API = "/category"


// brands 
export const GET_BRANDS_API = "/brand"
export const CREATE_BRANDS_API = "/brand/create"
export const DELETE_BRANDS_API = "/brand/delete"