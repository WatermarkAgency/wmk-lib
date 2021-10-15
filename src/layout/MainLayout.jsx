import * as React from 'react'
import PropTypes from 'prop-types'
import { FlexSpacer } from './FlexSpacer'
import { wmkClass } from '../logic'

export const MainLayout = ({ children, Header, Footer, className }) => {
  const HeaderJSX = Header
  const FooterJSX = Footer
  return (
    <div
      className={wmkClass('wrap', 'layout')}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <HeaderJSX />
      <main className={wmkClass('main', 'layout', className)}>{children}</main>
      <FlexSpacer />
      <FooterJSX />
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  Header: PropTypes.func,
  Footer: PropTypes.func
}

MainLayout.defaultProps = {
  Header: () => <div>Pass Header JSX</div>,
  Footer: () => <div>Pass Footer JSX</div>
}
