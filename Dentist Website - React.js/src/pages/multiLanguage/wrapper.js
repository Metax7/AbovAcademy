import React ,{useState} from "react";
import {IntlProvider} from 'react-intl';
import Armenian from './lang/am.json';
import English from './lang/en.json';
import Russian from './lang/ru.json';

export const Context = React.createContext();

const local = 'am';

let lang;
if (local === 'en') {
    lang = English;
}else {
    if (local === 'am') {
        lang = Armenian;
    } else {
        lang = Russian;
    }
}
const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'en') {
            setMessages(English);
        } else {
            if (newLocale === 'am'){
                setMessages(Armenian);
            } else {
                setMessages(Russian);
            }
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

    );
}
export default Wrapper