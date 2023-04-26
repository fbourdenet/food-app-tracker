export type Food =  {
    id?: number,
    icon?: string,
    name: string,
    energy: Energy,
    quantity?: number
}

type Energy = {
    unit: string,
    value: number
}