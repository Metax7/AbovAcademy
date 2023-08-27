import React, {useContext} from 'react';
import {Context} from "./wrapper";
import AmFlag from '../../assets/img/amFlag.png';
import EnFlag from '../../assets/img/enFlag.png';
import RuFlag from '../../assets/img/ruFlag.png';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function Lang() {
    const context = useContext(Context);

    return (
        <>
            <div>
                <Select
                    value = {context.locale} onChange={context.selectLanguage}

                >
                    <MenuItem value={'en'}>
                        <img src={EnFlag} width={20} alt=""/>
                    </MenuItem>
                    <MenuItem value={'am'} id={'aaa'}  style={{zIndex:'999999999999999 !important'}}>
                        <img src={AmFlag} width={20} alt=""/>
                    </MenuItem>
                    <MenuItem value={'ru'}>
                        <img src={RuFlag} width={20} alt=""/>
                    </MenuItem>
                </Select>
            </div>

        </>
    )
}
export default Lang