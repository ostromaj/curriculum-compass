'use client';
import {useEffect,useState} from 'react';
export function ThemeToggle(){
 const [dark,setDark]=useState(false);
 useEffect(()=>{try{const enabled=localStorage.getItem(`theme:${window.location.pathname.split('/')[1]}`)==='dark';setDark(enabled);document.documentElement.dataset.theme=enabled?'dark':'light'}catch{}},[]);
 function toggle(enabled:boolean){setDark(enabled);document.documentElement.dataset.theme=enabled?'dark':'light';try{localStorage.setItem(`theme:${window.location.pathname.split('/')[1]}`,enabled?'dark':'light')}catch{}}
 return <label className="theme-toggle"><input type="checkbox" checked={dark} onChange={e=>toggle(e.target.checked)}/> <span>Dark mode</span></label>
}
