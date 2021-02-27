import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import config from '../../../../config';
import navigation from '../../../../menu-items';
import DEMO from "../../../../store/constant";
import Aux from "../../../../hoc/_Aux";

class Breadcrumb extends Component {
    state = {
        main: [],
        item: []
    };

    componentDidMount() {
        (navigation.items).map((item, index) => {
            if (item.type && item.type === 'group') {
                this.getCollapse(item, index);
            }
            return false;
        });
    };

    componentWillReceiveProps = () => {
        (navigation.items).map((item, index) => {
            if (item.type && item.type === 'group') {
                this.getCollapse(item);
            }
            return false;
        });
    };

    getCollapse = (item) => {
        if (item.children) {
            (item.children).filter(collapse => {
                if (collapse.type && collapse.type === 'collapse') {
                    this.getCollapse(collapse,);
                } else if (collapse.type && collapse.type === 'item') {
                    if (document.location.pathname === config.basename + collapse.url) {
                        this.setState({ item: collapse, main: item });
                    }
                }
                return false;
            });
        }
    };

    render() {
        let main, item;
        let breadcrumb = '';
        let title = 'Welcome';
        if (this.state.main && this.state.main.type === 'collapse') {
            main = (
                <li className="breadcrumb-item">
                    <a href={DEMO.BLANK_LINK}>{this.state.main.title}</a>
                </li>
            );
        }

        if (this.state.item && this.state.item.type === 'item') {
            title = this.state.item.title;
            item = (
                <li className="breadcrumb-item">
                    <a href={DEMO.BLANK_LINK}>{title}</a>
                </li>
            );

            if (this.state.item.breadcrumbs !== false) {
                String.prototype.capitalize = function () {
                    return this.replace(/\w\S*/g, function (txt) {
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        }
                    );
                }
                var arr = document.location.pathname != "/" ? document.location.pathname.split("/") : ["n", "n", "n"];
                if (!arr[2]) arr.push("n"); arr.shift(); title = arr.shift(); title = title.capitalize(); var identifier = arr.pop();
                (/\d/.test(identifier)) // https://thumbs.gfycat.com/LavishIllfatedDwarfmongoose-size_restricted.gif
                    ? identifier = ""
                    : arr.push(identifier)
                breadcrumb = (
                    <div className="page-header">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="page-header-title">
                                        <h5 className="m-b-10">{title}</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/dashboard"><i className="feather icon-home" /></Link>
                                        </li>
                                        { // MAKESHIFT >> butuh perubahan <<
                                            arr.map((page_name) => {
                                                return (
                                                    <li className="breadcrumb-item" key={page_name}>
                                                        <a onClick={e => {e.preventDefault();this.props.history.goBack();}}>{page_name.replace("-", " ").capitalize()}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                        {/* {main}
                                        {item} */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }

        }

        document.title = title + ' | Doc Paws';

        return (
            <Aux>
                {breadcrumb}
            </Aux>
        );
    }
}

// const mapStateToProps = state => {
//     const title = state.breadcrumbPageTitle;
//     return { title };
// } // this connecting to store will require every component to dispatch their own title page

export default withRouter(Breadcrumb);