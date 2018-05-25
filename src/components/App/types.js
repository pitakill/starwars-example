// @flow
export type ApiCallShape = {
    height: string,
    gender: string,
    name: string,
};

export type AppProps = {
    salutation?: string,
    increment: Function,
    decrement: Function,
    fetch: Function,
    apiCall: Array<ApiCallShape>,
};
