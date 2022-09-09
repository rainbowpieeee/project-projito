import { FC, ReactNode, useEffect } from "react"
import Breadcrumbs from "../breadcrumbs/breadcrumbs"
import Footer from "../footer/footer"
import Header from "../header/header"
import { dataAPI } from "../../services/api/data"
import { logRoles } from "@testing-library/react"

export interface LayoutProps  {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children } : LayoutProps) => {

  const {data} = dataAPI.useGetLayoutDataQuery();


  const headerdata = {
    logos:data?.logos,
    mainMenu: data?.main_menu
  }

  const footerdata = {
    logos:data?.logos,
    footerMenu:data?.footer_menu,
    footerLinks: data?.footer_links,
    footerSocial: data?.footer_social
  }

  



  return(
    <>
    {headerdata.logos && <Header {...headerdata} />}

      <Breadcrumbs />
        {children}
      <Footer {...footerdata} />
    </>
  )
}

export default Layout;
