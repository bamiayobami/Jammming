
const fetchList = async (searchInput: string, filter: string) => {
    const url = 'searchInput + filter';

    try {
            const response = await fetch(url);

            if(response.ok) {
                // process data
                const jsonResponse = await response.json();
                // process data

                console.log(url); // success testing ?

                //return data;
            }
    } catch (error) {
        console.log('Network is down! \n', error)
    }
}

export default fetchList;