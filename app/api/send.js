

export const sendContactForm = async (data) =>
    fetch("/api/hello", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })


export const sendDataForStripe = async (data) =>
    fetch("/api/stripe", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })
// export const checkPromo = async (code) => {
//     const promos = await sanityFetch(promosQuery); 
//         const matchedPromo = promos.find((v) => v.name === code);
//         if (matchedVoucher) {
//             return true
//         } else {
//             return false
//         }
// }
    