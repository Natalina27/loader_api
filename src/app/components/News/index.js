//React
import React from 'react';
import {Article} from '../Article';
//Hooks
import {useApiLoader} from './useApiLoader';
//Styles
import Styles from './styles.module.scss';

export const News = () => {
    const {db, isFetching} = useApiLoader();
     const articleJSX = isFetching ?
         'Загрузка данных...'
         : db.map(({created, ...props}) => (
          <Article key={created} {...props} />
    )) ;

    return (
        <section className={Styles.wrap}>
            <h3>News</h3>
            <div className={Styles.articles}>{articleJSX}</div>
        </section>
    );
};
