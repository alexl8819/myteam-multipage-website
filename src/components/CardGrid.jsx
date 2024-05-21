import PropTypes from 'prop-types';

import styles from './CardGrid.module.css';

import Card from './Card';

function CardGrid ({ items }) {
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
