import PropTypes from 'prop-types';
import {
  useWindowWidth
} from '@react-hook/window-size';

import styles from './CardGrid.module.css';

import Card from './Card';

function CardGrid ({ items }) {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.cardGrid}>
      { 
        items.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            title={item.title}
            avatar={item.avatar}
            quote={item.quote}
            opened={ (index === items.length - 2) && (windowWidth >= 768 && windowWidth < 1440) || (index === items.length - 1) && (windowWidth < 768 || windowWidth >= 1440) }
          />
        ))
      }
    </div>
  );
}

CardGrid.propTypes = {
  items: PropTypes.array.isRequired
};

export default CardGrid;
