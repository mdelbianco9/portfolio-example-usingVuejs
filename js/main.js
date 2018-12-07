

const home = {
	template: `<section class="container">
					<div class="row justify-content-around mt-5 hero">
						<h1 class="header">Lets</h1>
						<h1 class="header pt-4">Get</h1>
						<h1 class="header pt-5">Coding</h1>
					</div>
				</section>`
}

const resume = {
	template: `	<section class="container">
					<div class="row text-center">
						<img class="resume" src="img/vueportfolio.png">
					</div>
				</section>`
}

const portfolio = {
	template: `<section class="container">
					<div class="row">
						<div class="center">
							<a href="https://mdelbianco9.github.io/TodoApplication/" target="_blank"><img class="p-item img-responsive" src="img/img-1.jpg"></a>
							<a href="http://perpetual-route.surge.sh/" target="_blank"><img class="p-item img-responsive" src="img/img-2.jpg"></a>
							<a href="https://southeastpathology.com/" target="_blank"><img class="p-item img-responsive" src="img/img-3.jpg"></a>
							<a href="http://sfdogparlour.com/" target="_blank"><img class="p-item img-responsive" src="img/img-4.jpg"></a>
							<a href="http://small-mint.surge.sh/" target="_blank"><img class="p-item img-responsive" src="img/img-5.jpg"></a>
							<a href="https://mdelbianco9.github.io/Bookly/" target="_blank"><img class="p-item img-responsive" src="img/img-6.jpg"></a>
						</div>
					</div>
				</section>`
}

const contact = {
	template: `<section class="container mt-5">
					<div class="row">
						<img class="circle" src="img/profile.jpeg">
						<p class="w-50 bio">San Francisco native with a passion for learning and traveling. I attended the University of Nevada, Reno, then worked in Sacramento as a chemical engineer for 2 years before moving back to the Bay Area. Following my interests in Engineering, Design, and Technology, have lead me to pursue Frontend Development and UX Design. I feel a purpose when having the ability to influence a persons life with positivity through technology and communication. My ambition is fueled by this concept and I'm looking for an opportunity to fulfill that purpose.
						</p>
					</div>
					<div class="row skills justify-content-around">
						<h1 class="skills-header">Skills ---------></h1>
						<ul class="skills-list">
							<li>JavaScript</li>
							<li>Vue.js</li>
							<li>JQuery</li>
							<li>API usage</li>
							<li>HTML & CSS</li>
							<li>BootStrap</li>
						</ul>
					</div>
					<div class="row pt-5 myform">
						<form class="m-auto w-50 text-center">
							<h2 class="contact">Contact Me</h2>
						  <div class="form-group">
						    <input type="email" class="form-control contact" placeholder="Whats your name?">
						  </div>
						  <div class="form-group">
						    <input type="email" class="form-control contact" placeholder="Please enter your email address">
						  </div>
						  <div class="form-group">
						    <textarea type="password" class="form-control contact" placeholder="What would you like to know?"></textarea>
						  </div>
						  <button type="submit" class="btn btn-success contact">Submit</button>
						</form>
					</div>
				</section>`
}

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: home
		},
		{
			path: '/resume',
			component: resume
		},
		{
			path: '/portfolio',
			component: portfolio
		},
		{
			path: '/contact',
			component: contact
		},
	]
})



new Vue({
	router,
	el: '#app',
	data: {

	},

	methods: {

	}
}).$mount('#app')