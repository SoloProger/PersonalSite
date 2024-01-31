import { useState } from 'react';

const LatestPost = () => {
  const [flag, setFlag] = useState(true);

  return (
    <section className='latest-post-wrapper'>
      {flag ? <sup>Soon</sup> : ''}
      <div className='latest-post-navbar'>
        <h2>Последние посты</h2>
        <a href='#'>Посмотреть все</a>
      </div>
      <div className='latest-posts'>
        {/* Post */}
        <div className='latest-post'>
          <h2>Новый раздел на сайте</h2>
          <div className='post-subtitle'>
            <h4 className='first'>12 Мар 2022</h4>
            <h4>Разработка</h4>
          </div>
          <p>
            Новый раздел, где автор будет делиться мыслями, советами и
            интересными фактами. Пока раздел не доступен, т.к находиться в
            разработке.
          </p>
        </div>
        {/* EndPost */}
        {/* Post */}
        <div className='latest-post'>
          <h2>Новый раздел на сайте</h2>
          <div className='post-subtitle'>
            <h4 className='first'>12 Мар 2022</h4>
            <h4>Разработка</h4>
          </div>
          <p>
            Новый раздел, где автор будет делиться мыслями, советами и
            интересными фактами. Пока раздел не доступен, т.к находиться в
            разработке.
          </p>
        </div>
        {/* EndPost */}
      </div>
    </section>
  );
};

export default LatestPost;
