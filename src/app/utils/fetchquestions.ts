const API_KEY = process.env.API_KEY

const fetchQuestionMessage = async (technology: string, seniority: string) => {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'X-API-KEY': `${API_KEY}`
        },
        body: JSON.stringify({
            enable_google_results: 'true',
            enable_memory: false,
            input_text: `act as an interviewer for a ${technology} ${seniority} position ask me 1 question without introduction and wait for my answer for make other`
        })
    }

    try {
        const res = await fetch(
            'https://api.writesonic.com/v2/business/content/chatsonic?engine=premium',
            options
        )
        const data = await res.json()
        return data.message
    } catch (err) {
        console.log(err)
        return ''
    }
}

export { fetchQuestionMessage }
