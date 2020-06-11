import React, {Component} from  'react';
import Header from '../../components/Header/index';
import {connect} from 'react-redux';
import {getHomeList} from './store/actions';

class Home extends Component {
  getList() {
    const {list} = this.props;
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }

  render() {
    return (
      <div>
        {this.getList()}
        <button onClick={() => {alert('click')}}>
          click
        </button>
      </div>
    )
  }

  // 在服务端渲染的时候不会执行
  componentDidMount() {
    // 如果首次进入的页面不是 /，服务端就不会获取数据放在store里
    if (!this.props.list.length) {
      this.props.getHomeList();
    }
  }
}

Home.loadData = (store) => {
  // 负责在服务端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList());
}

const mapStateToProps = state => ({
  list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(Home);