import Header from './Header'
import { CSSProperties } from 'react'

const layoutHeaderStyle: CSSProperties = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const layoutPageStyle: CSSProperties = {
  marginTop: 40,
  marginRight: 130,
  marginLeft: 130,
  padding: 20,
  border: '1px solid #DDD'
}

interface IProps {
  children: any,
  title: String
}

const Layout = (props: IProps) => (
  <div>
    <div style={layoutHeaderStyle}>
      <Header />
      <h1>{props.title}</h1>
    </div>
    <div style={layoutPageStyle}>
      {props.children}
    </div>
  </div>
)

export default Layout