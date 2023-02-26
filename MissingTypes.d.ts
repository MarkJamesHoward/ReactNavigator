interface Route {
  path: string;
  component: React.FC;
}

interface Link {
  to: string;
  children: React.ReactNode;
}
