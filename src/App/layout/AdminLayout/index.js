import React, { Component, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from "react-router-guards";
import { connect } from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import Loader from "../Loader";
import routes from "../../../routes";
import Aux from "../../../hoc/_Aux";
import * as actionTypes from "../../../store/actions";

import './app.scss';
import Loading from '../../components/Loading';

class AdminLayout extends Component {

	requireLogin = async (to, from, next) => {
		if (localStorage.getItem("token")) {
			next();
		} else next.redirect("/auth/signin-1");
	}

	fullScreenExitHandler = () => {
		if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
			this.props.onFullScreenExit();
		}
	};

	componentWillMount() {
		if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
			this.props.onComponentWillMount();
		}
	}

	mobileOutClickHandler() {
		if (this.props.windowWidth < 992 && this.props.collapseMenu) {
			this.props.onComponentWillMount();
		}
	}

	render() {

		/* full screen exit call */
		document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
		document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
		document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
		document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);

		const menu = routes.map((route, index) => {
			return (route.component) ? (
				<GuardedRoute
					key={index}
					path={route.path}
					exact={route.exact}
					name={route.name}
					render={props => (
						<route.component {...props} />
					)} />
			) : (null);
		});

		return (
			<Aux>
				<Fullscreen enabled={this.props.isFullScreen}>
					<Navigation />
					<NavBar />
					<div className="pcoded-main-container" onClick={() => this.mobileOutClickHandler}>
						<div className="pcoded-wrapper">
							<div className="pcoded-content">
								<div className="pcoded-inner-content">
									<Breadcrumb />
									<div className="main-body">
										<div className="page-wrapper">
											<Suspense fallback={<Loader />}>
												<GuardProvider guards={[this.requireLogin]} loading={Loading}>
													<Switch>
														{menu}
														<Redirect from="/" to={this.props.defaultPath} />
													</Switch>
												</GuardProvider>
											</Suspense>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Fullscreen>
			</Aux>
		);
	}
}

const mapStateToProps = state => {
	return {
		defaultPath: state.defaultPath,
		isFullScreen: state.isFullScreen,
		collapseMenu: state.collapseMenu,
		configBlock: state.configBlock,
		layout: state.layout
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onFullScreenExit: () => dispatch({ type: actionTypes.FULL_SCREEN_EXIT }),
		onComponentWillMount: () => dispatch({ type: actionTypes.COLLAPSE_MENU })
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(AdminLayout));