import css from 'styled-jsx/css'

export default css.global`
html, body {
	height: 100%;
}

.navbar.fixed-top {
	box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.15);
}

.nav-custom-bottom {
	box-shadow: 0px -5px 10px 5px rgba(0, 0, 0, 0.15);
}

.nav-custom-bottom .nav-tabs {
	background-color: var(--dark);
	
}

.nav-custom-bottom .nav-tabs .nav-item {
	border-radius: 0;
}

.nav-custom-bottom .nav-tabs .nav-item.active {
	background-color: transparent;
	border-top: solid 2px var(--green);
}

.tab-content.main {
	margin-top: 55px;
	margin-bottom: 44px;
}

#tickers {
	overflow: auto;
}
.ticker-header {
	font-weight: 700;
	border: none;
}
.list-group-item {
	position: relative;
	font-size: 16px;
    padding-top: 25px;
    padding-bottom: 25px;
    margin: 2px 0;
    border: none;
}
.list-group-item:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: block;
	background: linear-gradient(-90deg, #0f2027, #203a43, #073642);
}
.search {
	position: relative;
	margin-top: -38px;
    transition: all .4s ease;
}
.search.open {
	margin-top: 0;
}
.search .clear {
	text-decoration: none !important;
	position: absolute;
	right: 10px;
    top: -6px;
    font-size: 36px;
    color: #073642;
}

.main > div { display: none }
.main[data-selected="1"] > div:nth-child(1) { display: block !important }
.main[data-selected="2"] > div:nth-child(2) { display: block !important }
.main[data-selected="3"] > div:nth-child(3) { display: block !important }

.nav-custom-bottom[data-selected="1"] .nav-item:nth-child(1) { border-top: solid 2px var(--green) }
.nav-custom-bottom[data-selected="2"] .nav-item:nth-child(2) { border-top: solid 2px var(--green) }
.nav-custom-bottom[data-selected="3"] .nav-item:nth-child(3) { border-top: solid 2px var(--green) }

`;