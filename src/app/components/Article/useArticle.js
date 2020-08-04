import { useState } from 'react';

export const useArticle = (hidden) =>{

    const [isArticleVisible, setVisible] = useState(!hidden);

    return{
        setVisible,
        isArticleVisible
    }
}
