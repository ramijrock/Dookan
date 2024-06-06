import React from "react";
import {TextInput} from '../../components';
import { COLORS } from "../../utils/globalColors";


const HeaderSearch = () => {
    return (
        <>
            <TextInput 
                placeholder={'Search Product'}
                leftName={'search'}
                placeholderTextColor={COLORS.textColor}
            />
        </>
    )
}

export default HeaderSearch;