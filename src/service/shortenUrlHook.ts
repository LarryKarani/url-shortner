import axios from "axios"

export const shortenUrlService =  async (link: string | null) => {

    const requestUrl = `https://api.shrtco.de/v2/shorten?url=${link}`
    const response = await axios.get(requestUrl, {
        headers: {
            Accept: "application/json",
        }
    })

    return response
}