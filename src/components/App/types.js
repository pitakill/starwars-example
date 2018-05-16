// @flow
export type PeopleShape = {
    height: string,
    gender: string,
    name: string,
};

export type AppProps = {
    salutation: string,
};

export type AppState = {
    people: Array<PeopleShape>,
};
