// import { PropTypes as MobxPropTypes } from 'mobx-react';
import classNames                     from 'classnames';
import moment                         from 'moment';
import PropTypes                      from 'prop-types';
import React                          from 'react';
import { connect }                    from '../../../Stores/connect';
import { localize }                   from '../../../../_common/localize';

const PortfolioDrawer = ({ is_portfolio_drawer_on, toggleDrawer }) => (
    <div className={classNames('portfolio-drawer', {
        'portfolio-drawer--open': is_portfolio_drawer_on,
    })}>
        <div className='portfolio-drawer__header'>
            <span className='portfolio-drawer__icon-main' />
            <span>{localize('Portfolio Quick Menu')}</span>
            <a
                href='javascript:;'
                className='portfolio-drawer__icon-close'
                onClick={toggleDrawer}
            />
        </div>
        <div className='portfolio-drawer__body'>
            content here
        </div>
    </div>
);

PortfolioDrawer.propTypes = {
    is_portfolio_drawer_on: PropTypes.bool,
    toggleDrawer          : PropTypes.func,
};

export default connect(
    ({ ui }) => ({
        is_portfolio_drawer_on: ui.is_portfolio_drawer_on,
        toggleDrawer          : ui.togglePortfolioDrawer,
    })
)(PortfolioDrawer);
