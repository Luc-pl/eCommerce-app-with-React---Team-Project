import React from 'react';
import styles from './FilterByCategories.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FilterByCategories = () => {
  return (
    <>
      <h4 className='m-2'>FILTER BY CATEGORIES</h4>
      <div className={'col my-3 ' + styles.container}>
        <div
          className={'row d-flex justify-content-between mx-auto ' + styles.lineWrapper}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.icon}
          ></FontAwesomeIcon>
          <p className={styles.text}>Furniture</p>
          <p className={'ml-auto ' + styles.number}>3</p>
        </div>
        <div
          className={'row d-flex justify-content-between mx-auto ' + styles.lineWrapper}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.icon}
          ></FontAwesomeIcon>
          <p className={styles.text}>Sofa</p>
          <p className={'ml-auto ' + styles.number}>4</p>
        </div>
        <div
          className={'row d-flex justify-content-between mx-auto ' + styles.lineWrapper}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.icon}
          ></FontAwesomeIcon>
          <p className={styles.text}>Chair</p>
          <p className={'ml-auto ' + styles.number}>5</p>
        </div>
        <div
          className={'row d-flex justify-content-between mx-auto ' + styles.lineWrapper}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.icon}
          ></FontAwesomeIcon>
          <p className={styles.text}>Table</p>
          <p className={'ml-auto ' + styles.number}>7</p>
        </div>
        <div
          className={'row d-flex justify-content-between mx-auto ' + styles.lineWrapper}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.icon}
          ></FontAwesomeIcon>
          <p className={styles.text}>Bedroom</p>
          <p className={'ml-auto ' + styles.number}>4</p>
        </div>
        <div
          className={'row d-flex justify-content-between mx-auto ' + styles.lineWrapper}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.icon}
          ></FontAwesomeIcon>
          <p className={styles.text}>Furniture</p>
          <p className={'ml-auto ' + styles.number}>2</p>
        </div>
      </div>
    </>
  );
};

export default FilterByCategories;
