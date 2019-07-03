import Loadable from 'react-loadable';

function loading() {
  return null;
}

export const Home = Loadable({
  loader: () => import('../views/Home'),
  loading
});

export const Blog = Loadable({
  loader: () => import('../views/Blog'),
  loading
});

export const Music = Loadable({
  loader: () => import('../views/Music'),
  loading
});

export const Login = Loadable({
  loader: () => import('../views/Login'),
  loading
})

export const Detail = Loadable({
  loader: () => import('../views/Detail'),
  loading
})

export const MessageBoard = Loadable({
  loader: () => import('../views/MessageBoard'),
  loading
})

export const About = Loadable({
  loader: () => import('../views/About'),
  loading
})
