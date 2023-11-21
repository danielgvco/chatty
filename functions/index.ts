export type MyFunctionsType = {
    [key: string]: (args: Record<string, unknown>) => Promise<any>;
};

export { get_current_weather } from './get_current_weather';
export * from './dbfunctions';