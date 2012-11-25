function NavAcc(container, target) {
	this.container = container;
	this.target = target;

	this.subm = this.container.find(this.target).hide().prev().addClass('with-submenu').on('click', function(e) {
		$(this).next('ul').slideToggle('fast').toggleClass('open').siblings('ul:visible').slideUp('fast');

		$(this).toggleClass('active');

		$(this).siblings('a').removeClass('active');

		e.preventDefault()
	})
}