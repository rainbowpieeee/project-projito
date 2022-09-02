import { FC, ReactNode } from "react"
import Breadcrumbs from "../breadcrumbs/breadcrumbs"
import Footer from "../footer/footer"
import Header from "../header/header"

export interface LayoutProps  {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children } : LayoutProps) => {

  return(
    <>
      <Header />

      <Breadcrumbs />
        {children}
      <Footer />
    </>
  )
}

export default Layout;
