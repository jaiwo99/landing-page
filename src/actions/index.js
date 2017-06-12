export function search(term) {
    return {
        type: 'REPOSITORY_SEARCHED',
        payload: term
    };
}