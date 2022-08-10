import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect} from "react";

export const NavBar = () => {

    const [ active, setActive ] = useState('home');
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){    
                setScrolled = true;
            }else{
                setScrolled = false;
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActive(value);   
    }


    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="home">
                    <img src={''} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar">
                        <Nav.Link href="#home" 
                                  className={active === 'home' ? 'active-navbar-link' : 'navbar-link'}
                                  onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" 
                                  className={active === 'skills' ? 'active-navbar-link' : 'navbar-link'}
                                  onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" 
                                  className={active === 'projects' ? 'active-navbar-link' : 'navbar-link'}
                                  onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <button className="vvd" onClick={() =>{console.log("conect")}}><span>Let's connect</span></button>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}