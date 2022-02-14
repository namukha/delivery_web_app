const getFoodAPI = async () => {
    return await fetch ("http://52.221.191.153/api/foods", {
        method: "GET",
        headers: {
            "Content-Type": "application/json", 
        },
    })
}

const basketItem = async () => {
    return await fetch ("http://52.221.191.153/api/foods", {
        method: "POST"
    })
}

export const foodServices = {
    getFoodAPI,
}