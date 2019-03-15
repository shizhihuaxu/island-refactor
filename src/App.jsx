import React from 'react'
import { Layout } from 'antd'
import HeaderNav from '@/components/header/index'
import FooterNav from '@/components/footer/index'

const { Content } = Layout

class App extends React.Component {
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