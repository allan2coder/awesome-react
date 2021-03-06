export const BASIC_URL = 'https://ruby-china.org/api/v3'
export const TOPICS = 'TOPICS'
export const TOPIC = 'TOPIC'

export const TEST_ACTION = 'TEST_ACTION';
export const TEST_ACTION2 = 'TEST_ACTION2';

const received = (type, json) => {
  switch (type) {
    case 'TOPICS':
      return {
        type: type,
        results: json.topics
      }
    case 'TOPIC':
      return {
        type: type,
        results: {
          replies: json.replies,
          topic: json.topic
        }
      }
    default:
      return {}
  }
}

//  创建一个被绑定的action创建函数来自动dispatch
export const fetchTopics = options => (dispatch) => {
  // const type ='TOPICS'
  let url = `${BASIC_URL}/topics`
  let node = ''

  if (options && options.node_id){
    node = `node_id=${options.node_id}`
  }

  if (options) {
    url = `${BASIC_URL}/topics?${node}&limit=${options.limit||20}&type=${options.type||'last_actived'}&offset=${options.offset||0}`
  }

  return fetch(url)
    .then(
        response => response.json()
    ).then(
        json => dispatch(
            received('TOPICS', json)
        )
    )
}

export const fetchTopic = id => dispatch => {
  // const type = 'TOPIC'
  const results = {'topic': {}, 'replies': []};

  fetch(`${BASIC_URL}/topics/${id}`)
  .then(
      response => response.json()
  ).then((json) => {

    results.topic = json.topic

    fetch(`${BASIC_URL}/topics/${id}/replies`)
      .then(
          response => response.json()
      ).then((json) => {
        results.replies = json.replies
        dispatch(
            received('TOPIC', results)
        )
      })
  })
}
