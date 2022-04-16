type TsidebarContext = {
    id: number,
    title: string,
    link: string
}

export const sidebarContext: TsidebarContext[] = [
    {id: 0, title: 'home', link: '/home'},
    {id: 1, title: 'explore', link: '/explore'},
    {id: 2, title: 'notifications', link: '/notifications'},
    {id: 3, title: 'messages', link: '/messages'},
    {id: 4, title: 'bookmarks', link: '/bookmarks'},
    {id: 5, title: 'lists', link: '/lists'},
    {id: 6, title: 'profile', link: '/profile'},
]