export const getIndexById: any = (arr: Array<{id: string}>, id: string) => arr.findIndex( (item: { id: string }) => item.id === id );