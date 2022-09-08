import { FC, ReactNode, useEffect } from "react"
import Breadcrumbs from "../breadcrumbs/breadcrumbs"
import Footer from "../footer/footer"
import Header from "../header/header"
import { dataAPI } from "../../services/api/data"

export interface LayoutProps  {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children } : LayoutProps) => {

  const data: any = dataAPI.useGetLayoutDataQuery();


  const headerdata = {
    logos:data.data?.logos,
    mainMenu: data.data?.main_menu
  }

  



  return(
    <>
    {headerdata.logos && <Header {...headerdata} />}

      <Breadcrumbs />
        {children}
      <Footer />
    </>
  )
}

export default Layout;
