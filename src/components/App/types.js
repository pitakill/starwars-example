// @flow
export type PeopleShape = {
    height: string,
    gender: string,
    name: string,
};

export type AppState = {
    people: Array<PeopleShape>,
};
