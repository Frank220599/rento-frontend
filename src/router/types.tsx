export interface IRoute {
    path: string,
    exact: boolean,
    component: any,
    layout?: boolean;
    // subRoutes?: Array<IRoute>
}
