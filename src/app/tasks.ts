export type Task = {
    id: number
    title: string
    status: boolean
}

export const tasks: Task[] = [
    {
        id: 1,
        title: 'Feed the cat',
        status: false
    },
    {
        id: 2,
        title: 'Feed the cat',
        status: false
    },
    {
        id: 3,
        title: 'Feed the cat',
        status: true
    },
    {
        id: 4,
        title: 'Feed the cat',
        status: false
    },
    {
        id: 5,
        title: 'Feed the cat',
        status: false
    },
]