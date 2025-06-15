/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
		};
		this.inputRef = React.createRef();
		this.input2Ref = React.createRef();
		this.nav = React.createRef();
		this.navMenu = React.createRef();
	}
	toggleMenu = () => {
		if (!this.state.showMenu) {
			this.inputRef.current.classList.add("open");
			this.input2Ref.current.classList.add("open");
			this.nav.current.classList.add("open");
			this.navMenu.current.classList.add("open");
			this.setState({
				showMenu: true,
			});
			document.firstElementChild.classList.remove("animatedOut");
		} else {
			this.inputRef.current.classList.remove("open");
			this.input2Ref.current.classList.remove("open");
			this.nav.current.classList.remove("open");
			this.navMenu.current.classList.remove("open");
			this.setState({
				showMenu: false,
			});
		}
	};
	handleClick = (e) => {
		e.target.ownerDocument.firstElementChild.classList.add("animatedOut");
	};
	render() {
		return (
			<>
				<header>
					<div className="container">
						<div
							className="menu-btn"
							ref={this.inputRef}
							onClick={this.toggleMenu}>
							<span className="menu-btn-burger" ref={this.input2Ref}></span>
						</div>
						<nav className="navbar" ref={this.nav}>
							<div className="myPic"></div>
							<ul ref={this.navMenu}>
								<li>
									<Link to="/" className="active">
										Home
									</Link>
								</li>
								<li onClick={this.handleClick}>
									<Link to="/about">About</Link>
								</li>
								<li onClick={this.handleClick}>
									<Link to="/work">Work</Link>
								</li>
								<li onClick={this.handleClick}>
									<Link to="/contact">Contact Me</Link>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<main className="home-main">
					<div className="container">
						<div className="header-logo">
							<img
								src="https://res.cloudinary.com/dniyxgevz/image/upload/v1736842552/Black_And_Gold_Luxury_Floral_Wedding_Initial_Logo_2_ccsyw8.png"
								alt="header logo"
							/>
						</div>
						<div className="home">
							<div className="home-text line1">
								<h1 data-aos="fade-left" data-aos-delay="0">
									H
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="100">
									i
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="150">
									!
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="200">
									 &nbsp;
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="250">
									M
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="300">
									y&nbsp;
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="350">
									n
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="400">
									a
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="450">
									m
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="500">
									e&nbsp;
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="550">
									i
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="600">
									s
								</h1>
							</div>
							<div className="home-text line2">
								<h1 data-aos="fade-left" data-aos-delay="750">
									P
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="800">
									a
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="850">
									u
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="900">
									l&nbsp;
								</h1>
								<div className="home-text lastName">
									<h1 data-aos="fade-left" data-aos-delay="950">
										A
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1000">
										J
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1050">
										I
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1100">
										B
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1150">
										O
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1200">
										L
									</h1>
									<h1 data-aos="fade-left" data-aos-delay="1250">
										A
									</h1>
								</div>
							</div>
							<div className="home-text line3">
								<h1 data-aos="fade-left" data-aos-delay="1300">Agile</h1> &nbsp;
								<h1 data-aos="fade-left" data-aos-delay="1300">
									P
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1350">
									r
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1400">
									o
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1450">
									d
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1500">
									u
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1550">
									c
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1600">
									t
								</h1>
								&nbsp;
								<h1 data-aos="fade-left" data-aos-delay="1650">
									M
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1700">
									a
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1750">
									n
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1800">
									a
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1850">
									g
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1900">
									e
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="1950">
									r
								</h1>
								<h1 data-aos="fade-left" data-aos-delay="2000">
									.
								</h1>
							</div>
						</div>
                        <p className="mt-4" data-aos="fade" data-aos-delay="2100">
                      	Welcome to my portfolio page! 
                        </p>
                        <em data-aos="fade-up" data-aos-delay="2100">
                        "…I empower companies to launch intelligent, market-leading products that deliver real value"
                        </em>
						<div className="get-started">
							<Link to="/about" data-aos="fade" data-aos-delay="2500">
								Get Started <i className="fa fa-arrow-right"></i>
							</Link>
						</div>
						<div className="home-social">
							<a
								href="https://www.linkedin.com/in/paul-ajibola-85181930b/"
								target="_blank"
								rel="noopener noreferrer">
								<i
									data-aos="fade-down"
									data-aos-delay="200"
									className="fa fa-linkedin-square"
									aria-hidden="true"></i>
							</a>
							<a
							href="https://x.com/Product_Maven2?t=LBOrdx0ZZ_Un5gnAKlrYag&s=03"
							target="_blank"
							rel="noopener noreferrer">
							<i
								data-aos="fade-down"
								data-aos-delay="200"
								className="fa fa-twitter-square"
								aria-hidden="true"></i>
						</a>
						<a
							href="https://www.github.com/Paul-Ajibola/"
							target="_blank"
							rel="noopener noreferrer">
							<i
								data-aos="fade-down"
								data-aos-delay="200"
								className="fa fa-github-square"
								aria-hidden="true"></i>
						</a>
							<footer data-aos="fade-down" data-aos-delay="2700">
								&copy; Copyright 2025
							</footer>
						</div>
					</div>
				</main>
			</>
		);
	}
}
