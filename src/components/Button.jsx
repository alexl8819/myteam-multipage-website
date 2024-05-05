import classnames from 'classnames/bind';

import styles from './Button.module.css';

const cx = classnames.bind(styles);

export function Button ({ children, type = 'button', customStyle = {}, isDark = false, isPrimary = true, isDisabled = false }) {
  const className = cx({
    button: true,
    buttonPrimaryLight: isPrimary && !isDark,
    buttonPrimaryDark: isPrimary && isDark,
    buttonSecondary: !isPrimary,
    buttonDisabled: isDisabled
  });
  
  return (<button type={type} style={customStyle} className={className} disabled={isDisabled}>{children}</button>);
}

export function LinkButton ({ children, url, customStyle = null, isDark = false, isPrimary = true, isDisabled = false}) {
  const className = cx({
    button: true,
    buttonPrimaryLight: isPrimary && !isDark,
    buttonPrimaryDark: isPrimary && isDark,
    buttonSecondary: !isPrimary,
    buttonDisabled: isDisabled
  });

  return (<a href={url} style={customStyle} className={className} disabled={isDisabled}>{children}</a>)
}
