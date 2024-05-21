import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Button.module.css';

const cx = classnames.bind(styles);

function Button ({ children, type = 'button', customStyle = {}, isDark = false, isPrimary = true }) {
  const className = cx({
    button: true,
    buttonPrimaryLight: isPrimary && !isDark,
    buttonPrimaryDark: isPrimary && isDark,
    buttonSecondary: !isPrimary,
  });
  
  return (<button type={type} style={customStyle} className={className}>{children}</button>);
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.string,
  customStyle: PropTypes.object,
  isDark: PropTypes.bool,
  isPrimary: PropTypes.bool,
};

function LinkButton ({ children, url, customStyle = {}, isDark = false, isPrimary = true}) {
  const className = cx({
    button: true,
    buttonPrimaryLight: isPrimary && !isDark,
    buttonPrimaryDark: isPrimary && isDark,
    buttonSecondary: !isPrimary,
  });

  return (<a href={url} style={customStyle} className={className}>{children}</a>)
}

LinkButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  url: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  isDark: PropTypes.bool,
  isPrimary: PropTypes.bool,
};

export {
  Button,
  LinkButton
}
