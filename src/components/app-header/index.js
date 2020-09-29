import React, { memo } from 'react';
import { headerLinks } from '@/common/local-data';

import { NavLink } from 'react-router-dom';
// 组件库
import { Input } from 'antd';
// 图标库
import { SearchOutlined } from '@ant-design/icons';

// 引用组件
import {
  HeaderWarpper,
  ContentLeft,
  ContentRight
} from './style';


export default memo(function YFAppHeader() {
  // 导航栏便利数据
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link} >{item.title}</a>
    }
  }
  return (
    <HeaderWarpper>
      <div className='content wrap-v1'>
        {/* 导航栏便利 */}
        <ContentLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className='select-list'>
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item ">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </ContentLeft>
        <ContentRight>
          <Input placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined/>} className="search"/>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </ContentRight>
      </div>
      <div className='divider'></div>
    </HeaderWarpper>

  )
})
