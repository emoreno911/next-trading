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
	margin-top: -2px;
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

.navIcon {
	width: 26px;
  vertical-align: text-top;
  margin-right: 5px;
}

.main > div { display: none }
.main[data-selected="1"] > div:nth-child(1) { display: block }
.main[data-selected="2"] > div:nth-child(2) { display: block }
.main[data-selected="3"] > div:nth-child(3) { display: block }

@media (min-width: 768px) {

	.nav-custom-bottom {
		display: none;
	}

	.main > div { 
		display: block !important; 
		margin-left: 40%; 
	}

	.main > div:nth-child(1) {
		width: 40%;
		position: fixed;
		margin: 0;
		height: calc(100% - 56px);
		overflow: auto;
		box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
	}
}

@media (min-width: 1200px) {
	.main > div { 
		margin-left: 30%; 
	}
	.main > div:nth-child(1) { 
		width: 30%;
	}
}

.nav-custom-bottom[data-selected="1"] .nav-item:nth-child(1) { border-top: solid 2px var(--green) }
.nav-custom-bottom[data-selected="2"] .nav-item:nth-child(2) { border-top: solid 2px var(--green) }
.nav-custom-bottom[data-selected="3"] .nav-item:nth-child(3) { border-top: solid 2px var(--green) }


*::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: rgba(255,255,255,0.3);
}

*::-webkit-scrollbar
{
	width: 6px;
	background-color: rgba(255,255,255,0.3);
}

*::-webkit-scrollbar-thumb
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: rgba(0,0,0,.5);
}

`;