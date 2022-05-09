import React from 'react'
import { Carousel, Image } from 'antd'

const Home = () => {
  return (
    <div className="home">
      <div className="slide">
        <Carousel autoplay effect="fade">
          <div>
            <Image
              width={'100%'}
              height={600}
              // preview={false}
              src="https://images.unsplash.com/photo-1648073141651-c61c052d9079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
          <div>
            <Image
              width={'100%'}
              height={600}
              // preview={false}
              src="https://images.unsplash.com/photo-1651644515984-2b210c65125b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </div>
          <div>
            <Image
              width={'100%'}
              height={600}
              // preview={false}
              src="https://images.unsplash.com/photo-1651404452457-ce332063295b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Home
