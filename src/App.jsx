import React, { Component } from 'react'
import { Layout } from 'antd'
import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'

const {
    Content,
} = Layout

class App extends Component {
    render() {
        return (
            <div className='App'>
            	<Layout>
      				<HeaderNav></HeaderNav>
      				<Content>Content</Content>
      				<FooterNav></FooterNav>
    			</Layout>
      		</div>
        );
    }
}

export default App