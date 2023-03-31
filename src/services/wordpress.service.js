export default {
    getAbout() {
        return fetch("http://localhost/index.php/wp-json/wp/v2/pages/9", {
        // return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/get-user`, {
            headers: {
                "authorization":null
            }
        })
        .then(res => res.json())
    },
    getMenu() {
        return fetch("http://localhost/index.php/wp-json/menus/V2/header", {
        // return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/get-user`, {
            headers: {
                "authorization":null
            }
        })
        .then(res => res.json())
    }
}