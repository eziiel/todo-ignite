import style from "./header.module.css"
import LogoTodo from "../assets/logo.svg"

export default function Header () {
  return (
    <header className={style.header}>
      <img className={style.logoImg} src={LogoTodo} alt="logo to-do rocket" />
      <span className={style.spanLogo}>to</span>
      <span className={style.spanLogo}>do</span>
    </header>
  )
}