export default interface IRoute{
    path: string
    exact?: boolean
    component: any
    props?: any
    childern?: IRoute[]
}