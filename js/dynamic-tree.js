function NavAcc(container, target) {

	this.container = container;
	this.target    = target;

		this.container
			.find(this.target)
				.hide()
			.prev()
				.addClass('with-submenu')
				.on('click', function(e) {

									$(this).toggleClass('active')
									.next()
										.slideToggle('fast')
										.toggleClass('open')
									e.preventDefault()
									})
	}