/**
 * Created by Allan on 2017/6/1.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/* 这里就是一个静态页面 */
class ToperNav extends Component {
    render() {
        return(
            <div>
                <div className='panel panel-default hidden-xs hidden-sm'>
                    <div className='panel-body home-center'>
                        <div className="media">
                            <a className="media-left" href="#">
                                <img className='img-width-50' src='https://twemoji.b0.upaiyun.com/2/svg/1f381.svg' role="presentation" />
                            </a>
                            <div className="media-body text-center">
                                <div>
                                    Ruby China 官方
                                    <a href='https://gems.ruby-china.org' target='_blank'>RubyGems 镜像</a>
                                    、Ruby 镜像 正式上线!
                                </div>
                                <p>
                                    <code>gem source -a https://gems.ruby-china.org</code>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row hidden-sm hidden-xs'>
                    <div className='col-md-3'>
                        <div className="thumbnail">
                            <img className='margin-30' src="https://twemoji.b0.upaiyun.com/2/svg/1f381.svg" alt="blog.png" />
                            <div className="caption box-top-line">
                                <a href='#'>
                                    <div>
                                        Ruby 社区
                                        <span className='glyphicon glyphicon-arrow-right pull-right'></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="thumbnail">
                            <img className='margin-30' src="https://twemoji.b0.upaiyun.com/2/svg/1f381.svg" alt="v2ex.png" />
                            <div className="caption box-top-line">
                                <a href='#'>
                                    <div>
                                        技术文档
                                        <span className='glyphicon glyphicon-arrow-right pull-right'></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="thumbnail">
                            <img className='margin-30' src="https://twemoji.b0.upaiyun.com/2/svg/1f381.svg" alt="v2ex.png" />
                            <div className="caption box-top-line">
                                <a href='#'>
                                    <div>
                                        招聘与求职
                                        <span className='glyphicon glyphicon-arrow-right pull-right'></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="thumbnail">
                            <img className='margin-30' src="https://twemoji.b0.upaiyun.com/2/svg/1f381.svg" alt="v2ex.png" />
                            <div className="caption box-top-line">
                                <Link to='/topics?type=excellent'>
                                    <div>
                                        精华文章
                                        <span className='glyphicon glyphicon-arrow-right pull-right'></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ToperNav;