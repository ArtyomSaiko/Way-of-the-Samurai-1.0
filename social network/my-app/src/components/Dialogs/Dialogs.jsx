import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.messages}>
                    <div className={s.dialog}>Hi</div>
                    <div className={s.dialog}>How is you it-kamasytra</div>
                    <div className={s.dialog}>You</div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;