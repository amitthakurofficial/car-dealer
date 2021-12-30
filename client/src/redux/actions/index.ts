const authAction = {
    // LOGIN:'LOGIN',
    auth: value => {
        console.log('ddddddddddddd',value)
        return {
            type:'LOGIN',
            payload:value.data
        }
    }
};

export default authAction;