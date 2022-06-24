import React from 'react'
import style from '@/styles/error.module.css';
export default function error500() {
    return (
        <div className={style.errors}>
            <h1>500</h1>
            <h2>Unexpected Error <b>:(</b></h2>
            <div className={style.gears}>
                <div className={`${style.gear} ${style.one}`}>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </div>
                <div className={`${style.gear} ${style.two}`}>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </div>
                <div className={`${style.gear} ${style.three}`}>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </div>
            </div>
        </div>
    )
}
