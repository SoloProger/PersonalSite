export interface CustomRoute {
  path: string;
  component: () => JSX.Element;
  exact: boolean;
}
