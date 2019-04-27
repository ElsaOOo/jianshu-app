import { fromJS } from 'immutable';
import bannerImg from 'static/image/banner.jpg';
import articleItemPic from 'static/image/topicItem.jpeg';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title :'社会热点',
      url: bannerImg
    },
    {
      id: 2,
      title :'社会热点2',
      url: bannerImg
    },
    {
      id: 3,
      title :'社会热点3',
      url: bannerImg
    },
    {
      id: 4,
      title :'社会热点4',
      url: bannerImg
    }
  ],
  articleBreifList: [
    {
      id: 1,
      title: '4款高质量小众APP，每款都很黑科技，请大家低调使用',
      desc: '1、优零影视 这是一款非常黑科技的影视播放器，功能非常的强大，采用了X5内核播放设备，可解析三网视频资源。拥有电影、电视、综艺、动漫以及电视直播...',
      url: articleItemPic
    },
    {
      id: 2,
      title: '4款高质量小众APP，每款都很黑科技，请大家低调使用',
      desc: '1、优零影视 这是一款非常黑科技的影视播放器，功能非常的强大，采用了X5内核播放设备，可解析三网视频资源。拥有电影、电视、综艺、动漫以及电视直播...',
      url: articleItemPic
    },
    {
      id: 3,
      title: '4款高质量小众APP，每款都很黑科技，请大家低调使用',
      desc: '1、优零影视 这是一款非常黑科技的影视播放器，功能非常的强大，采用了X5内核播放设备，可解析三网视频资源。拥有电影、电视、综艺、动漫以及电视直播...',
      url: articleItemPic
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
  //   case value:
      
  //     break;
  
    default:
      return state;
  }
}
