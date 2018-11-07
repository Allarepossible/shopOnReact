import React from 'react';
import styled, {withTheme} from 'styled-components';

import Text from './Text';

const InfoContainer = styled.div`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
    margin-bottom: 30px;
`;

const Information = () => (
    <InfoContainer>
        <Text is='h2' fontSize='l' fontWeight='bold' textAlign='center'>Важная информация</Text>
        <Text is='p' textAlign='justify'>Повседневная практика показывает, что сложившаяся
            внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.
            Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий в
            значительной степени обуславливает создание модели развития. Таким образом консультация
            с широким активом представляет собой интересный эксперимент проверки модели развития.</Text>
        <Text is='p' textAlign='justify'>Повседневная практика показывает, что сложившаяся
            внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.
            Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий в
            значительной степени обуславливает создание модели развития. Таким образом консультация
            с широким активом представляет собой интересный эксперимент проверки модели развития.</Text>
        <Text is='p' textAlign='justify'>Повседневная практика показывает, что сложившаяся
            внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.
            Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий в
            значительной степени обуславливает создание модели развития. Таким образом консультация
            с широким активом представляет собой интересный эксперимент проверки модели развития.</Text>
        <Text is='p' textAlign='justify'>Повседневная практика показывает, что сложившаяся
            внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.
            Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий в
            значительной степени обуславливает создание модели развития. Таким образом консультация
            с широким активом представляет собой интересный эксперимент проверки модели развития.</Text>
    </InfoContainer>
);

export default withTheme(Information);
