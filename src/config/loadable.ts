import Loadable from 'react-loadable';

export const Home = Loadable({
  loader: () => import('../views/Home'),
  loading: () => null
});

export const Blog = Loadable({
  loader: () => import('../views/Blog'),
  loading: () => null
});

export const Music = Loadable({
  loader: () => import('../views/Music'),
  loading: () => null
});

export const Login = Loadable({
  loader: () => import('../views/Login'),
  loading: () => null
})

export const Detail = Loadable({
  loader: () => import('../views/Detail'),
  loading: () => null
})

export const MessageBoard = Loadable({
  loader: () => import('../views/MessageBoard'),
  loading: () => null
})
