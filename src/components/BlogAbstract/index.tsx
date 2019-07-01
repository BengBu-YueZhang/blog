import React from 'react';
import './index.scss';

export interface IBlogAbstract {
  title?: string;
  subtitle?: string;
  createdTime?: string;
}

const prefixClass = 'yy-blog-abstract';

const BlogAbstract: React.FC<IBlogAbstract> = (props) => {
  const { title, subtitle, createdTime }  = props

  return (
    <div className={`${prefixClass}`}>
      <h1 className={`${prefixClass}-title`}>新世纪福音战士</h1>
      <p className={`${prefixClass}-created`}>2019-07-01</p>
      <p className={`${prefixClass}-subtitle`}>这是一个关于成长的故事</p>
    </div>
  )
}

BlogAbstract.defaultProps = {
  title: '',
  subtitle: '',
  createdTime: ''
}

export default BlogAbstract;