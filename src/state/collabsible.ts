import { signal } from "@preact/signals-react";

export const openId = signal( -1 );

export function setOpen( id: number ) {
    openId.value = openId.value === id ? -1 : id;
}
export function resetOpenId(){
    openId.value = -1;
}
