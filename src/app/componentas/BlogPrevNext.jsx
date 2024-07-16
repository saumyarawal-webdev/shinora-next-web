import React from 'react'

function BlogPrevNext() {
  return (
   <>
   <div className="clearfix mt-40">
            <a href="#" className="blog-item-more left">
              <i className="mi-chevron-left" />
              &nbsp;Prev post
            </a>
            <a href="blog-2.html" className="blog-item-more right">
              Next post&nbsp;
              <i className="mi-chevron-right" />
            </a>
          </div>
   </>
  )
}

export default BlogPrevNext