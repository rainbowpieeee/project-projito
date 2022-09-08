



export const HeaderNavItem = (linkData:any) => {




  return (

  )
}


link.page_slug ? (
  <Link
    to={link.page_slug}
    className={headerNavStyles.menu__link}
  >
    {" "}
    {link.title}
  </Link>
) : (
  <a
    href={link.url}
    className={headerNavStyles.menu__link}
    target="_blank"
  >
    {link.title}
  </a>
);
})}
<HeaderDropdown
visible={dropDownVisible}
desktop={desktop}
setDropDownVisible={setDropDownVisible}
closeMenu={closeMenu}
/>



<li
className={headerNavStyles.menu__item}
onMouseEnter={() => setDropDownVisible(true)}
onMouseLeave={() => setDropDownVisible(false)}
>
<Link to="/" className={headerNavStyles.menu__link} onClick={closeMenu}>
  О&nbsp;проекте
</Link>
</li>