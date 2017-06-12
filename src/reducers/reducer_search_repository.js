const response = [
    {
        title: 'repo1'
    },
    {
        title: 'repo2'
    },
    {
        title: 'repo3'
    },
    {
        title: 'repo4'
    },
    {
        title: 'repo5'
    },
    {
        title: 'repo6'
    },
    {
        title: 'repo7'
    },
    {
        title: 'repo8'
    },
    {
        title: 'repo9'
    }
];

export default function (state = null, action) {

    switch (action.type) {
        case 'REPOSITORY_SEARCHED':
            return response.filter(r => r.title.indexOf(action.payload) > -1);
        default:
            return response;
    }

    return state;
}

