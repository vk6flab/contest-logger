/*
	Based on: https://www.thesitewizard.com/javascripts/change-style-sheets.shtml
*/

function switch_style ( css_title ) {
	Array.from(document.getElementsByTagName("link")).forEach(
		(link_tag) => {
			if ((link_tag.rel.indexOf( "stylesheet" ) != -1) && link_tag.title) {
				link_tag.disabled = true ;
				if (link_tag.title == css_title) {
					link_tag.disabled = false ;
				}
			}
			set_pref( 'style', css_title );
		}
	);
}

function set_style_from_pref() {
	var css_title = get_pref( 'style' );
	if (css_title.length) {
		switch_style( css_title );
		const menu = document.getElementById ('theme');
		menu.selectedIndex = [...menu.options].findIndex (option => option.text === css_title);
	}
}

function set_pref ( name, value ) {
	window.localStorage.setItem( name, JSON.stringify(value)) ;
}

function get_pref ( name ) {
	return JSON.parse(window.localStorage.getItem(name)) ;
}

function switchTheme(event) {
	var newTheme = this.options[this.selectedIndex].text;
	switch_style (newTheme) ;
}

set_style_from_pref();
