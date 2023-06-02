import React from "react";
import {Link,NavLink} from "react-router-dom";
import styles from './NavBar.module.css'
import title from '../../title.png';
// import 'boxicons'


export default function NavBar() {


    return (
        <div className={styles.allNavbar}>
          <div className={styles.navBar}>
      
          <img className={styles.titleImg} src={title} alt='Icono Teesa' />

      <NavLink to ="/home" className={({ isActive }) => isActive ? styles.active : styles.navLinks} >Inicio</NavLink>
       <NavLink to ="/contacto" className={({ isActive }) => isActive ? styles.active : styles.navLinks}>Contáctanos</NavLink>
               <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : styles.navLinks} >Nosotros</NavLink>
       <NavLink to ="/servicios" className={({ isActive }) => isActive ? styles.active : styles.navLinks}>Servicios</NavLink>
       <NavLink to ="/login" className={({ isActive }) => isActive ? styles.active : styles.navLinks} >Registrarse</NavLink>

            </div>
          <div className={styles.dependantBar}>
            <input className={styles.addForm}  type='search' placeholder="Buscar..."/>
            <Link  className={styles.buttonadd} to="/home"> <button type='submit' ><box-icon name='search-alt' color='#fbfef8' ></box-icon></button> </Link>
            </div>

        </div>
    );
}