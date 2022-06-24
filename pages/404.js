import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router';
import style from '../styles/error.module.css';
export default function notFound404() {
    const [redirectSeconds, setRedirectSeconds] = useState(5);
    const router = useRouter();
    
    useEffect(() => {
        if (redirectSeconds < 0) {
            router.push('/');
            return;
        }
    
        setTimeout(() => {
            console.log(redirectSeconds);
            setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
        }, 1000)
    }, [redirectSeconds]);
  return (
    <div>
          <div id={style.notfound}>
              <div className={style.notfound}>
                  <div className={style.notfound404}>
                      <div></div>
                      <h1>404</h1>
                  </div>
                  <h2>Page not found</h2>
                  <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                  <a href="/">home page</a>
              </div>
          </div>
    </div>
  )
}
