import React from 'react'
import { Layout } from 'antd'
import { 
    BrowserRouter as Router, 
    Switch,
    Route, 
    Link
} from 'react-router-dom'
import Header from '@/components/header/index'
import Footer from '@/components/footer/index'
import Home from '@/pages/home/index'
import Read from '@/pages/read/index'
import Mood from '@/pages/mood/index'
import NoMatch from '@/pages/error/index'

const { Content } = Layout

class App extends React.Component {
    render() {
        return (
            <Router>
            	<Layout>
      				<Header></Header>
      				<Content className='container'>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/read" component={Read} />
                            <Route path="/mood" component={Mood} /> 
                            <Route component={NoMatch} />
                        </Switch>       
                    </Content>
      				<Footer></Footer>
    			</Layout>
      		</Router>
        );
    }
}

export default App