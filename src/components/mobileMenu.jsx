import React from "react"

export default function MobileMenu({ color = "white", size = 32 }) {
  const toggleMenu = () => {
    const menuItems = document.querySelector("#menuItems")

    if (!menuItems) return

    menuItems.style.display = menuItems.style.display === "block" ? "none" : "block"
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="button"
      tabIndex={0}
      onClick={toggleMenu}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          toggleMenu()
        }
      }}
      style={{ cursor: "pointer" }}
    >
      <path d="M4 18L20 18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 12L20 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 6L20 6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
