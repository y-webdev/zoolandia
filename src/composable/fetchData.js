import {ref} from 'vue';

const fetchData = () => {
    const data = ref({})
    const error = ref(null)

    const load = async () => {
        const response = await fetch(process.env.VUE_APP_API);

        try {
            if (!response.ok) {
                throw Error('No data available')
            }

            data.value = await response.json()
            console.log(data.value)

        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }

    }

    return {data, error, load}
}

export default fetchData;
