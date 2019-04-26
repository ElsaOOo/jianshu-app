import { fromJS } from 'immutable';
import bannerImg from 'static/image/banner.jpg';

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
