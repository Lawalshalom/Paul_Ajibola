/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Components/about.css";

export default class About extends Component {
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
			<section id="about">
				<header>
					<div className="container">
						<div
							className="menu-btn"
							ref={this.inputRef}
							onClick={this.toggleMenu}>
							<span className="menu-btn-burger" ref={this.input2Ref}></span>
						</div>
						<nav className="navbar" ref={this.nav}>
							<ul ref={this.navMenu}>
								<li onClick={this.handleClick}>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about" className="active">
										About
									</Link>
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
				<main className="about-main">
					<div className="container">
						<div className="header-logo">
							<img
								src="https://res.cloudinary.com/lawfirm1000/image/upload/v1729475073/paul_PORTRAIT_1_iz1div.jpg"
								alt="header logo"
							/>
						</div>
						<div className="about row">
							<div className="about-text col-lg-12 col-md-12 col-12">
								<div className="aboutPic" data-aos="fade-right"></div>
								<h2 data-splitting data-aos="fade-right" data-aos-delay="50">
									About <span>Me</span>
								</h2>
								<p data-aos="fade-right" data-aos-delay="100">
									Here's a few things about me:
								</p>
								<div className="bio">
									<h2 data-aos="fade-up" data-aos-delay="150">
										BIO
									</h2>
									<p data-aos="fade-up" data-aos-delay="250">
										{" "}
										I began my career through acquiring certifications from
										Product School and Great Learning Academy.
									</p>
									<p data-aos="fade-up" data-aos-delay="350">
										Well-organized person, problem solver, independent person
										with high attention to detail. Great flair for logical and
										analytical thinking, self-driven, plays chess, documents.
									</p>
									<p data-aos="fade-up" data-aos-delay="450">
										Able to effectively self-manage during independent projects,
										as well as collaborate in a team setting.
									</p>
								</div>

								<div className="bio">
									<h2 data-aos="fade-up" data-aos-delay="150">
										Skills
									</h2>
									<p data-aos="fade-up" data-aos-delay="250">
										My competencies lie in: Agile Methodologies, User Research,
										Market Analysis, User Experience, Figma design,
										Prioritization techniques, and SWOT analysis. I also enjoy
										solving complex problems and collaborating with
										cross-functional teams to deliver impactful solutions.
									</p>
									<p data-aos="fade-up" data-aos-delay="350">
										Tools: Linear, Jira, Notion.
									</p>
									<p data-aos="fade-up" data-aos-delay="450">
										Programming Language: HTML, CSS and Javascript (Intermediate
										proficiency).
									</p>
								</div>

								<div className="bio mb-5">
									<h2 data-aos="fade-up" data-aos-delay="150">
										Growth in HNG
									</h2>
									<p data-aos="fade-up" data-aos-delay="250">
										<a
											href="https://hng.tech/internship"
											rel="noopener noreferrer"
											target="_black">
											HNG Tech
										</a>{" "}
										exposed me to the practical side of Product Management.
										Through the carefully curated tasks, I have been able to
										hone my skills in crafting product development documents.
										The insightful contributions and corrections of mentors have
										also helped me understand the proper way to present the
										contents of these documents.
									</p>
									<p data-aos="fade-up" data-aos-delay="350">
										Additionally, the internship has improved my soft skills.
										Collaborating with a team of over 40 PMs, I have understood
										better the importance and practice of clear communication,
										leadership- without-authority, and teamwork. My eye for, and
										taste of designs have changed, and I better understand the
										necessity of customer prioritization for every product.
									</p>
									<p data-aos="fade-up" data-aos-delay="450">
										HNG accentuates in my mind the need to carry all concerned
										teams along in order to achieve consistency and accuracy in
										product delivery.
									</p>
								</div>
							</div>

						</div>
					</div>
					<div className="about-social">
						<a
							href="https://web.facebook.com/paul.ajibola.397"
							target="_blank"
							rel="noopener noreferrer">
							<i
								data-aos="fade-down"
								data-aos-delay="200"
								className="fa fa-facebook"
								aria-hidden="true"></i>
						</a>
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
					</div>
				</main>
			</section>
		);
	}
}
