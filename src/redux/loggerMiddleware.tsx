export const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    console.group(action.type);
    console.info('Previous State:', store.getState());
    console.info('Action:', action);
    const result = next(action);
    console.info('Next State:', store.getState());
    console.groupEnd();
    return result;
};
