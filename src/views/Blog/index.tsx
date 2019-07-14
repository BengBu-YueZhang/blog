import React from 'react';
import BlogAbstract from '../../components/BlogAbstract';
import Animate from '../../base/Animate';
import useLoadedEnd from '../../base/useLoadedEnd';

const AnimationQueue = Animate.AnimationQueue

const toStyle = {
  transform: `translateX(0)`
}

const fromStyle = {
  transform: `translateX(30%)`
}

const Blog: React.FC = () => {

  useLoadedEnd();

  return (
    <section>
      <AnimationQueue to={toStyle} from={fromStyle} duration={600} interval={200}>
        <div>
          <BlogAbstract/>
        </div>
        <div>
          <BlogAbstract/>
        </div>
        <div>
          <BlogAbstract />
        </div>
        <div>
          <BlogAbstract />
        </div>
        <div>
          <BlogAbstract />
        </div>
        <div>
          <BlogAbstract />
        </div>
        <div>
          <BlogAbstract />
        </div>
        <div>
          <BlogAbstract />
        </div>
        <div>
          <BlogAbstract />
        </div>
      </AnimationQueue>
    </section>
  )
}

export default Blog;
