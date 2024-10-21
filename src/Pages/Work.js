/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Components/work.css";

export default class Work extends Component {
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
			<div>
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
								<li onClick={this.handleClick}>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/work" className="active">
										Work
									</Link>
								</li>
								<li onClick={this.handleClick}>
									<Link to="/about">About</Link>
								</li>
								<li onClick={this.handleClick}>
									<Link to="/contact">Contact Me</Link>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<main>
					<div className="container">
						<div className="header-logo">
							<img
								src="https://res.cloudinary.com/lawfirm1000/image/upload/v1729475073/paul_PORTRAIT_1_iz1div.jpg"
								alt="header logo"
							/>
						</div>
					</div>
					<div className="container skills-text">
						<div className="row section-1">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="header">
									<h1>
										My <span>Background</span>
									</h1>
								</div>
								<p>
									As a bludgeoning product manager, I began my career through
									acquiring certifications from Product School and Great
									Learning Academy.
								</p>
								<p>
									{" "}
									I currently hold an internship position at{" "}
									<a
										href="https://hng.tech/internship"
										rel="noopener noreferrer"
										target="_black">
										HNG Tech
									</a>
									, where I work closely with a very large and diverse team,
									which consists of developers, designers, data analysts, and
									marketers. Presently, the teams are cohesively working on the
									development of Delve—a language learning AI game that teaches
									users new languages in a fun and immersive environment, via
									simulations of real life scenarios.{" "}
								</p>
								<p>
									I collaborated with my PM team in the creation of a PRD
									(Product requirement document) and FRD (Functional requirement
									document) for the boilerplate. I also actively work with the
									group to craft tickets for the developers and designers of the
									MVP, while at the same time monitoring the progress of the
									project across other teams.
								</p>
							</div>
						</div>
						{/* <div className="site-cont">
                    <p>I build web and mobile apps that are:</p>
                    <div className="row site-div">
                        <div className="col-lg-6 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-6 site">
                                    <div className="hexagon">
                                        <i className='bx bx-rocket' ></i>
                                    </div>
                                    <div className="site-text">
                                        <h3><strong>Fast</strong></h3>
                                        <p>Fast load times and lag free interaction are my highest priority.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6 site">
                                    <div className="hexagon">
                                        <i className='bx bxs-devices' ></i>
                                    </div>
                                    <div className="site-text">
                                        <h3><strong>Responsive</strong></h3>
                                        <p>My layouts work on any device, big or small.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-6 site">
                                    <div className="hexagon">
                                        <i className='bx bx-bulb' ></i>
                                    </div>
                                    <div className="site-text">
                                        <h3><strong>Intuitive</strong></h3>
                                        <p>Strong preference for easy to use and intuitive UI/UX.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6 site">
                                    <div className="hexagon">
                                        <i className='bx bx-move bx-tada' ></i>
                                    </div>
                                    <div className="site-text">
                                        <h3><strong>Dynamic</strong></h3>
                                        <p>Websites don't have to be static, I love making pages come to life.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
						<div className="project">
							<h1>
								PR<span>OJE</span>CTS
							</h1>
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="img/Project1.jpg" alt="project" />
											<div className="project-links">
												<a
													href="https://docs.google.com/document/d/1APi72rHVx6yPqDQBGUmOnZVQ1tpiZ6syVOL24Snqfk8/edit"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Open Document
												</a>
											</div>
										</div>
										<h3>
											<strong>
												Market Intelligence Report and Business Model for
												Language Learning AI Game.
											</strong>
										</h3>
										<p>
											This official document contains information about the
											market analysis of the language learning
										</p>
										<p>
											I single handedly researched and documented the findings
											in this document.
										</p>
										<p className="tech">
											<strong>Tools:</strong>
											<button>Google Doc</button>
											<button>Google Ad</button>
											<button>Search engine (Google, Google Scholar)</button>
											<button>Canva</button>
										</p>
									</div>
								</div>

								<hr />

								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<div className="project-img">
											<img src="img/Project2.png" alt="project" />
											<div className="project-links">
												<a
													href="https://docs.google.com/document/d/1zZZzDh1FiU4aXX2rmMweVEp6F_XQoYyQkd8avI1xsDw/edit#heading=h.d21dts5g3pnf"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Open Document
												</a>
											</div>
										</div>
										<h3>
											<strong>Boilerplate Development.</strong>
										</h3>
										<p>
											This project involved the development of a boilerplate.
											The purpose of this project was to create a scaffold that
											would subsequently support the development of a MVP. The
											link above contains a comprehensive documentation of all
											the feature specifications for the development of the
											boilerplate.
										</p>
										<p>
											I worked on the <b>campaign page</b> and{" "}
											<b>forget password</b> features in the document. In
											general, I was an active member of a team of over 40 PMs.
											I constantly contributed to review product designs, and
											create tickets for backend and frontend developers.
										</p>
										<p className="tech">
											<strong>Tools:</strong>
											<button>Google Doc</button>
											<button>Search engine (Google, Google Scholar)</button>
										</p>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="project-item">
										<h3>
											<strong>Minimum Viable Product (MVP)</strong>
										</h3>
										<div className="project-img">
											<img src="img/Project4.jpg" alt="project" />
											<div className="project-links">
												<a
													href="https://docs.google.com/document/d/1BBiJaKBNGWtk8hWOf1czqfcT31GpXf2VOA-D5-KU2NA/edit#heading=h.9vzcf3jlo9bk"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Open Document
												</a>
											</div>
										</div>
										<p>
											This project is ongoing, and involves the development and
											deployment of the MVP of the language learning AI
											game—Delve. Playing an active role in a team of over 40
											PMs, I assisted in the crafting of the PRD and Developer’s
											tickets for the MVP.
											<br />
											The Product Requirement Documentation (PRD) of the product
											contains the blueprint that outlines the features, goals,
											and specifications of our product.
										</p>

										<p>
											The spreadsheet above contains information on the ticket ID,
											title, description, purpose/user stories, requirements and
											acceptance criteria of every frontend and backend feature
											to be implemented in the MVP (minimum viable product) of
											Delve.
										</p>

										<div className="project-img">
											<img src="img/Project3.jpg" alt="project" />
											<div className="project-links">
												<a
													href="https://docs.google.com/document/d/1BBiJaKBNGWtk8hWOf1czqfcT31GpXf2VOA-D5-KU2NA/edit#heading=h.9vzcf3jlo9bk"
													title="visit project"
													target="_blank"
													rel="noopener noreferrer">
													Open Document
												</a>
											</div>
										</div>

										<p className="mt-4">
											I worked on the{" "}
											<b>key feature and functionality section</b> of PRD and
											modified the introductory portion of the document. I also
											collaboratively worked with a mini-group of three people
											on the curation of the backend and frontend tickets for
											the <b>landing page, contact us page, privacy policy</b>{" "}
											and <b>waitlist</b> pages.
										</p>
										<p className="tech">
											<strong>Tools:</strong>
											<button>Google Doc</button>
											<button>Google Spreadsheet</button>
											<button>Search engine (Google, Google Scholar)</button>
											<button>Figma</button>
											<button>Canva</button>
											<button>Linear</button>
										</p>
									</div>
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
			</div>
		);
	}
}
