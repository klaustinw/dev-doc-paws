import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import windowSize from 'react-window-size';

import Aux from "../../../../../../hoc/_Aux";
import NavIcon from "./../NavIcon";
import NavBadge from "./../NavBadge";
import * as actionTypes from "../../../../../../store/actions";

class NavItem extends Component {

    render() {
        let itemTitle = this.props.item.title;
        if (this.props.item.icon) {
            itemTitle = <span className="pcoded-mtext">{this.props.item.title}</span>;
        }

        let itemTarget = '';
        if (this.props.item.target) {
            itemTarget = '_blank';
        }

        let subContent;
        if (this.props.item.external) {
            subContent = (
                <a href={this.props.item.url} target='_blank' rel='noopener noreferrer'>
                    <NavIcon items={this.props.item} />
                    {itemTitle}
                    <NavBadge layout={this.props.layout} items={this.props.item} />
                </a>
            );
        } else {
            // 0i1 register page kalau masuk ke halaman selanjutnya dari base, menu akan tetap aktif
            // ganti case dan comparison base[2] sesuai nama dari page yang dibuat
            switch (this.props.item.url) {
                case "/transactions/online-consultations":
                    subContent = (<NavLink to={this.props.item.url} className="nav-link" exact={true} target={itemTarget} isActive={(match, location) => {
                        if (!match) { const base = location.pathname.split("/"); if (base[2] == "online-consultations") return true; else return false } else return true;
                    }}><NavIcon items={this.props.item} />{itemTitle}<NavBadge layout={this.props.layout} items={this.props.item} /></NavLink>
                    );
                    break;

                case "/transactions/online-bookings":
                    subContent = (<NavLink to={this.props.item.url} className="nav-link" exact={true} target={itemTarget} isActive={(match, location) => {
                        if (!match) { const base = location.pathname.split("/"); if (base[2] == "online-bookings") return true; else return false } else return true;
                    }}><NavIcon items={this.props.item} />{itemTitle}<NavBadge layout={this.props.layout} items={this.props.item} /></NavLink>
                    );
                    break;

                case "/transactions/articles":
                    subContent = (<NavLink to={this.props.item.url} className="nav-link" exact={true} target={itemTarget} isActive={(match, location) => {
                        if (!match) { const base = location.pathname.split("/"); if (base[2] == "articles") return true; else return false } else return true;
                    }}><NavIcon items={this.props.item} />{itemTitle}<NavBadge layout={this.props.layout} items={this.props.item} /></NavLink>
                    );
                    break;

                case "/transactions/homecares":
                    subContent = (<NavLink to={this.props.item.url} className="nav-link" exact={true} target={itemTarget} isActive={(match, location) => {
                        if (!match) { const base = location.pathname.split("/"); if (base[2] == "homecares") return true; else return false } else return true;
                    }}><NavIcon items={this.props.item} />{itemTitle}<NavBadge layout={this.props.layout} items={this.props.item} /></NavLink>
                    );
                    break;

                case "/masters/vendors":
                    subContent = (<NavLink to={this.props.item.url} className="nav-link" exact={true} target={itemTarget} isActive={(match, location) => {
                        if (!match) { const base = location.pathname.split("/"); if (base[2] == "vendors") return true; else return false } else return true;
                    }}><NavIcon items={this.props.item} />{itemTitle}<NavBadge layout={this.props.layout} items={this.props.item} /></NavLink>
                    );
                    break;

                case "/masters/categories":
                    subContent = (<NavLink to={this.props.item.url} className="nav-link" exact={true} target={itemTarget} isActive={(match, location) => {
                        if (!match) { const base = location.pathname.split("/"); if (base[2] == "categories") return true; else return false } else return true;
                    }}><NavIcon items={this.props.item} />{itemTitle}<NavBadge layout={this.props.layout} items={this.props.item} /></NavLink>
                    );
                    break;

                case "/masters/medical-treatments":
                    subContent = (<NavLink to={this.props.item.url} className="nav-link" exact={true} target={itemTarget} isActive={(match, location) => {
                        if (!match) { const base = location.pathname.split("/"); if (base[2] == "medical-treatments") return true; else return false } else return true;
                    }}><NavIcon items={this.props.item} />{itemTitle}<NavBadge layout={this.props.layout} items={this.props.item} /></NavLink>
                    );
                    break;

                case "/masters/users":
                    subContent = (<NavLink to={this.props.item.url} className="nav-link" exact={true} target={itemTarget} isActive={(match, location) => {
                        if (!match) { const base = location.pathname.split("/"); if (base[2] == "users") return true; else return false } else return true;
                    }}><NavIcon items={this.props.item} />{itemTitle}<NavBadge layout={this.props.layout} items={this.props.item} /></NavLink>
                    );
                    break;

                default:
                    subContent = (
                        <NavLink
                            to={this.props.item.url}
                            className="nav-link"
                            exact={true}>
                            <NavIcon items={this.props.item} />
                            {itemTitle}
                            <NavBadge layout={this.props.layout} items={this.props.item} />
                        </NavLink>
                    )
                    break;
            }
        }
        let mainContent = '';
        if (this.props.layout === 'horizontal') {
            mainContent = (
                <li onClick={this.props.onItemLeave}>{subContent}</li>
            );
        } else {
            if (this.props.windowWidth < 992) {
                mainContent = (
                    <li className={this.props.item.classes} onClick={this.props.onItemClick}>{subContent}</li>
                );
            } else {
                mainContent = (
                    <li className={this.props.item.classes}>{subContent}</li>
                );
            }
        }

        return (
            <Aux>
                {mainContent}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.layout,
        collapseMenu: state.collapseMenu
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onItemClick: () => dispatch({ type: actionTypes.COLLAPSE_MENU }),
        onItemLeave: () => dispatch({ type: actionTypes.NAV_CONTENT_LEAVE })
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(windowSize(NavItem)));
