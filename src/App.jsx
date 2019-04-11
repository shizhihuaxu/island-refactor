import React from 'react'
import { Layout } from 'antd'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import routes from '@/router/index'
import Header from '@/components/header'
import Footer from '@/components/footer'
import NoMatch from '@/pages/error'

const { Content } = Layout

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Header/>
                    <Content className='container'>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                  key={index}
                                  path={route.path}
                                  exact={route.exact}
                                  component={route.component}
                                />
                            ))}
                            <Route component={NoMatch} />
                        </Switch>       
                    </Content>
                    <Footer/>
                </Layout>
            </Router>
        );
    }
}

export default App