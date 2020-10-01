import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { RcmHeaderWrapper } from './style';
const YFThemeHeaderRCM = memo(function (props) {
  const { title, keywords } = props
  return (
    <RcmHeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <span className="link">{item}</span>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </RcmHeaderWrapper>
  )
})
YFThemeHeaderRCM.defaultProps = {
  keywords: []
}
YFThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
};

export default YFThemeHeaderRCM;