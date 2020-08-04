import React from 'react';
import clx from 'classnames';
import {useArticle} from './useArticle';

import Styles from './styles.module.scss';

export const Article = (props) => {
    const {id, isConfirmed, isSelected, title, description, hidden} = props;
    const {isArticleVisible, setVisible} = useArticle(hidden);

    const confirmedJSX = isConfirmed && <i> Новость подтверждена !</i>;

    const articleCLX = clx({
        [Styles.article]: true,
        [Styles.selected]: isSelected
    });

    const showArticle = () => {
        setVisible(true);
    }

    const articleJSX = isArticleVisible && (
        <div key={id} className={articleCLX}>
            <h4>{title}</h4>
            <p>{description}</p>
            {confirmedJSX}
        </div>
    );

    const showJSX = !isArticleVisible && (
        <div className={Styles.article}>
            <p>
                Article is hidden , but you can open it clicking button:
                <button onClick={showArticle}>Click here!</button>
            </p>
        </div>
    );

    return (
        <>
            {articleJSX}
            {showJSX}
        </>
    );
};
